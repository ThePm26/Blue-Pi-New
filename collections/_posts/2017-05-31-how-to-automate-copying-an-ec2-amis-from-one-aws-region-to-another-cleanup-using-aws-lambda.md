---
post_image: https://static.bluepiit.com/blog/wp-content/uploads/sites/2/2017/05/atomate.png
layout: post
status: publish
published: true
title: How to automate copying an EC2 AMI from one region to another
author:
  display_name: Blue Pi
  login: yogesh
  email: yogesh@bluepi.in
  url: ''
author_login: yogesh
author_email: yogesh@bluepi.in
permalink: /blog/how-to-automate-copying-an-ec2-amis-from-one-aws-region-to-another-cleanup-using-aws-lambda/
date: '2017-05-31 12:30:24 +0530'
date_gmt: '2017-05-31 12:30:24 +0530'
categories:
- cloud
tags:
- aws
- ami-backups
comments: []
---
# Automate copying an EC2 AMI from one region to another
We have the previous blogs published to create AMI&rsquo;s with <a href="https://www.bluepiit.com/blog/how-to-automate-ami-backups-cleanups-using-aws-lambda-serverless-with-ec2-tags/">EC2 tags</a> and <a href="https://www.bluepiit.com/blog/thinking-to-automate-ami-backups-and-cleanup-we-got-your-back-using-aws-lambda-with-elb-tags-easy/">ELB tags</a> in the specific region.
The AMI&rsquo;s copied across the different region helps in the scenarios like Disaster Recovery (DR) setup and also to quickly recover in case failure of EC2 service in the entire region which is in rare case.
You can read more about AMI copy from a blog, published by a Jeff Barr <a href="https://aws.amazon.com/blogs/aws/ec2-ami-copy-between-regions/" target="new" rel="noopener noreferrer">here.</a> Some of the important key scenarios are highlighted:

+ <strong>Multi-Region Deployment</strong> &ndash; You can copy an AMI from one region to another, enabling you to easily launch consistent instances based on the same AMI into different regions.
+ <strong>Scalability</strong> &ndash; You can more easily design and build world-scale applications that meet the needs of your users, regardless of their location.
+ <strong>Performance</strong> &ndash; You can increase performance by distributing your application and locating critical components of your application in closer proximity to your users. You can also take advantage of region-specific features such as instance types or other AWS services.
+ <strong>Higher Availability</strong> &ndash; You can design and deploy applications across AWS regions, to increase availability.

Few important key points necessary to keep in mind in order to understand this blog:

+ <a href="https://www.bluepiit.com/blog/how-to-automate-copying-an-ec2-amis-from-one-aws-region-to-another-cleanup-using-aws-lambda/">You can copy any AMI that you own</a>, EBS or instance store (S3) backed, and with any operating system.
+ The copying process doesn&rsquo;t copy permissions or tags so you&rsquo;ll need to make other arrangements to bring them over to the destination region.
+ The copy process will result in a separate and new AMI in the destination region which will have a unique AMI ID.
+ The copy process will update the Amazon RAM Image and Amazon Kernel Image references to point to equivalent images in the destination region.
+ You can copy the same AMI to multiple regions simultaneously.
+ The console-based interface is push-based; you log in to the source region and select where you&rsquo;d like the AMI to end up. The API and the command line are, by contrast, are pull-based and you must run them against the destination region and specify the source region.

In this blog-post, by keeping above points in mind, let us take you through the steps involved in automating the copying of AMI to a different region and tag those with the retention date and clean up them based on the retention expiration date (if needed) using AWS Lambda.
The process generally comprises the following steps:

+ Setup IAM Permissions.
+ Create Lambda Copy AMI across Region Function.
+ Create Lambda Cleanup Copied AMI Function.
+ Schedule Functions.

## 1. SETUP IAM PERMISSIONS
This step is similar to the previous blog, you can refer <a href="https://www.bluepiit.com/blog/how-to-automate-ami-backups-cleanups-using-aws-lambda-serverless-with-ec2-tags/">here</a>.
## 2. CREATE LAMBDA COPY AMI ACROSS REGION FUNCTION
Now that assume we have created a role and a policy from the previous step, we will have to create the first function that allows us to copy the AMI from the one region to another.
Here&rsquo;s how the AMI backup script works:

+ The script will first search for the AMI created for the date specified in the source AWS region (Ex: Mumbai (ap-south-1)).
+ As soon as it loops the AMI, it checks for the same AMI already exists in the destination AWS region (Ex: Singapore (ap-southeast-1)).
+ If the AMI doesn&rsquo;t exist or already copied then it copies AMI to the destination region.
+ After copying the AMI it creates a <strong>"DeleteOnCopy"</strong> tag on the AMI-indicating when it will be deleted using the Retention value and another Lambda function.

So here&rsquo;s how you can create your first function. Login to your <a target="new" rel="noopener noreferrer">AWS Management console</a>, Go to Services, and click on Lambda under Compute.

+ Click on Functions Menu on the left, and click on Create a Lambda Function
+ Select Blank Function and proceed with lambda
+ Give a name for it &ndash; LambdaAMICopyAcrossRegion
+ Select Python 2.7 as a Runtime option * you will have to write a code next. Refer this GitLab page for a <a href="https://gitlab.com/nagarjunadn/InfraAutomations/blob/master/Cloud/AWS/AMICopy/LambdaAMICopyAcrossRegion.py" target="new" rel="noopener noreferrer">sample code</a>
+ Select the previously created IAM role (lamda-ec2-ami-role)
+ Click Next and Create Function

&nbsp;
<div class="col-md-12"><img class="img-resposive center-block" src="https://dhh0yoio3ikfv.cloudfront.net/blog/wp-content/uploads/sites/2/2017/05/Configure-function.png" width="100%" /></div>
<
<div class="col-md-12"><img class="img-resposive center-block" style="margin-top: 10px;" src="https://dhh0yoio3ikfv.cloudfront.net/blog/wp-content/uploads/sites/2/2017/05/lambda-function-handler-and-role.png" width="100%" /></div>
While creating lambda function, make sure to choose the IAM role created earlier <b> (lamda-ec2-ami-role)</b> and have specified sufficient memory and timeout configurations.
<b style="color: red;">Warning:</b>
This script copies all the AMI&rsquo;s are being created for that day which does incur charge for the AMI storage. The script can be further customized to copy only the required AMI&rsquo;s by matching the substring pattern or on the requirement basis.
## 3. CREATE LAMBDA CLEANUP COPIED AMI FUNCTION
Having successfully copied the AMI using the previous function, we need to now delete it when not needed anymore/ to avoid keeping the same set of AMI for the long duration. Here&rsquo;s how the Copied AMI cleanup script works:

+ It checks and stores the every image that's reached its &ldquo;DeleteOnCopy&rdquo; tag's date for deletion.
+ It then loops through the AMIs, de-registers them and removes all the snapshots associated with those AMI.

Using the same steps as before, create the function (LambdaCleanupCopiedAMI) and refer this <a href="https://gitlab.com/nagarjunadn/InfraAutomations/blob/master/Cloud/AWS/AMICopy/LambdaCleanupCopiedAMI.py" target="new" rel="noopener noreferrer">sample code.</a>
So, you have 2 working functions that will copy AMI and cleanup those when "DeleteOnCopy" specifies. And now, it&rsquo;s time to automate using the Event sources feature from Lambda.
## 4. SCHEDULE FUNCTIONS
This step is similar to the previous blog, you can refer <a href="https://www.bluepiit.com/blog/how-to-automate-ami-backups-cleanups-using-aws-lambda-serverless-with-ec2-tags/" target="new" rel="noopener noreferrer">here</a>. The only difference is the scheduling the trigger date-time as below.
We need to run at least once a day both. For doing that, we need to:

+ Go to <b>Services, Lambda,</b> click on the function name
+ Click on <b>Triggers</b> and click on <b>Add trigger</b>
+ Select Cloudwatch Events - Schedule
+ Type Rule Name: <b>ami-region-copy</b> or <b>copied-ami-region-cleanup</b> based on the function you are scheduling
+ Schedule expression: select <b>cron</b> and modify accordingly with the schedule time
+ Check <b>Enable Trigger</b>
+ Click <b>Submit</b>

<div class="col-md-12"><img class="img-resposive center-block" src="https://dhh0yoio3ikfv.cloudfront.net/blog/wp-content/uploads/sites/2/2017/05/add-trigger.png" width="100%" /></div>
&nbsp;
<div class="col-md-12"><img class="img-resposive center-block" style="margin-top: 10px;" src="https://dhh0yoio3ikfv.cloudfront.net/blog/wp-content/uploads/sites/2/2017/05/add-trigger-2.png" width="100%" /></div>
Note that the schedule time is shown is in UTC format &ndash; something like this:

- Lambda AMI Copy Function scheduled to run at 22:30 UTC or 04.00AM IST and Lambda AMI
- Lambda Copied AMI Cleanup Function scheduled to run at 24:30 UTC or 05.00AM IST every day.

That&rsquo;s it! We&rsquo;ve successfully used AWS Lambda to automate AMI copy and cleanups across the regions. We will discuss <b>&ldquo;How to automate, update copied AMI in the DR launch configuration with the Auto-Scaling group using AWS lambda&rdquo;</b> in the upcoming blog. Stay tuned&hellip;.
If you still face any challenge, drop a comment below and we would be more than happy to assist you further.
This blog has been written by Nagarjuna D. N.
{% include author_naga.html %}
