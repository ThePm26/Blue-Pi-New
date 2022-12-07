---
post_image: https://static.bluepiit.com/blog/wp-content/uploads/sites/2/2017/01/Automate-with-ELBs.png
layout: post
status: publish
published: true
title: Thinking to automate AMI backups; Use AWS Lambda, with ELB tags
author:
  display_name: gaurav
  login: gaurav
  email: gaurav@bluepi.in
  url: ''
author_login: gaurav
author_email: gaurav@bluepi.in
permalink: /blog/thinking-to-automate-ami-backups-and-cleanup-we-got-your-back-using-aws-lambda-with-elb-tags-easy/
date: '2017-01-23 12:52:11 +0530'
date_gmt: '2017-01-23 12:52:11 +0530'
categories:
- cloud
tags:
- aws
- ami-backups
comments: []
---
# Thinking to automate AMI backups; Use AWS Lambda
If you&rsquo;ve been following our blog, you would know how we love to talk about advances in technology and ensure that our readers get the most out of reading our posts.
This is the thing about being a tech enthusiast, we start to believe in what sufficiently advanced technology can do; it becomes indistinguishable from magic. Technology feeds on technology, technology makes technology possible.
Without much ado, let me put forth another informative piece, to help you get sorted with automating AMI backups and cleanup. In <a href="https://www.bluepiit.com/blog/how-to-automate-ami-backups-cleanups-using-aws-lambda-serverless-with-ec2-tags/">our earlier post</a>, we discussed a key limitation when it comes to working with EC2 tags:
<blockquote>  &ldquo;The process works very well for all standalone instances unless the instance terminates. In cases where you might have a load balancer serving many instances, the tag attached to one instance may terminate for some reason, therefore, not creating the AMI. However, there&rsquo;s a workaround using ELBs. It fetches all the load balancers with pre-defined tags (Backup for example), puts them in an array and passes them through a loop, before picking one instance attached to it, to create the AMI.&rdquo;  </blockquote>
Now going forward, in this blog-post, let us take you through the steps involved in automating the AMI backups and cleanups using AWS Lambda for ELB tags.

##### The process generally comprises of the following steps:
 + Setup IAM Permissions  
 + Create Lambda Backup Function  
 + Create Lambda Cleanup Function  
 + Schedule Functions  
 + Tagging Elastic Load Balancer (ELB)  

Side Note: Above steps are quite similar to the previous blog but here we are focusing on the functionalities for ELB tags.  
##### 1. SETUP IAM PERMISSIONS
Login to your <a href="https://console.aws.amazon.com/iam">AWS Management console</a>, Go to  **Services**, and click on  **IAM under Security &amp; Identity**.  

In  **IAM Dashboard**, Click on  **Roles**, and  **Create New Role** with the R **ole Name: lamda-ec2-elb-ami-role; Select Role Type** in  **AWS Service Roles as AWS Lambda** then proceed to create a role. Go to  **Policies** tab; click  **Create Policy** and select  **Create your own policy** (you can name the policy as  **lamda-ec2-elb-ami-policy**). Paste the content (additional permission to ELB) of the following JSON in  **Policy Document**, and click on  **Create Policy**.  

          {
          "Version": "2012-10-17",  
          "Statement": [  
          {  
          "Effect": "Allow",  
          "Action": [  
          "logs:*"  
          ],  
          "Resource": "arn:aws:logs:*:*:*"  
          },  
          {  
          "Effect": "Allow",  
          "Action": "ec2:*",  
          "Resource": "*"  
          },  
          {  
          "Effect": "Allow",  
          "Action": "elb:*",  
          "Resource": "*"  
          }  
          ]  
          }

Select the created policy, click on **Policy Actions and Attach** to select the role already created &ndash; lamda-ec2-elb-ami-role and click on  **Attach Policy. **We have just created a role for which we have allowed permissions to ELB, EC2 instances and view logs in Cloudwatch:  
{% picture "{{relative.url}}/assets/images/blog/ec2.png" --img class="img-responsive blog_image_size" --alt EC2 instances %} 
&hellip;and here&rsquo;s the IAM Role ( **lamda-ec2-elb-ami-role**) with the attached policy ( **lamda-ec2-elb-ami-policy**)  

{% picture "{{relative.url}}/assets/images/blog/iam.png" --img class="img-responsive blog_image_size" --alt iam role %}
   **&nbsp; &nbsp; &nbsp;**

##### 2. CREATE LAMBDA BACKUP FUNCTION

Now that we have created a role and a policy, we&rsquo;ll have to create the first function that allows us to backup by picking anyone instance from the attached <a href="https://www.bluepiit.com/blog/different-types-of-aws-instances/">(AWS) instances</a> to ELB in our account, which has a "Backup" key tag. We don&rsquo;t have to indicate a value here. 

Here&rsquo;s how the AMI backup script works:  
+ The script will first search for all the load balancer&rsquo;s having a tag with " **Backup**&rdquo; on it.  
+ As soon as it has the load balancer&rsquo;s list, it loops through each load balancer&rsquo;s and fetch the instance ids for instances had been attached to the load balancer and put it in an     array.  
+ Then pick the first index of instance id in an array list to create an AMI.  
+ Also, it will look for a " **Retention**" tag key which will be used as a retention policy number in days. If there is no tag with that name, it will use a 7 days default value for each AMI.  
+ After creating the AMI it creates a " **DeleteOn**" tag on the AMI indicating when it will be deleted using the Retention value and another Lambda function.  

So here&rsquo;s how you can create your first function. Go to Services, Lambda, and click Create a Lambda Function:  
Login to your <a href="https://console.aws.amazon.com/iam">AWS Management console</a>, Go to  **Services**, and click on  **Lambda** under  **Compute**.  

- Click on  **Functions** Menu on the left, and click on  **Create a Lambda Function**  
- Select  **Blank Function** and proceed with lambda  
- Give a name for it - **lambdaAMIbackups**  
- Select Python 2.7 as a Runtime option.  
- You&rsquo;ll have to write a code next by considering the above mentioned points.  
- Select the previously created IAM role ( **lamda-ec2-elb-ami-role**)  
  Click **Next and Create Function.**  

{% picture "{{relative.url}}/assets/images/blog/configfunc.png" --img class="img-responsive blog_image_size" --alt Configure Function %}
{% picture "{{relative.url}}/assets/images/blog/lamda.png" --img class="img-responsive blog_image_size" --alt lamda %}
While creating lambda function, make sure to choose the IAM role created earlier ( **lamda-ec2-elb-ami-role**) and have specified sufficient memory and timeout configurations.  

### 3. CREATE LAMBDA CLEANUP FUNCTION
  Having successfully created the AMI using the previous function, we need to now remove them when not needed anymore.  
  Here&rsquo;s how the AMI cleanup script works:  
 - The script first searches for all load balancers having a tag with " **Backup**&rdquo; on it.  
 - As soon as it has the load balancers list, it loops through each load balancer and refers the AMIs of that load balancer.  
 - It checks that the latest daily backup succeeded then it stores every image that's reached its DeleteOn tag's date for deletion.  
 - It then loops through the AMIs, de-registers them and removes all the snapshots associated with that AMI.  

Using the same steps as before, create the function ( **lambdaAMIcleanup**) by following the steps.  
You will end up with something like this:     
{% picture "{{relative.url}}/assets/images/blog/func.png" --img class="img-responsive blog_image_size" --alt Functions %}
So, you have 2 working functions that will backup AMI and remove those when "DeleteOn" specifies. And now, it&rsquo;s time to automate using the Event sources feature from Lambda.

### 4. SCHEDULE FUNCTIONS
We need to run at least once a day both. Login to your <a href="https://console.aws.amazon.com/iam">AWS Management console</a>, Go to  **Services**, and click on  **Lambda under Compute **.  
 - Click on **Functions Menu** on the left, and click on the function you want to schedule 
 -  **lambdaAMIBackups** for example.
 - Go to  **Triggers tab** and click on  **Add Trigger**
 - Select  **Cloudwatch Events - Schedule**
 - Type Rule Name (**create-ami for example**)
 - Go to  **Schedule Expression**: select  **cron** and modify accordingly with the  **schedule time**.
 - Check  **Enable Trigger**
 - Click  **Submit** 
{% picture "{{relative.url}}/assets/images/blog/trigger.png" --img class="img-responsive blog_image_size" --alt trigger %}
  &nbsp;  

##### Create AMI Schedule
{% picture "{{relative.url}}/assets/images/blog/trigger2.png" --img class="img-responsive blog_image_size" --alt trigger2 %}

##### Delete AMI Schedule
{% picture "{{relative.url}}/assets/images/blog/trigger3.png" --img class="img-responsive blog_image_size" --alt trigger3 %}

Note that the schedule time is shown in in UTC format &ndash; something like this:  
Lambda AMI Backup Function scheduled to run at 18:45 UTC or 12.15AM IST and Lambda AMI Cleanup Function scheduled to run at 19:30 UTC or 12.45AM IST every day.  
You can now see the rules under  **Services** >>  **Management Tools** >>  **CloudWatch** >> **Rules**; after you create the schedule:  
{% picture "{{relative.url}}/assets/images/blog/rule.png" --img class="img-responsive blog_image_size" --alt rule %}
  &nbsp;  

##### TAGGING Elastic Load Balancer (ELB)
Having created AMI backup and cleanup functions and scheduling them, now it&rsquo;s time to create a tag for the load balancers with a tag-key  **Backup** with no value and  **Retention** with retention days.  

Login to your <a href="https://console.aws.amazon.com/iam">AWS Management console</a>, Go to ** Services **, and click on ** EC2 ** under  **Compute**.  
- Click on  **Load Balancers** menu  
- Select the load balancer you want to tag ( **test-elb**, for example).
- Go to **Tags** >>  **Add Tags** and add a tag with  **Backup** with no value and with **Retention** value 4, for example.
{% picture "{{relative.url}}/assets/images/blog/pic-10.png" --img class="img-responsive blog_image_size" --alt pic-10 %}

Here, tag-key &ldquo; **Backup**&rdquo; is used to identify the instance of load balancer for which the AMI has to be created and tag-key &ldquo; **Retention**&rdquo; with value  **&ldquo;4**&rdquo; ensures that we retain AMI for 4 days and delete after 4 days. If the Retention tag is not used then, by default, it retains for 7 days.  
Now you can see the AMI created with tag-key &ldquo; **DeleteOn**&rdquo; with deletion date.  

{% picture "{{relative.url}}/assets/images/blog/pic-11.png" --img class="img-responsive blog_image_size" --alt pic-11 %}

This AMI will delete on the date shown in  **Value**, only when there is a successful AMI created for that day.  
That&rsquo;s it! We&rsquo;ve successfully used AWS Lambda to automate AMI backups and cleanups for ELB tags.  
Easy? Isn't it? If you still face any challenge, drop a comment below and we would be more than happy to assist you further. If you have any feedback or insights to share with us, we&rsquo;re <a href="https://www.bluepiit.com/contact-us">just a click away</a>.  

**Till then, Happy Innovating!**
{% picture "{{relative.url}}/assets/images/blog/naga.jpg" --img class="img-responsive blog_image_size" --img style="width:80px; height:80px;" --alt naga %}  **Nagarjuna D. N** is System Administrator with BluePi Consulting.     