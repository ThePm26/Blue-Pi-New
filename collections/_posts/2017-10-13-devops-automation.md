---
post_image: https://static.bluepiit.com/blog/wp-content/uploads/sites/2/2017/10/Blog-DevOps-automation.jpg
layout: post
status: publish
published: true
title: DevOps Automation
author:
  display_name: Blue Pi
  login: yogesh
  email: yogesh@bluepi.in
  url: ''
author_login: yogesh
author_email: yogesh@bluepi.in
permalink: /blog/devops-automation/
date: '2017-10-13 03:27:42 +0530'
date_gmt: '2017-10-13 03:27:42 +0530'
categories:
- app-development
tags:
- app-dev
comments: []
---
# DevOps Automation
## About the Client
Jain International Trade Organization (JITO) is a worldwide body of Jain businessmen, industrialists, knowledge workers and professionals in various fields reflecting their glory of ethical business practices. JITO is set to achieve socio-economic empowerment, value based education, community welfare, practice of compassion, spiritual upliftment of fellow beings through global friendship.
## Business Problem
While developing the multi platform application for JITO, major challenge was to achieve continuous integration environment in order to reduce release management cycle effort and manual errors. BluePi has automated project management cycle starting from development to its deployment using the process defined in this blog. This has been leveraged for. 
## Introduction
BluePi has achieved the automation in the project management cycle starting from development to its deployment. This has significantly reduced manual errors and time to build and deploy.
## Automation Tools
In Devops automation BluePi uses the following automation tools
+ GitLab
+ GitLab CI
+ Youtrack
+ AWS CodeDeploy and AWS CodePipeline

## Project Phases Involved in Automation
<img class="blog_image_size" src="https://dhh0yoio3ikfv.cloudfront.net/blog/wp-content/uploads/sites/2/2017/10/dev.png"/>

## Youtrack
It is a browser-based bug tracker, issue tracking system and project management software .<br />
It&rsquo;s a project management software facilitates a development team to track stories and share it with the with other team members

+ YouTrack and GitLab integration helps in referencing an issue ID in the comments when you commit updates to the code repository. The VCS integration adds a direct link to the YouTrack issue in the change details.
+ Enter commands in the comments for your commits and pull requests in the VCS. When a commit is made, the command is applied all the issues that are referenced in the comment.

<img class="blog_image_size" src="https://dhh0yoio3ikfv.cloudfront.net/blog/wp-content/uploads/sites/2/2017/10/youtrack.png"  />

## GitLab
GitLab is a web-based repository manager that lets teams collaborate on code, duplicate code to safely create and edit new projects, then merge finished code into existing projects. GitLab gives you complete control over your repositories and give you the flexibility to make it public/private/free.

+ We use GitLab as VCS.
+ Any project has a separate repository in GitLab and project in Youtrack with the same issue ID.
+ Issue ids generated in YouTrack are used for branches which make the release management easy. It helps in tracking the stories going live in each release.

<img src="https://dhh0yoio3ikfv.cloudfront.net/blog/wp-content/uploads/sites/2/2017/10/gitlab.png"  />

## GitLab CI/CD
+ GitLab offers a continuous integration service and it facilitates in continuous delivery and continuous deployment to automatically deploy tested code to staging and production environments.
+ Most projects use GitLab's CI service to run the test suite so that developers get immediate feedback if they are not going right with it
+ If you add a .gitlab-ci.yml file to the root directory of your repository, and configure your GitLab project to use a Runner, then each commit or push, triggers your CI pipeline.
+ If everything runs OK , you'll get a nice green checkmark associated with the commit. This makes it easy to check whether a commit caused any of the tests to fail before you even look at the code.

<img class="blog_image_size" src="https://dhh0yoio3ikfv.cloudfront.net/blog/wp-content/uploads/sites/2/2017/10/lab.png" width="100%" />

GitLab CI is used for the code build process. We keep three environments:
+ Dev
+ Beta
+ Production

There are scripts which build the code when a new change is made to respective environment and pushes the code to a designated S3 bucket.

## Integration with GitLab
+ Fully integrated with GitLab.
+ Quick project setup: Add projects with a single click, all the hooks are setup automatically via the GitLab API.
+ Merge request integration: See the status of each build within the Merge Request in GitLab.

## AWS CodeDeploy and AWS CodePipeline

+ AWS CodeDeploy is a deployment service that automates application deployments on AWS cloud .
+ It facilitates in deploying a nearly unlimited variety of application content, such as code, web and configuration files, executables, packages, scripts, multimedia files, and so on.
+ AWS CodeDeploy deploys the application contents that are stored in Amazon S3 buckets.
+ AWS CodeDeploy makes it easier to Quickly release new features, helps to avoid downtime during application deployment and manage the complexity of updating applications, thus prevents the error-prone manual deployment.

<img class="blog_image_size" src="https://dhh0yoio3ikfv.cloudfront.net/blog/wp-content/uploads/sites/2/2017/10/codedep.png" width="100%" />

+ AWS CodeDeploy is invoked to connect pull code from the Amazon S3 bucket and deploy it on&nbsp;Amazon EC2 servers
+ We are using different deployment groups for beta and production.
+ In Beta, all the servers get code at the same time while in production we do partial deployment on half of the servers and then on the rest.

## Benefits of Automation

+ **Less manual intervention:**The whole automation process involves a very less manual involvement.
+ **Consistency:** Same issue codes works in the all three environments so there is consistency of codes in each environment.
+ **Minimizes Downtime:** AWS CodeDeploy helps maximize your application availability and it result in very less downtime while deployment process.
+ **Easy to Adopt:** The complete automation process is easy and simple to adopt.
+ **Takes less time:** there is no need to build the code distinctly for each different environment because a single code packet works for all so less time needed for development.
+ **Enhanced Customer Service:** The primary goal of <a href="https://www.bluepiit.com/devops"> DevOps</a> is to deliver higher quality software to end users within the scheduled time , delivering the best outputs around improved customer experience .
