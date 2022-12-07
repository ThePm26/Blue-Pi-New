---
post_image: https://static.bluepiit.com/blog/wp-content/uploads/sites/2/2016/10/gatway.png
layout: post
status: publish
published: true
title: Choosing Kong-The API Gateway
author:
  display_name: gaurav
  login: gaurav
  email: gaurav@bluepi.in
  url: ''
author_login: gaurav
author_email: gaurav@bluepi.in
permalink: /blog/choosing-kong-the-api-gateway/
date: '2016-10-12 10:44:50 +0530'
date_gmt: '2016-10-12 10:44:50 +0530'
categories:
- app-development
tags:
- app-dev
- kong-api-gateway
- app-development
comments: []
---
# Choosing Kong-The API Gateway
In the previous blog, <strong><a href="https://www.bluepiit.com/blog/pistats-analytics-from-enormous-information-to-actionable-insights/">&lsquo;A Million Events in 5 Minutes! Know How We Do It.&rsquo;</a></strong>, we provided a high-level view of the architecture of piStats and how an incoming clickstream event travels through our system to get a visual representation on our real-time dashboards.<br />
In this particular blog, we&rsquo;ll give a detailed view of that component of our architecture where the clickstream event first knocks, i.e., the API Gateway and the reasons why we ended up choosing this one over the other available options.<br />
The journey of a clickstream event starts with getting captured from the user&rsquo;s browser from where it needs to be sent to a buffer storage to get consumed later. Any activity performed by the user on the Client&rsquo;s website has to be captured and sent to the backend systems for further processing and analysis.
<strong>How Does The Event Get Captured?</strong>: Every user activity on the client&rsquo;s website is captured by library written in Javascript that is responsible for identifying the user&rsquo;s clicks and activities and posting it to our systems for temporary storage in the buffer. The library captures all the possible events including clicks, video events and any custom event the client wants to get captured. Along with the user activity on a website we also capture the user activity from the mobile apps by integrating our SDKs to capture and post the user&rsquo;s activity on the app.
<strong>Why do we need an API gateway?</strong>: As said the clickstream captured from the user&rsquo;s browser/app is sent to a buffer storage to be picked up later for further analysis. The buffer storage that we use is <a href="https://www.bluepiit.com/blog/decoding-the-use-cases-of-aws-kinesis-streams/"> Kinesis Streams</a> that allows storage of the events for a minimum of 24hours(our current configuration).
Any event being posted to Kinesis Streams has to be an authenticated signed request which requires a set of API keys. These API keys can be obtained by various methods using your AWS account. So one of our options to post events to Kinesis was to do it directly from the user&rsquo;s end be it browser or app. Doing this would have resulted in exposing the API keys, our credentials to the world. Therefore, an intermediate pass
<ul>-API Gateway was required that could take the request posted from the user end and then send it to the Kinesis Streams using authentication known only to system communicating with Kinesis, maintaining security and keeping the credentials safe and confidential.</ul>
<ul>-This API Gateway is responsible for consuming the request from the library on the user&rsquo;s browser and posting it to the Kinesis streams and sending the response received from the Kinesis back to the library for it to extract the essential information,i.e., the user id, to be used in further future requests.</ul>
<ul>-This API Gateway acts as a proxy pass between the user and the Kinesis Streams to ensure security and single point of contact with the system but having multiple exits depending on the type of the request received.</ul>
<ul>-It helps the outside world to interact with our system in a secure, robust and cost-effective(depending on the choice of a gateway) way, gluing together the two different worlds.</ul>
<strong>Kong API Gateway</strong>: Kong, built on top of NGINX, is an Open Source Scalable API Gateway that can be run and used on any infrastructure and gets integrated with any number of APIs. Kong can be configured using the Rest Admin APIs with any number of plugins as per one&rsquo;s use case. It also allows creating custom plugins for any custom implementations.
Kong also has the capability to limit the number of API request that a user can make based on several parameters, one of them being the Response Header returned by the Upstream API. These request limits can be configured on requests per second, minutes, hours, and so on. Kong provides plugins to configure the rate limits as per once choice of limiting objects and thresholds.
Kong allows clustering of multiple instances in order to take heavy loads and making it horizontally scalable.<br />
Kong acts as both a Restful interface as well as a plugin-oriented application that allows implementing custom functionalities that can sit behind Kong and be used without having to worry about scaling and performance.<br />
Kong makes clustering easier by storing the admin information in a database(Cassandra/Postgres), that again can be externalized in order to be used by multiple instances running Kong.
<strong>Kong-Our Use Case</strong>: As said earlier we required a scalable, cost-effective, secure and robust API Gateway that could help us consume the post request from the user end and send it to the Kinesis Streams, without having to expose the credentials to the outside world.<br />
Kong suited our requirement in every sense:
<ul>-Kong can be run in multiple instances and share the same database in order to have same configurations in terms of APIs, plugins, authentication, etc.</ul>
<ul>-Kong allows using the Nginx-lua scripts in order to perform custom functionalities before passing the request down the stream.</ul>
<ul>-Kong is open source and hence you only pay for the instance in which kong runs.</ul>
<ul>-It is easily customizable and gives a satisfactory performance even on the smallest EC2 instance available.</ul>
<strong>How and What We Did</strong>: Kong can easily be configured using configuration files based on yaml. The Kong config contains the configuration for nginx as well, wherein we provided filters for server and ports.<br />
The .yml file of kong allows one to list the servers, ports,plugins and allows to include custom scripts to execute functions to be performed before passing on the request to Kinesis.<br />
As said earlier we wanted to post data to Kinesis which required a custom Lua scripts to generate signed requests for Kinesis using the Signature Version 4. Along with that, we do some intermediate manipulation of the data before posting to Kinesis.<br />
The intermediate manipulation involves extracting the IP Address of the user from the header data, using the remote address variable of nginx, to add to the body, required by the system in further journey.
<br><img class="img-responsive blog_image_size" src="https://static.bluepiit.com/blog/wp-content/uploads/sites/2/2016/10/code1.png" alt="" /><br />
<br>
Extracting Ip and header and setting to body
<br><img class="img-responsive blog_image_size" src="https://static.bluepiit.com/blog/wp-content/uploads/sites/2/2016/10/code2.png" alt="" /><br />
<br>
Calling the Lua Script to set headers for Kinesis
<br><img class="img-responsive blog_image_size" src="https://static.bluepiit.com/blog/wp-content/uploads/sites/2/2016/10/code3.png" alt="" /><br />
<br>
Lua script to fetch creadentials and set haeders
<br><img class="img-responsive blog_image_size" src="https://static.bluepiit.com/blog/wp-content/uploads/sites/2/2016/10/code4.png" alt="" /><br />
<br>
Headers have to be signed using AWS4 and HMAc
We configured kong on our systems with Postgres installed on the local machine itself. Since we needed to accept 600 requests per second with a response of less than 200ms we configured our systems for high network throughput.<br />
It runs so efficiently that even with high traffic the Utilization on the instance remains low and the response time remains below 150ms.
<br><img class="img-responsive blog_image_size" src="https://static.bluepiit.com/blog/wp-content/uploads/sites/2/2016/10/code5.png" alt="" /><br />
<br>
Checking whether enhanced networking is enables in ami
<br><img class="img-responsive blog_image_size" src="https://static.bluepiit.com/blog/wp-content/uploads/sites/2/2016/10/code6.png" alt="" /><br />
<br>
Enabling enhanced networking
<br><img class="img-responsive center-block blog_image_size" src="https://static.bluepiit.com/blog/wp-content/uploads/sites/2/2016/10/BD-NEW-.png" alt="" /><br />
<br>
<strong>Our Tests</strong>: We tested the Kong instance for load and perform tests. We load tested our single kong instance(a micro ec2 instance) with 10000 approximate post request in 20 seconds. The results were as follows:- None of the requests failed or timed out<br />
-The average latencies were below 600ms<br />
-The minimum latencies being 200ms and maximum being 7sec<br />
This was the detailed view of one of our components of piStats. In the next upcoming blog we will takeup another interesting component of the <a href="https://www.bluepiit.com/blog/pistats-lambda-architecture/"> piStats architecture</a>.
<br><img class="alignnone size-full wp-image-1832" src="https://dhh0yoio3ikfv.cloudfront.net/blog/wp-content/uploads/sites/2/2016/12/anjna.jpg" alt="" width="99" height="99" />
Anjna Bhati is Software Engineer with BluePi Consulting and right now working on feature enhancement of piStats.
