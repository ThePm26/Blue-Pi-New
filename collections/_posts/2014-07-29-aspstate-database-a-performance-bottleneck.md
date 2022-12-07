---
post_image: https://static.bluepiit.com/blog/wp-content/uploads/sites/2/2014/07/asp-preformance-database.jpg
layout: post
status: publish
published: true
title: ASPState database - A performance bottleneck
author:
  display_name: pronam
  login: user
  email: pronam@bluepiit.com
  url: ''
author_login: user
author_email: pronam@bluepiit.com
permalink: /blog/aspstate-database-a-performance-bottleneck/
date: '2014-07-29 23:15:22 +0530'
date_gmt: '2014-07-29 23:15:22 +0530'
categories:
- database
tags:
- database performance
- grow-revenue
- database-aspstate-set-recovery-simple
comments: []
---
# ASPState database - A performance bottleneck
## The Project
We were recently tasked with resolving a performance bottleneck on a very popular online food ordering system in India. The problem statement was rather simple: The website was running very slow during peak hours.

The application was opaque to us - being an off the shelf application whose IP and therefore source the application vendor retained. So our investigations and analysis would need to be limited to the OS, Hardware and application level configuration.

Every good technician brings his own preferred set of tools with him - <a title="New relic" href="http://newrelic.com/">New Relic </a>is our tool of choice for monitoring. It comes with a free 30-day evaluation with some strings attached. This suited our purpose fine. [Note: It turned out later that the customer had a global enterprise licensing agreement for new relic!]

We looked at the metrics provided by New Relic and could determine that the database was performing well. All the stored procedures were completing their operations in under 100 ms. Network latency &amp; bandwidth between the application and the database was also found to be of no concern.

This was a three-tier application and the web tier was indeed taking up to 15 secs to process requests. We decided to work down the tiers to identify and isolate the bottlenecks.

The load balancer was configured to use sticky sessions however the session was being stored in the ASPState database. Given that the LB configuration was sticky we decided to change the session configuration to InProc. And Voila the problems were all gone.

We had a really happy customer - who saw an increase in revenue, reduction in provisioned hardware (therefore costs) and a 10 fold decrease in response time. Simple, right?

The above does point to the fact the ASPState database was a bottleneck and data also demonstrated that it was bottlenecking on Disk I/O. Why would that be?

Anytime a web request was coming in there was a write occurring to the ASPState database. Though the project/client did not need any of the below, but here are a few pointers on how to tune the ASPState database in case your architecture requires its use. Please note that there is a third option called in SessionServer where Session State can be stored on a separate server in memory. Both SessionState and ASPState lead to a single point of failure and bottleneck.

In another .Net Application that we are building ground up we have decided to go stateless as this leads to way more scalable architectures.

## Recommendations on tuning ASPState database
- Choose Simple Recovery Model&nbsp;- This will dramatically reduce the impact to the log that can be caused by the high volume of (transient and largely disposable) writes. &nbsp;<a title="Read More" href="https://docs.microsoft.com/en-us/sql/relational-databases/backup-restore/recovery-models-sql-server?redirectedfrom=MSDN&view=sql-server-ver15">Read more</a>

<p style="text-align: center;"><code>ALTER DATABASE ASPState SET RECOVERY SIMPLE;</code></p>
<p style="text-align: left;">2. Minimize or Isolate I/O &nbsp;- Choose the sstype -c and -d options to our the ASPState database on a different disk.</p>
<p style="text-align: left;">3. Though possible never use the same ASPState database for two different web applications or sites.</p>
<p style="text-align: left;">4. The stored procedure tempresettimeout is called on every request and this can be madness on a high volume/many pageviews per visit site. I am not sure entirely sure how to address this but probably we can run this on some requests and not all?</p>
<p style="text-align: left;">5. There is a deleteexpiredtokens stored procedure that kills the performance under load. Run it sporadically and if possible not under peak load.</p>

## Bottomline
Coming from the world of Java/J2EE and <a href="https://www.bluepiit.com/blog/automating-play-applications-deployment-using-chef/">Play Framework</a>, I dislike single points of failure and session state. In the .Net world an apparently harmless configuration can lead to ominous bottlenecks unless identified early.

My recommendation remains to build stateless applications and pass cookie information on each request rather than store state server side. This way it also becomes much easier to add new application server nodes to the cluster if required.
