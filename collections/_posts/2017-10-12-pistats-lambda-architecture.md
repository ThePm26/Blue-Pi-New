---
post_image: https://static.bluepiit.com/blog/wp-content/uploads/sites/2/2017/10/Blog-pistats-lamda.jpg
layout: post
status: publish
published: true
title: piStats AWS Lambda Architecture
author:
  display_name: Blue Pi
  login: yogesh
  email: yogesh@bluepi.in
  url: ''
author_login: yogesh
author_email: yogesh@bluepi.in
permalink: /blog/pistats-lambda-architecture/
date: '2017-10-12 17:30:55 +0530'
date_gmt: '2017-10-12 17:30:55 +0530'
categories:
- cloud
tags:
- aws
- amazon-rds
comments: []
---
# piStats AWS Lambda Architecture
## Problem Statement
piStats enables its clients to analyze the users on their site and send Push Notifications to engage and retain them for a longer duration. For this purpose the clients&rsquo; register their users&rsquo; on piStats using piStats SDKs.<br />
The user base registered on piStats is unevenly distributed across different clients and their properties and the registration load is unpredictable - it is usually high for either first release with piStats integration or on a day when a special event occurs like elections.<br />
To handle the unpredictable load piStats needs to scale up or down as the need occurs.
<div class="col-md-12" style="margin-top: 10px; margin-bottom: 10px;"><img class="img-resposive center-block" src="https://dhh0yoio3ikfv.cloudfront.net/blog/wp-content/uploads/sites/2/2017/12/pistatsdiagram.png" width="100%" /></div>

## Solution and Flow
To handle the load of sudden spurt of registration and subscription and to remove the overhead of scaling up and down to hand in accordance with the load piStats utilizes AWS Lambda architecture. AWS Lambda is an event driven service from Amazon.<br />
Whenever a new client&nbsp;starts using piStats and a release&nbsp;rolls out after integration, piStats observes a sudden surge of events. With this surge of event, AWS Lambda&nbsp;architecture scales up easily and handles all events without us having to intervene and removes the overhead of handling the load manually.<br />
When the load reduces AWS Lambda&nbsp;architecture scales down itself and reduces the number of servers that had started to handle the sudden spurt of events.
## Components:

+ Kong
+ AWS Lambda
+ Redis
+ Amazon&nbsp;RDS
+ Amazon Kinesis

## Flow
Any request hitting piStats land onto the nginx servers with Amazon ELB in front with autoscaling to handle unpredictable load of events. The nginx servers then forward the registration/subscription requests to AWS Lambda. This is where all the interaction with Redis,&nbsp;Amazon RDS and FCM(Firebase Cloud Messaging) occurs.<br />
After processing, these requests&nbsp;again go to the Nginx servers which in turn sends these requests to Amazon Kinesis for further processing by our storm servers deployed on&nbsp;Amazon EC2 machines.<br />
The storm servers perform the required enrichment and send the data for storage in our analytics database.

{% include author_anjna.html %}