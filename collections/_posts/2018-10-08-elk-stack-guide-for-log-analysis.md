---
post_image: https://static.bluepiit.com/blog/wp-content/uploads/sites/2/2018/10/ELK-STACK-blog1.png
layout: post
status: publish
published: true
title: 'ELK STACK: A Perfect Guide for Log Analysis'
author:
  display_name: Blue Pi
  login: yogesh
  email: yogesh@bluepi.in
  url: ''
author_login: yogesh
author_email: yogesh@bluepi.in
permalink: /blog/elk-stack-guide-for-log-analysis/
date: '2018-10-08 13:11:56 +0530'
date_gmt: '2018-10-08 13:11:56 +0530'
categories:
- big-data
tags: 
- analytics
comments: []
---
# ELK STACK
<p> Before we get started with what exactly Elasticsearch, logstash, and Kibana does, we need to understand first what exactly the use of log is, how does it work to get meaningful insights out of it and last but not the least how it can improve an organization&rsquo;s efficiency. </p>
<p><b> What is log analysis? </b></p>
<p> Any system, like computer, servers, network or any other IT systems generates audit trails or logs that document the activities being performed. Organizations effectively record, analyze and evaluate these logs to eradicate the variety to risks that might prevail and meet compliance requirements. </p>
<p> Logs provided by various systems such as OS, applications, network and other IT systems are usually stored in a storage unit or to an application as log collectors. Log analysis tools usually generally capture the unstructured data such as CPU logs, application logs, configuration files, network logs and transform this logs in a uniform manner that provides support to the existing or new data sources after analyzing these logs to provide insights on the data. Log analysis not only helps in reducing and avoiding the associated risks but it also provides the factors that determine the cause and impact. </p>
<p> Some of the use cases associated with Log analysis are: </p>
<ul> 1.	Troubleshooting the systems, network, security, and regulatory compliance.</ul>
<ul> 2.	Understand the behavior of the users. </ul>
<ul> 3.	Rapid detection of failed processes. </ul>
<ul> 4.	Improving the search functionality and performance. </ul>
<ul> 5.	Dynamic data streaming </ul>
<p><b> Elasticsearch, Logstash and Kibana </b></p>
<p> Elasticsearch is an open source built on Apache Lucene written in Java is a near-realtime search engine which is distributed, Restful search and perform analytics which lets you perform and combine multiple searches such as structured, unstructured, geo, metric data. It scales seamlessly to handle petabyte of events per second. The documents that are stored in Elasticsearch are in JSON format that is schema-less which means you don&rsquo;t have to define the data sets before adding data. </p>
<p> Logstash is an open source, server-side data processing pipeline that can ingest data from multiple data sources simultaneously, transform the data and then send it to Elasticsearch. Data is often scattered across many systems and in many formats. Logstash supports a variety of inputs that pulls in an event from multiple sources at the same time. The inputs that logstash can take such as logs, metrics, web applications, data-sources etc and then you can parse your data in near real-time.</p>
<p> Now we have the logs with us, but with such huge quantity of logs are difficult to go through to get insights from, Kibana does that with great flexibility which does the data exploration and visualization for logs and time series analytics. It offers tight integration with Elasticsearch, which makes it the default choice for data stored in Elasticsearch.</p>
<p> The most common use case for using ELK stack is server log analysis for parsing the geolocation IPs and push it to Elasticsearch for which a general architecture diagram is given below:</p>
<p><br><br />
<img class="blog_image_size" src="https://static.bluepiit.com/blog/wp-content/uploads/sites/2/2018/10/ELK-stack-blog.png" alt="Architecture Diagram" width="800" height="200"></p>
<p> The IT operations teams are always looking for faster Mean time to Resolve and proactively discover the probable problem areas and with the addition of integrated machine learning, the elasticsearch is the even more powerful tool for IT operations. Elasticsearch monitors and analyze the unsupervised logs using the algorithm and identify unusual activities based on the historical analysis. The IT operations goal is to identify and address the issues occurring in the environment as soon as possible and ELK captures the error logs being gathered whenever there is any critical issue with the application.</p>
<p> Key indicators needs to be identified such HTTP status codes in Apache or Nginx server web server messages, metrics for memory utilization or duration counters are another example of regularly occurring key indicators. To get the best results, these indicators need to be averaged over a period of time to train the machine learning model and logs of defined key indicators needs to be captured over a longer duration that stays constant over a period of time to analyze the trend.</p>
<p> It is quite easy to get a trial version up and running with not much hassle over your operational data. X-pack can be installed for version greater than 5.4 where you can leverage the machine learning options using Kibana web interface. We recommend using data for more than 1 month to get better results so that machine can learn and model accordingly for usual and unusual behavior. </p>
