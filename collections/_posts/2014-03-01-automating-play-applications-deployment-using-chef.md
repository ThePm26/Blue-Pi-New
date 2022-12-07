---
layout: post
status: publish
published: true
title: Automating Play Applications Deployment using Chef
permalink: /blog/automating-play-applications-deployment-using-chef/
author:
  display_name: BluePi
  login: 
  email: 
  url: ''
author_login: 
author_email: 
date: '2014-03-01 17:36:39 +0530'
date_gmt: '2014-03-01 12:06:39 +0530'
categories:
- cloud 
- devops
tags:
- devops advantage 
- application 
- devops-automation
- app
comments: []
---
# Automating Play Applications Deployment using Chef
Extreme Programming goes hand in hand with the Scrum practices that we follow in the modern software development. The promises made by implementing Scrum can only be fulfilled if we follow the development practices that compliment it. Extreme Programming or XP practices are a must if we want a work environment which is dynamic and responsive.Continous Integration remains a practice that is most widely adopted in the world of software development everywhere, even teams that don't believe in Agile , do believe in an automated system of delivering code to dev,staging or production environments. CI helps build an environment where the customer or users of an application could access the latest developments and provide a prompt feedback.

CI becomes an overhead or somebody's fulltime job if it is not automated, but luckily with the advent of Chef and Puppet it has become much simpler to automate all the steps in the build and release cycle without knowing too much about Linux and shell programming. What that means is that we don't need any Linux system administrators to develop a build/release system, we could write code in Ruby to achieve all that without really going into the details of shell scripting.
In this post lets build a recipe to deploy Play applications with Chef. 

1. Retrieving Artifacts 
Play offers a dist mode for your applications to be deployed in production mode, There are 2 ways we can retrieve the deployable artifacts which are listed as follows 
2. Checkout your code from github on the node(where you deploy your application) and run "play dist" at the application root, this creates a zip file with all your library dependencies and a start script to run the application. So if you specified app name as play_app and version 1.0.0-SNAPSHOT in Build.scala file the artifact created would be play_app-1.0.0-SNAPSHOT.zip which contains a lib folder where all the jar dependencies are kept and a start script which runs your Play application in production mode. 
3. In this approach we will move step in approach 1 to a CI server which could be either Jenkins, Teamcity, Bamboo or any CI tool of your choice, and in our cookbook we simply download the dist artifact at the time of deployment. 
This approach is better suited because you don't want to load your Prod machine with things it is not supposed to do, so let the compilation of your depoyable artifact happen at the CI server and whenever you intend to deploy the latest version, just download it from that CI server. 
Now lets start writing some code that would do that for us, we will define a remote_file block in our recipe which downloads the artifact from the CI server or any URL where u have published your artifact. 

<pre class="lang:ruby decode:1 "><code style="white-space: normal; color:#4512AE;"
>remote_file "#{installation_dir}/#{appName}.zip" do
source "#{dist_url}"
mode "0644"
action :create
end</code></pre>
Here the values of installation_dir and dist_url can either be defined as attribute in default.rb under attributes folder in your cookbook or pick the configure the values in a databag. Lets say "/usr/src" is the installation directory and appName is "play_app", the above snippet would download the zip file from dist_url and place it at /usr/src/play_app.zip. 
Next step is to unzip the folder and assign correct permissions to the start script

<pre class="lang:ruby decode:1 "><code style="white-space: normal; color:#4512AE;"
>bash "unzip-#{appName}" do
cwd "/#{installation_dir}"
code < <-EOH
rm -rf #{installation_dir}/#{appName}
unzip #{installation_dir}/#{appName}.zip
chmod +x #{installation_dir}/#{appName}/start
rm #{installation_dir}/#{appName}.zip
EOH
end</code></pre>
The above code snippet runs a bash script at the installation_dir (/usr/src in this case) , first line removes the already existing directory holding your deployable artifacts. Next step simply unzips the file and assigns execution permissions to the start script, finally it removes the zip file that was downloaded. 
Now we are ready to launch the Play Application using the "start" script , but before that we will do a few more things, like putting a configuration file in place, creating a logger file and building a service which starts the application in an automated mode in case node reboots. 
First we will create a conf file to be used by our application, we need to templatize the application configurations, to achieve this put an application.conf.erb file under templates/default folder in your cookbook.This template file looks like
<pre class="lang:ruby decode:1 "><code style="white-space: normal; color:#4512AE;"
>#Application Configuration File
application.secret="< %=@applicationSecretKey%>"
db.default.url="jdbc:mysql://< %= @dbHostName %>:3306/< %= @dbName %>
....</code>
</pre>
All keys enclosed with < %=@ %> are going to be replaced by following code snippet when the recipe is run by Chef, with the help of following code in the recipe, config_dir is the directory where you want to keep your configuration file
<pre class="lang:ruby decode:1 "><code style="white-space: normal; color:#4512AE;"
>template "#{config_dir}/application.conf" do
source "application.conf.erb"
variables({
:applicationSecretKey => "#{node[:play_app][:application_secret_key]}",
:applicationLanguage => "#{node[:play_app][:dbHostName]}",
.....
....
})
end </code></pre>
You can add as many variables as you intend to have in your configuration file to be replaced by values at runtime(use databags for storing environment specific values). 
Now the next step is to create a logger file, we'll create a template file named logger.xml.erb at same location as application.conf.erb and add a template block which fills in the placeholders with the real values at runtime.
<pre class="lang:ruby decode:1 "> <code style="white-space: normal; color:#4512AE;"
>template "#{config_dir}/logger.xml" do
source "logger.xml.erb"
variables({
....
:maxHistory => "#{node[:play_app][:max_logging_history]}",
:playloggLevel => "#{node[:play_app][:play_log_level]}",
:applicationLogLevel => "#{node[:play_app][:app_log_level]}"
.....
})
end </code>
</pre>
Anything that you want configurable like the logging level, location of log file etc can go into the variables part, recommended way to retrieve the values is a databag since you would like to keep different values for separate environments. 
Now finally we'll create a service file to be kept under /etc/init.d on a linux distribution, so that we need not start the application on machine reboots or application deployment. I am not going to put in the details of the service script here, you can look at the code on github for the same. Lets talk about the code that creates this script and supplies various options.</p>
<pre class="lang:ruby decode:1 "> <code style="white-space: normal; color:#4512AE;"
>template "/etc/init.d/#{appName}" do
source "initd.erb"
owner "root"
group "root"
mode "0744"
variables({
:name => "#{appName}",
:path => "#{installation_dir}/#{appName}",
:pidFilePath => "#{node[:play_app][:pid_file_path]}",
:options => "-Dconfig.file=#{config_dir}/application.conf -Dpidfile.path=#{node[:play_app][:pid_file_path]} -Dlogger.file=#{config_dir}/logger.xml #{node[:play_app][:vm_options]}",
:command => "start"
})
end </code>
</pre>
Lets go through this code line by line. First line says create a file named play_app under /etc/init.d from template initd.erb(to be kept under templates/default or templates/[your_linux_distro]). Next line says root is the owner of this file and the permissions are 744 which means owner of the file has execution rights on this script and no one else. 
Now we come to the variables part, we'll see what is the role of each variable in the service 
 **name**  -> name of the application to be started 
 **path**  -> directory location where the start script could be found (location where we unzipped the dist file /usr/src/play_app) 
 **pidFilePath**  -> the location of the pid file, this file contains the current process id of the play application 
 **options**  -> These options are specified like where is the conf file, the logging configurations , any VM parameters(like Maximum Heap Size etc), you can also specify the port as well using the -Dhttp.port option. 
 **command**  -> the script to be launched by the service while starting the application, in our case it is the "start" file kept under /usr/src/play_app . 
Finally we enable this service by writing the service block in our recipe

<pre class="lang:ruby decode:1 "><code style="white-space: normal; color:#4512AE;"
>service "#{appName}" do
supports :stop => true, :start => true, :restart => true
action [ :enable, :restart ]
end </code>
</pre>
once done , Chef restarts the service automatically to reflect the changes and updates the pid file with the current process id of this service. 
Lets now briefly discuss how this could be run for deploying for the first time and thereafter. If you are using the <a href="https://www.bluepiit.com/blog/how-to-automate-copying-an-ec2-amis-from-one-aws-region-to-another-cleanup-using-aws-lambda/">Amazon EC2</a> infrastructure simply use the "knife ec2 server create" command with "deploy-play" recipe in the run list and specify environment with -E parameter, this will set up the machine with the required Technology stack and install your application code there. 
For subsequent deployments , you need not do more than just "sudo chef-client" from the command line. This chef-client run remembers what all recipes were run on this node the last time and which environment this node belongs too, it will synchronize the cookbooks for any changes made and install all the latest artifacts from your repository. 
Tip: If you see an empty run list when you execute "sudo chef-client" , go to /etc/chef folder, and take a look at first-boot.json file, it would contain the run_list that was used to create this node, if it has all the right values execute the following line
<pre class="lang:shell decode:1 "> <code style="color:#4512AE;"
>sudo chef-client -j /etc/chef/first-boot.json -E [node 's-environment=""] </code></pre>

If it doesn't contain what you are looking for just edit the first-boot.json and add/remove recipes/roles to the run_list and run the above command, this run would update the node on chef-server with the latest run_list and the next time you just need to run "sudo chef-client". 
Cookbook can be downloaded from <a title="deploy-play-cookbook" href="http://community.opscode.com/cookbooks/deploy-play">http://community.opscode.com/cookbooks/deploy-play</a> to use in your project. <a href="https://www.bluepiit.com/blog/automate-configuration-management-with-chef/">In the next post on Chef we'll see how we can automate the task of updating configuration files with each deployment</a>.
