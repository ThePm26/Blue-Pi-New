---
post_image: https://static.bluepiit.com/blog/wp-content/uploads/sites/2/2016/11/featureimg.png
layout: post
status: publish
published: true
title: How to Automate AMI Backups & Cleanups, using AWS Lambda
author:
  display_name: gaurav
  login: gaurav
  email: gaurav@bluepi.in
  url: ''
author_login: gaurav
author_email: gaurav@bluepi.in
permalink: /blog/how-to-automate-ami-backups-cleanups-using-aws-lambda-serverless-with-ec2-tags/
date: '2016-11-22 06:26:37 +0530'
date_gmt: '2016-11-22 06:26:37 +0530'
categories:
- cloud
- lambda
- aws-lambda
- oop-2
tags:
- aws
- ami-backups
- aws-lambda
comments:
- id: 957
  author: How to Automate, Copying an EC2 AMI&rsquo;s from one AWS Region to Another,
    Cleanup, Using AWS Lambda?
  author_email: ''
  author_url: https://www.bluepiit.com/blog/how-to-automate-copying-an-ec2-amis-from-one-aws-region-to-another-cleanup-using-aws-lambda/
  date: '2017-05-31 12:50:57 +0530'
  date_gmt: '2017-05-31 12:50:57 +0530'
  content: "[&#8230;] have the previous blogs published to create AMI&rsquo;s with
    EC2 tags and ELB tags in the specific region. The AMI&rsquo;s copied across the
    different region helps in the [&#8230;]"
- id: 965
  author: 'Disaster Recovery Backup and Restore Step 1: automating snapshots &#8211;
    Head in the Cloud'
  author_email: ''
  author_url: http://soops.threemoonsnetwork.net/2017/09/25/disaster-recovery-backup-and-restore-step-1-automating-snapshots/
  date: '2017-09-26 00:12:02 +0530'
  date_gmt: '2017-09-26 00:12:02 +0530'
  content: "[&#8230;] https://www.bluepiit.com/blog/how-to-automate-ami-backups-cleanups-using-aws-lambda-serverless-with-&#8230;
    [&#8230;]"
- id: 974
  author: Automate, schedule and deploy AMI backups of EBS-Backed EC2 instances using
    Lambda, CloudWatch and Terraform &#8211; Irtaza Hassan
  author_email: ''
  author_url: http://www.irtaza.info/2018/12/19/automate-schedule-and-deploy-ami-backups-of-ebs-backed-ec2-instances-using-lambda-cloudwatch-and-terraform/
  date: '2018-12-19 23:48:54 +0530'
  date_gmt: '2018-12-19 23:48:54 +0530'
  content: "[&#8230;] How to Automate AMI Backups &amp; Cleanups, using AWS Lambda
    (Serverless), with EC2 Tags [&#8230;]"
- id: 999
  author: New Event Driven Service from Amazon | AWS Lambda | Bluepi Blogs
  author_email: ''
  author_url: 
  date: '2019-07-19 09:59:42 +0530'
  date_gmt: '2019-07-19 09:59:42 +0530'
  content: "[&#8230;] concept of event-driven programming is not new. But AWS Lambda,
    a service launched by Amazon Web Services, takes it to the next level allowing
    developers to focus [&#8230;]"
- id: 1073
  author: Disaster Recovery with Amazon | AWS CloudFormation | Bluepi Blogs
  author_email: ''
  author_url: 
  date: '2019-09-06 09:31:37 +0530'
  date_gmt: '2019-09-06 09:31:37 +0530'
  content: "[&#8230;] for storage or compute resources by their own. It supports Python,
    Node.js, C#, and Java, by 2017.  One can also Automate AMI Backups and Cleanups
    (Serverless) using AWS Lambda . The high-level representation of the workflow
    as shown [&#8230;]"
---
# How to Automate AMI Backups & Cleanups, using AWS Lambda
Is your <a href="https://www.bluepiit.com/devops"> Dev-ops</a> or Infrastructure management team looking for options for cloud cost optimization and save time by eliminating human errors and the need for dedicated resources (like a standalone server) executing all tasks? Look no further!<br />
Automating AMI backups and cleanups using AWS Lambda helps you solve the above predicament to the T. We&rsquo;ve seen it put to good use, and though we&rsquo;ll bring it to you in this step-by-step guide. So, let&rsquo;s get started!
#### What is AWS Lambda?
As Wikipedia says, AWS Lambda is an event-driven, serverless computing platform provided by Amazon Web Services.<br />
Introduced in 2014,  AWS Lambda simplifies the process of building smaller, on-demand applications that are responsive to events and new information. It runs code in response to events and automatically manages to compute resources required by the code. You can start a Lambda instance within milliseconds! To top it all, it supports Node.js, Python, and Java, as of 2016.
**Why do I need AMI Backups and Cleanups?**
AMI makes it easier and faster to recover an instance in case of a disaster or failure of the instance, and therefore, automating this process is the way to go.
In this blog-post, let me take you through the steps involved in automating the AMI backups and cleanups using AWS Lambda <a href="https://www.bluepiit.com/blog/thinking-to-automate-ami-backups-and-cleanup-we-got-your-back-using-aws-lambda-with-elb-tags-easy/"> (also, automate AMI Backups and Cleanups with ELB tags, using AWS Lambda)</a>

The process, generally comprises of the following steps:
1. Setup IAM Permissions
2. Create Lambda Backup Function
3. Create Lambda Cleanup Function
4. Schedule Functions
5. Tagging EC2 Instance

Let&rsquo;s now take a closer look at each of them with some demos and screenshots to make it easier.

##### 1. SETUP IAM PERMISSIONS
Login to your <a href="https://console.aws.amazon.com/iam/" target="_blank" rel="noopener noreferrer">AWS Management console</a>, Go to **Services**, and click on **IAM** under **Security &amp; Identity.**

In **IAM Dashboard**, Click on **Roles**, and** Create New Role** with the Role Name: **lamda-ec2-ami-role**. Under **<em>AWS Service Roles</em>**, select **<em>AWS Lambda</em>** as the **<em>Role Type</em>** and then proceed to create a role. Go to **Policies** tab, click **<em>Create Policy</em>** and select **Create your own policy** (you can name the policy as **lamda-ec2-ami-policy**). Paste the content of the following JSON in **Policy Document**, and click on **Create Policy**.


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
        }
        ]
        }

Select the created policy, click on **Policy Actions** and **Attach** to select the role already created - lamda-ec2-ami-role and click on **Attach Policy.**
We have just created a role for which we have allowed permissions to EC2 instances and view logs in Cloudwatch:
<br>
{% picture "{{relative.url}}/assets/images/blog/role.png" --img class="img-responsive blog_image_size" --alt Role %} 
&hellip;and here&rsquo;s the IAM Role (**lamda-ec2-ami-role**) with the attached policy (**lamda-ec2-ami-policy**)
{% picture "{{relative.url}}/assets/images/blog/per.png" --img class="img-responsive blog_image_size" --alt Per %} 
<div class="col-md-12"></div>

##### 2. CREATE LAMBDA BACKUP FUNCTION
Now that we have created a role and a policy, we&rsquo;ll have to create the first function that allows us to backup every instance in our account, which has a** "Backup"**&nbsp; key tag. We don&rsquo;t have to indicate a value here.
Here&rsquo;s how the AMI backup script works:

+ The script will first search for all ec2 instances having a tag with **"Backup**&rdquo; on it.
+ As soon as it has the instances list, it loops through each instance and then creates an AMI of it.
+ Also, it will look for a **"Retention"** tag key which will be used as a retention policy number in days. If there is no tag with that name, it will use a 7 days default value for each AMI.
+ After creating the AMI it creates a **"DeleteOn"** tag on the AMI indicating when it will be deleted using the Retention value and another Lambda function.

So here&rsquo;s how you can create your first function. Go to Services, Lambda, and click Create a Lambda Function:<br />
Login to your <a href="https://console.aws.amazon.com/lambda/" target="_blank" rel="noopener noreferrer">AWS Management console</a>, Go to **Services**, and click on **Lambda** under **Compute**.

+ Click on **Functions** Menu on the left, and click on **Create a Lambda Functio**n
+ Select **Blank Function** and proceed with lambda
+ Give a name for it - **lambdaAMIBackups**
+ Select Python 2.7 as a Runtime option * You&rsquo;ll have to write a code next. Refer this github page for a <a href="https://gitlab.com/nagarjunadn/InfraAutomations/raw/master/Cloud/AWS/AMIBackupCleanup/lambdaAMIBackups.py" target="_blank" rel="noopener noreferrer">sample code</a>
+ Select the previously created IAM role **(lamda-ec2-ami)**
+ Click **Next** and **Create Function**

&nbsp;
{% picture "{{relative.url}}/assets/images/blog/2up.png" --img class="img-responsive blog_image_size" --alt 2up %} 
{% picture "{{relative.url}}/assets/images/blog/handlr.png" --img class="img-responsive blog_image_size" --alt handlr %} 
<br><br />
<br>
While creating lambda function, make sure to choose the IAM role created earlier (**lamda-ec2-ami-role**) and have specified sufficient memory and timeout configurations.

##### 3. CREATE LAMBDA CLEANUP FUNCTION
Having successfully created the AMI using the previous function, we need to now remove them when not needed anymore.
Here&rsquo;s how the AMI cleanup script works:

+ The script first searches for all ec2 instances having a tag with **"Backup&rdquo;** on it.
+ As soon as it has the instances list, it loops through each instance and reference the AMIs of that instance.
+ It checks that the latest daily backup succeeded then it stores every image that's reached its DeleteOn tag's date for deletion.
+ It then loops through the AMIs, de-registers them and removes all the snapshots associated with that AMI.

Using the same steps as before, create the function (**lambdaAMICleanup**) and refer this <a href="https://gitlab.com/nagarjunadn/InfraAutomations/raw/master/Cloud/AWS/AMIBackupCleanup/lambdaAMICleanup.py" target="_blank" rel="noopener noreferrer">sample code.</a><br />
You will end up with something like this:
{% picture "{{relative.url}}/assets/images/blog/lfn.png" --img class="img-responsive blog_image_size" --alt lfn %} 

So, you have 2 working functions that will backup AMI and remove those when "DeleteOn" specifies. And now, it&rsquo;s time to automate using the Event sources feature from Lambda.
##### 4. SCHEDULE FUNCTIONS
We need to run at least once a day both. Login to your<a href="https://console.aws.amazon.com/lambda/" target="_blank" rel="noopener noreferrer"> AWS Management console</a>, Go to **Services**, and click on **Lambda** under **Compute**.

+ Click on **Functions** Menu on the left, and click on the function you want to schedule - **lambdaAMIBackups** for example.
+ Go to **Triggers** tab and click on **Add Trigger**
+ Select **Cloudwatch Events - Schedule**
+ Type **Rule Name ( create-ami** for example)
+ Go to **Schedule Expression**: select cron and modify accordingly with the schedule time.
+ Check **Enable Trigger**
+ Click **Submit**

&nbsp;
{% picture "{{relative.url}}/assets/images/blog/addtri.png" --img class="img-responsive blog_image_size" --alt addtri %} 
Create AMI Schedule
{% picture "{{relative.url}}/assets/images/blog/addtri2.png" --img class="img-responsive blog_image_size" --alt addtri2 %} 

Delete AMI Schedule
{% picture "{{relative.url}}/assets/images/blog/delami.png" --img class="img-responsive blog_image_size" --alt delami %} 
Note that the schedule time is shown in in UTC format &ndash; something like this:<br />
Lambda AMI Backup Function scheduled to run at 18:45 UTC or 12.15AM IST and Lambda AMI Cleanup Function scheduled to run at 19:30 UTC or 12.45AM IST every day.
You can now see the rules under **Services** >> **Management Tools** >> **CloudWatch** >> **Rules**; after you create the schedule:
{% picture "{{relative.url}}/assets/images/blog/rul.png" --img class="img-responsive blog_image_size" --alt rul %} 

##### 5. TAGGING EC2 INSTANCE
Having created AMI backup and cleanup functions and scheduling them, now it&rsquo;s time to create a tag for the EC2 instance with a tag-key Backup with no value and Retention with retention days. Login to your <a href="https://console.aws.amazon.com/ec2/">AWS Management console</a>, Go to Services, and click on EC2 under Compute.

+ Click on **Instances** menu
+ Select the Instance you want to tag (**Linux-test**, for example).
+ Go to **Tags** >> **Add Tags** and add a tag with **Backup** with no value and with **Retention** value 4, for example.

{% picture "{{relative.url}}/assets/images/blog/ret.png" --img class="img-responsive blog_image_size" --alt ret %} 
Here, tag-key **&ldquo;Backup&rdquo;** is used to identify the instance for which the AMI has to be created and tag-key **&ldquo;Retention&rdquo;** with value **&ldquo;4&rdquo;** ensures that we retain AMI for 4 days and delete after 4 days. If the Retention tag is not used then, by default, it retains for 7 days.<br />
Now you can see the AMI created with tag-key **&ldquo;DeleteOn&rdquo;** with deletion date.
{% picture "{{relative.url}}/assets/images/blog/delon.png" --img class="img-responsive blog_image_size" --alt delon %} 

This AMI will delete on the date shown in **Value**, only when there is a successful AMI created for that day.
That&rsquo;s it! We&rsquo;ve successfully used AWS Lambda to automate AMI backups and cleanups. The process might look daunting at first, but I&rsquo;m sure that this step-by-step guide would help keep it simple.

#### Is there a limitation?
Well, off-course. The process works very well for all standalone instances unless the instance terminates. In cases where you might have a load balancer serving <a href="https://www.bluepiit.com/blog/different-types-of-aws-instances/"> many instances (different types of it)</a>, the tag attached to one instance may terminate for some reason, therefore, not creating the AMI. However, there&rsquo;s a workaround using ELBs. It fetches all the load balancers with pre-defined tags (**Backup** for example), puts them in an array and passes them through a loop, before picking one instance attached to it, to create the AMI.

There is a whole lot more in our forthcoming blogpost, but until then, please keep the comments and feedback coming!
{% include author_naga.html %}