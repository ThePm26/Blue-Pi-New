---
post_image: https://static.bluepiit.com/blog/wp-content/uploads/sites/2/2016/08/pistats.jpg
layout: post
status: publish
published: true
title: A Million Events in 5 Minutes! Know How We Do It.
author:
  display_name: Blue Pi
  login: yogesh
  email: yogesh@bluepi.in
  url: ''
author_login: yogesh
author_email: yogesh@bluepi.in
permalink: /blog/pistats-analytics-from-enormous-information-to-actionable-insights/
date: '2016-08-23 13:00:54 +0530'
date_gmt: '2016-08-23 13:00:54 +0530'
categories:
- app-development
tags:
- app-dev
- app-development
comments: []
---
# A Million Events in 5 Minutes! Know How We Do It.
piStats Analytics is designed to consume every activity and event of a user on the client's site. These events are sent to our systems to extract valuable information like trends and active users that provide an insight to the client on how the site is performing on any particular day or performed on a previous day.
Capturing this information securely without loss and performing real-time aggregations to give a real-time visualization of the captured information was a challenge.
In this series of the blog post we are going to talk about the high-level architecture that we followed and the challenges we had to overcome. The detailed vies of each piece of the architecture with technology will be discussed in subsequent blogs
The foundation and the beginning of our product-piStats is capturing the clickstream events of the user from the client's website and transferring it securely to our systems to perform real-time aggregations. The data transfer should be such that no data is lost on its way to our systems and should be fast enough to reach the systems without delay in order for the client to get an insight of his site's current trends.
The data that comes into the system from clickstreams has all the attributes of <a htref="https://www.bluepiit.com/big-data"> Big Data</a> &ndash; Volume, Velocity, and Variety. We get about 10 million events in a single day when the traffic on site is average and this data comes up to 300million clickstream events every month which is about a 100GB. The data coming in varies in speed from 100 events per second to 600 per second and the system is expected to scale and function without lag and delay and obviously zero downtime.
The system has to be fast enough to capture, enrich and analyse this data real-time for the client to get the current insight of the site&rsquo;s performance and popularity, robust enough to sustain the bombardment of events on a good day where traffic is extremely high and process 600 events per second without lag and downtime.
### Motivations behind the architecture

- Performing aggregations in real-time with little or no lag</li>
- Reduce Cost without compromising on speed and accuracy.</li>
- Provide visualizations to client that are useful and help extract valuable information.</li>
- Give real-time and historical visualization for the client to have a cumulative insight of the site.</li>
- Give real-time dashboards to the client reflecting the current state of site reactively.</li>
- &nbsp;Create complex segments having queries with multiple joins without losing performance on database end.</li>

<div class="col-md-12" style="margin-top: 10px; margin-bottom: 10px;"><img class="img-responsive center-block" src="https://static.bluepiit.com/blog/wp-content/uploads/sites/2/2016/09/Asset-4.jpg" alt="" /></div>
<h3>Journey of a clickstream Event</h3>
Whenever a user lands onto the client's site the event and subsequent clickstreams are captured from the user end and transported to an API Gateway for further processing which is then sent a stream to for further consumption by the system at another end to perform aggregations. This data from user's site should be transported to the gateway fast enough to not block the user's experience on the site, hence the gateway has to respond fast for the request sent from the user end. Also, it should be guaranteed that the request and response are secure and there is no data loss at both ends. Also, it is made sure that none of the requests fail and are responded to in milliseconds.
The event captured by the gateway is then sent to a stream for buffering until the time consumer picks it for further processing. The stream receives the event and retains it for a stipulated amount of time in order to make it available for the consumer's input in the sequence of their insertion into the stream. The stream gives the capability to consume and process event from various different positions varying from the latest to the one that was inserted first and is still in the stream. Also one has the capability to read from a particular time as well in order to replay data if required.
An event inserted into the stream waits until the consumer picks it up for further aggregation. The consumer picks the event from the stream and performs enrichment and aggregation on those events and then sends the enriched events to the database for storage which is again input to the visualizations. Each processed event is checkpointed in order to prevent replaying of the same event. All the events from the stream are picked, processed, aggregated and checkpointed in parallel in order to keep up with the pace of producer that is the API Gateway. If the consumer becomes slow as compared to the producer the load on the system would increase and would result in lag or downtime.
In order to prevent that, the consumer works in a parallel multithreaded environment to consume events at high speed and process the events and store in the database in order to give real-time insights to the client. The consumer and the database has to be tuned enough to keep pace with the incoming events without fail.
The real-time aggregated data persisted to the database acts as an input to the real-time dashboard visualizations that give the client an overview of the site performance, current users, trending topics, etc. Every time the database gets an update of the aggregation the dashboard immediately reflects the update for the client without having to refresh the data. The dashboard moves and reacts to every change in the database without a refresh or wait. The dashboards give the client the ability to have a real-time as well as a historical view of the site. The real-time view is immediately available whereas historical is available after a day's delay.
The historical view has an option to get an insight aggregated daily, monthly or weakly. Also, the visualization includes the capability to show the retention i.e, the numbers of users that keep coming back after their first visit. The retention view is real-time and is designed to function differently from all the aggregations that we have. Also, the client has a capability to create segments to generate a custom view by creating queries using a user-friendly view which is then transformed to queries having joined as per client requirement and the data is then fetched from the database used for historical aggregations. These segments are also used to send push notifications by the client to his users at desirable times.
The historical and real-time aggregations are designed to work on two different databases. One a NoSQL database and the other a data warehouse solution. Since the real-time aggregation does not require to work on a large dataset, hence they don't need queries with joins on tables with a huge amount of data. But history is different in the way that they need to show aggregations by querying the large dataset which can be as small as a day&rsquo;s aggregation and can be as large as an aggregation of a month. Hence the historical aggregations need to query the data by joining multiple tables with millions of rows thus requiring a different database solution that can perform joins and return results in seconds. The segmentation also works on this database solution giving results for complex queries in seconds and keeping the costs quite low.
This was the high-level architecture of piStats. Each component and technology behind it will be discussed in subsequent blogs.
