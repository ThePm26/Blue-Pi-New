---
post_image: https://static.bluepiit.com/blog/wp-content/uploads/sites/2/2018/07/web-applicatio-fire-wall-min.jpg
layout: post
status: publish
published: true
title: Implementing Web Application Firewall
author:
  display_name: Blue Pi
  login: yogesh
  email: yogesh@bluepi.in
  url: ''
author_login: yogesh
author_email: yogesh@bluepi.in
permalink: /blog/implementing-web-application-firewall/
date: '2018-07-23 07:29:15 +0530'
date_gmt: '2018-07-23 07:29:15 +0530'
categories:
- cloud
tags: 
- cloud services
comments: []
---
# Implementing Web Application Firewall
<h2> What is AWS WAF? </h2>
<p> WAF is web application firewall which is used for monitoring HTTP/HTPPS requests that are forwarded to AWS CloudFront or AWS Application load balancer. It is used to control your how CloudFront/Application load balancer responds to the request. </p>
<p> You can configure conditions and rules on the basis of which the requests are being allowed or denied. These conditions are further combined with web ACLs. WAF provides you extra protection to the DDoS attacks, SQL injection, cross-site scripting, HTTP flooding etc. as per the conditions of the web requests as given below: </p>
<ul>1. IP address that requests originates from. </ul>
<ul>2. Country that requests originates from </ul>
<ul>3. Values in request headers </ul>
<ul>4. String that appears in requests, either specific strings or string that match regular expression (regex) patterns </ul>
<ul>5. Length of requests </ul>
<ul>6. Presence of sql code that is likely to be malicious </ul>
<ul>7. Presence of script that is likely to be malicious </ul>
<p> Rules are created to created to precisely target the requests that one wants to allow, block or count. AWS provides two types of rules: </p>
<li> Regular rule </li>
<li> Rate based rule </li>
<p><br>
<p> <b> Regular rules </b> only uses condition to target specific requests. You can allow or deny a request coming from a specific IP range or block the request that contain a SQL like code in query string. </p>
<p> <b>Rate Based</b> rule allows you to block the requests after a certain threshold of request has reached from a specific IP. Rate-based rules count the requests that arrive from a specified IP address every five minutes.</p>
<p> <b> Web ACL</b> is where you define an action for each rule you configure i.e. allow, block or count. When a request matches all the conditions in a rule, it will allow or deny a particular request to be forwarded to cloudfront or Application load balancer.</p>
<p> WAF accepts the rules on the basis on the order the rules are listed. </p>
<p><b>WAF</b> allows you to choose the below mentioned behavior:</p>
<ul>1. Allow all requests except the ones you define. </ul>
<ul>2. Deny all requests except the ones you define. </ul>
<ul>3. Count the requests that match the properties you define. </ul>
<h2> WAF setup Workflow: </h2>
<p><br><br />
<img src="https://static.bluepiit.com/blog/wp-content/uploads/sites/2/2018/07/Untitled.png" alt="WAF Workflow" width="627" height="105" class="size-full wp-image-3396" /><br />
<br></p>
<p><b> Setting up WAF using cloudformation template:</b></p>
<p> For WAF setup, one needs to have access to the following AWS resources.</p>
<ul> 1. WAF full access </ul>
<ul> 2.	Cloudfront </ul>
<ul> 3.	Application load balancer </ul>
<ul> 4.	S3 bucket </ul>
<ul> 5.	Lambda functions </ul>
<ul> 6.	Cloudwatch read only access </ul>
<ul> 7.	Cloudformation </ul>
<p> To start with, setup WAF using the cloudformation template provided by AWS that comes with the default 8 conditions and creates the entire stack for WAF. While setting up the WAF, we need to create to separate bucket where the logs are to be kept. The cloudformation template will also create the lambda function which will parse the logs in S3 bucket for any malicious log or for a request that looks for a request that matches the conditions specified. </p>
<h3> Create Web ACL: </h3>
<p> The next step is to create and configure web ACL using navigation pane and give a name to it. Here you can also provide a cloudwatch metric as well and associate the AWS resource (CloudFront or ALB) that you want with web ACL you created.
<p><b> Creating conditions: </b>
<p> The cloudformation template automatically creates 8 conditions as given below: </p>
<ul>1.	SQL injection </ul>
<ul>2.	Cross site scripting </ul>
<ul>3.	HTTP flooding </ul>
<ul>4.	IP match condition </ul>
<ul>5.	String match condition </ul>
<ul>6.	Scanner and probe protection </ul>
<ul>7.	Reputation list </ul>
<ul>8.	Bad bot protection </ul>
<br>
<ul><b> 1. SQL injection:</b>
<p> A SQL injection match condition identifies the part of web requests, such as a header or a query string, that you want AWS WAF to inspect for malicious SQL code. In AWS WAF, you create SQL injection match condition and specify if you want to allow or deny requests that are like to contain malicious SQL code.</p>
</ul>
<ul><b> 2. Cross Site Scripting:</b>
<p> It identifies the part of web requests, such as a header or a query string that you want AWS WAF to inspect for malicious scripts. While creating cross-site scripting condition, you need to specify the filters which indicate the part of request you need to inspect. We can specify the part of the request that we want to inspect using WAF, such as header, body URI or query string etc. for a single query parameter or all query parameters that you define. In single query parameter, you are inspecting the values for the defined parameters while in all query parameters; WAF inspects all the parameter values within the query string for the possible malicious script. You can create more filters to a condition or create the separate condition for each filter as per your requirement.</p>
</ul>
<ul><b> 3. HTTP Flooding:</b>
<p> This condition is a rate based for HTTP flood protection that allows you to specify the limit of HTTP request coming from a particular user on the basis of which one can deny the request once the limit reaches the threshold. By default, the threshold is set at 2000 which can be changed as per the requirement. </p>
</ul>
<ul><b> 4. IP match condition:</b>
<p> In IP match condition, we can track from where the request has been originated on the basis of which we can allow/deny the request from the specified IP address.</p>
</ul>
<ul><b> 5. String match condition:</b>
<p> This condition searches for a specified string value in a header or in a query string on the basis of which we can allow/deny a particular request. We can take the part of request where we want to put the filter on like a body, header or query etc. Then we need to the value to match in a request that needs to be inspected. We can also set up multiple values to match in a request.</p>
</ul>
<ul><b> 6. Scanner and probe protection:</b>
<p> With the WAF setup using default cloud formation template, it also creates a lambda function which parses into the logs created by CloudFront distribution or Application load balancer that further counts the no. of malicious requests from a particular IP address and updates WAF to block the source IP address. </p>
</ul>
<ul><b>7. Reputation List:</b>
<p> The AWS WAF solution parses into the reputation list of IP address maintained by attackers like malware distributors, spammers and bots maintained by some organizations and help to block malicious IP addresses.</p>
</ul>
<ul><b> 8. Bad bot protection:</b>
<p> The standard Waf & Shield is currently parsed CloudFront logs sent to an s3 bucket. S3 bucket would trigger SNS or a Lambda function directly whenever it receives a new gzipped log file. The Lambda function will then downloads that file, parse it for malicious requests, and block the associated IP addresses. The waf-block-bad-behaving and waf-reactive-blacklist functions in the repo are linked to CloudFront. Occasionally, we will see signatures for bad bots in the user-agent string of the request. The CloudFront logs will show the user-agent string, so we could potentially parse that and block associated IPs accordingly. </p>
</ul>
<p> One can also create more custom conditions and link it to a particular web ACL as per requirements.</p>
<p> Once these rules and conditions are configured then we need to protect our AWS resources like CloudFront or Application load balancer and raise a ticket seeking support with AWS DRT team.</p>
