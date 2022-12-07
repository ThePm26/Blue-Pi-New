---
post_image: https://static.bluepiit.com/blog/wp-content/uploads/sites/2/2014/03/Automate-Configuration-chef.jpg
layout: post
status: publish
published: true
title: Automate Configuration Management with Chef
author:
  display_name: Blue Pi
  login: yogesh
  email: yogesh@bluepi.in
  url: ''
author_login: yogesh
author_email: yogesh@bluepi.in
permalink: /blog/automate-configuration-management-with-chef/
date: '2014-03-04 14:50:14 +0530'
date_gmt: '2014-03-04 14:50:14 +0530'
categories:
- cloud
- scala
- employer-branding
tags:
- devops advantage
comments: []
---
# Automate Configuration Management with Chef
 In the previous blog we saw how we can automate the deployment of Play framework applications using Chef, in this piece let's focus on automating Configuration Management for Play Framework applications using Chef. 
 There are a few steps involved in making the configuration updates automatic, we'll discuss these steps one by one 
  1. Externalize your application.conf  
  There is a configuration file in every Play project under the conf folder named application.conf, when we are in the development mode we make the configurations for database connections, SMTP settings etc, which work well for local development but the same configurations would not work in a dev, staging or a Production environment. So the first step to implement is to move the application.conf out of code and deploy it as a seperate artifact. In the previous post, we have seen how to run and deploy play applications in a Production kind of environment. 
  2. Set up a Databag for your environment specific values. 
 Chef offers a great tool for keeping values specific to each environment separately, called a Databag. Databag is nothing but a file stored on the chef server in json format. The structure of a sample Data bag for your application named myApp is as follows 
 
<code style="color:#4512AE;">
[json]<br />
{<br />
"id": "myApp",<br />
"values": {<br />
"db_host_name": "[db_host_name_here]",<br />
"db_name": "app_db",<br />
....<br />
...<br />
}<br />
}<br />
[/json]

  Let's try and understand the anatomy of the database. Create a database with the environment name, let's create the database for "dev" environment in our case, so I create a database named "dev" with id "myApp" and all my values are nested within the "values" field of this database.<br />
So in a chef recipe you would access the databag as follows  
<pre class="lang:ruby decode:1 "> <code style="color:#4512AE;">
env_name=node.chef_environment
databag = data_bag_item(env_name, "myApp") </code>
</pre>
 The above line gives me the databag object as a whole , to retrieve the value of db_host I would do 
<pre class="lang:ruby decode:1 "><code style="color:#4512AE;"
>dbHostName = databag['values']['db_host_name'] </code>
</pre>
  Now we have a databag created for Dev environment , similarly you can create databags for different environments. 
 3. Templatize your application.conf 
  Chef has support for creating Templates and keep placeholders which can be updated with relevant values at runtime. Lets create a template for application.conf now, the template file is always an erb file, so going by the nomenclature we would name our file as application.conf.erb.<br />
You must already be familiar with how the application.conf for a Play Application looks like. Let's see how an application.conf.erb looks like  
<pre> <code style="color:#4512AE;"
>class="lang:ruby decode:1 ">#Application Configuration File
application.secret="< %=@applicationSecretKey%>"
db.default.profile.driver=scala.slick.driver.MySQLDriver
db.default.url="jdbc:mysql://< %= @dbHostName %>:3306/< %= @dbName %>
..... </code>
</pre>
  The things enclosed within < %=@ %> are all the Placeholders you want to fill at runtime , you should only leave placeholders for values which change with the environments e.g the db hostname is going to be different for Production than Dev, but if you are using mysql for both environments you can simply hardcode the driver name(this is completely your choice as to what all values you want placeholders for). 
 You must be wondering where these values are going to be populated from, Lets see the Chef code which would fill these placeholders with values from databag. In the chef recipe under your cookbook write a template block as follows 
<pre class="lang:ruby decode:1 "> <code style="color:#4512AE;"
>template "#{config_dir}/application.conf" do
source "application.conf.erb"
variables({
:applicationSecretKey => databag['values']['db_host_name'],
:dbHostName => databag['values']['db_host_name'],
:dbName => databag['values']['db_name'],
....
...
})
end </code>
</pre>
  When the above code is executed , it looks for a file named application.conf.erb in your cookbook's templates/default or templates/[your_os_name] folders, and create a file name application.conf at location specified as #{config_dir}/ , so if you have declared config_dir as /opt/config it will create a new file application.conf under /opt/config/. 
 The placeholders in the erb file are replaced with the values from the corresponding values in the data bag. 
  4. Externalize your application.conf.erb 
 The above step works perfectly when you do your deployment the first time, because you simply create a copy of your application.conf and put placeholders instead of hardcoded values and place it in your cookbook, in subsequent deployments you will have to update your application.conf.erb in the cookbook code whenever some additions/deletions/modifications are made to the application.conf file during the development. 
 This approach is clumsy because the developer is working on the application code and would always require to make changes at 2 different projects i.e the application codebase and codebase for deployment. 
 To make this more convenient for programmers, simply create an erb file in your application code base and publish it as an artifact which can be downloaded at runtime by the Chef recipe. Let's see how that could be achieved.Let's say you publish the application.conf.erb as an artifact on TeamCity, Jenkins or any other CI tool that you use. 
 Add a snippet for downloading the erb file from a url in your recipe as follows 
<pre class="lang:ruby decode:1 "> <code style="color:#4512AE;"
>remote_file "#{download_location}/application.conf.erb" do
source "#{databag['values']['jenkins_url']}/application.conf.erb"
mode "0644"
action :create
end </code>
</pre>
 Above snippet downloads application.conf.erb at the defined download_location from url that you have defined in your database (your download url could be different for different environments).Now we need to make a small change to the template block we wrote above to make it use the template file(.erb) from the download_location instead of picking it from within the cookbook 
<pre class="lang:ruby decode:1 "> <code style="color:#4512AE;"
>template "#{config_dir}/application.conf" do
source "#{download_location}/application.conf.erb"
local true
variables({
:applicationSecretKey => databag['values']['db_host_name'],
...
})
end </code>
</pre>
  Adding line which says "local true", tells the template block to make use of the erb file defined at a certain location on your node. 
 Now your configurations will automatically get updated with every build once you run this recipe as part of your deployment. The remote_file block downloads the erb file from your CI url at a specific location, Template block looks for an erb file at this location and uses it to create a new application.conf file. 
 Simply run chef-client on your node and these property files will automatically get updated with modifications made. 
<pre class="lang:shell decode:1 ">sudo chef-client</pre>
 This way we have freed the programmers from touching the chef code to update the erb file and instead add a step to the development process which mandates the programmer to make an entry in application.conf.erb for every change made to the configurations of your application code.<br />
You can unit test your recipes by using chef-solo and once done simply upload your cookbook to the chef server. 
 The approach is not specific to <a href="https://www.bluepiit.com/blog/automating-play-applications-deployment-using-chef/">Play framework configurations</a>, you can apply the same recipe for any configuration files used by any framework. 
