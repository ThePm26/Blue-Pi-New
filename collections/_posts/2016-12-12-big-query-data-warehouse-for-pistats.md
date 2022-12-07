---
post_image: https://static.bluepiit.com/blog/wp-content/uploads/sites/2/2016/12/data-warehoues_pistats-01-01-1.png
layout: post
status: publish
published: true
title: How We Zeroed on the Best Data Warehouse
author:
  display_name: Blue Pi
  login: yogesh
  email: yogesh@bluepi.in
  url: ''
author_login: yogesh
author_email: yogesh@bluepi.in
permalink: /blog/big-query-data-warehouse-for-pistats/
date: '2016-12-12 10:13:28 +0530'
date_gmt: '2016-12-12 10:13:28 +0530'
categories:
- big-data
tags:
- data warehouse
- data-warehouse
comments: []
---
# Zeroed on the Best Data Warehouse
The advancement of technology generally evokes a range of emotions in people from all walks of life. Some choose to see the cons, while others consider it a way to bring the world closer and solve major challenges.<br />
But, as they say, any sufficiently advanced technology is equivalent to magic! Let us walk you through yet another blog post that amazes you with the goodies that technology can offer.
<strong><em>A Quick Recap: <a href="https://www.bluepiit.com/blog/choosing-kong-the-api-gateway/">piStats- Kong-The API Gateway</a>&nbsp;</em></strong>
We discussed the pros and cons of using the &lsquo;Kong API&rsquo; gateway and discussed the reasons that made us opt for it. &lsquo;Kong&rsquo; as we discussed, is the first touchpoint and milestone of a user&rsquo;s click-event journey - a journey that begins from the user&rsquo;s browser or mobile, to &lsquo;piStats Realtime&rsquo; dashboards.
<strong><em>Going Forward: Big Data Management</em></strong>
In this blog, we will discuss how to store and retain the enormous data, on a long-term; to derive our historical dashboards with user segmentation. We&rsquo;ll talk about our <a href="https://www.bluepiit.com/blog/deep-diving-in-the-world-of-data-warehousing/"> data warehouse </a> and the various alternatives that we tried before finally zeroing down to &lsquo;Google BigQuery&rsquo;.
The data that we collect from the user&rsquo;s click, needs to be stored &ndash; over a long term - for historical analysis and determining different user segments. This then feeds into the analytics dashboards or other campaign management systems that help us send push notifications, emails, etc. The data should be stored in such a way that it is easily accessible, without having to wait for long to get the desired results.
<strong><em>Getting Started: Why Do We Need a Data warehouse?</em></strong>
Apart from long-term storage, <a href="https://www.bluepiit.com/blog/deep-diving-in-the-world-of-data-warehousing-continued/"> a data warehouse</a> also serves as the operational data store to dump data away from the transactional storage, avoid load on the transactional database, and run reports &amp; analyses on historical data.
<em>In a nutshell, it acts as a data repository of integrated data, from one or more sources. </em><br />
Simple, isn&rsquo;t it? Now, let&rsquo;s see how we integrated a data warehouse with piStats.
<strong><em>piStats and Data warehouse</em></strong>
piStats uses data warehouse for two of its main features:

- for the <strong>historical dashboards</strong> and</li>
- for <strong>cohort analysis</strong> - used for reporting and push notifications.</li>

The historical dashboard has three different views based on granularity, i.e., Daily, Weekly, and Monthly. It also allows for date selection to get a report within desired range and granularity.<br />
Users can also create cohorts using a user-friendly custom query engine to create desired segments.<br />
Another important feature of piStats, i.e., Retention analysis, also relies on the data warehouse to compute user retention, every 6 hours.
And finally, the data warehouse also helps piStats to analyse and fetch data for training the Machine Learning models, build intelligence, and perform predictive analysis, based on the historical data that it fetches.
<strong><em>But, what&rsquo;s so special?</em></strong>
We required a data warehouse that could fulfill all the requirements of piStats with zero compromise on performance. In other words, it should support the limitless possibilities of piStats with an eye on:

- <strong>Scaling and Integration</strong>: The data warehouse should be able to scale with the increasing size of the data set. For one of our clients, we added about 150 GB of data every month - we did not want to over provision, neither did we want to change scales frequently.</li>
- <strong>Time Optimization</strong>: We wanted the query performance to be optimal so that the user firing the query from the custom query engine should not be kept waiting for long. By long, we mean, less than a minute!</li>
- <strong>Cost Optimization</strong>: We wanted a pricing model that should charge for the storage and compute levels that we use and not for the default, packaged storage and compute levels that one normally gets with a data warehouse.</li>
- <strong>Data Storage and Maintenance</strong>: Auto-purging was also one of the deciding factors. We wanted to limit data storage, enough to maintain last 3 months of data; rather than keeping the whole data-set persisting. This was a feature that came out-of-the-box in Google BigQuery.</li>

<strong><em>Why Not Redshift?</em></strong>

- <strong>Storage and Compute Scaling</strong>: <a href="https://www.bluepiit.com/blog/redshift-remodelling-foes-friends-and-dimensions/"> Redshift (Guide to Redshift Remodeling)</a> provides fixed storage and compute nodes that needs to be scaled (up/down) as per requirement. Where scaling and re-partitioning is a good 4 to 5 hours of job, leaving the system available only for reads, and withholding writes.</li>
- <strong>Pricing</strong>: Every node present in the cluster is priced even if it is not being utilized, or is idle; which, in our case is very relevant. Queries are fired at midnight mostly, and sparsely over the whole day but the load is present throughout 24 hours.</li>
- <strong>Performance:</strong> Since our load was about 800 GB, and cost was a concern, we wanted to keep the nodes as little as possible. Even with partitioning in place, the queries took 4 to 5 minutes to give results, which was quite a bit for a user waiting to get results on the frontend. Increasing the number and size of nodes would have left the storage unused and pushed the costs up.
- <strong>Data Deletion:</strong> We wanted to retain data only for 3 months in the data warehouse and required a mechanism to remove any data that is older than 3 months. Redshift required a &lsquo;cron&rsquo; to be written for this purpose</li>
</ul>
<strong><em>Why Not Impala on AWS EMR?</em></strong>

- <strong>Storage and Compute Scaling:</strong> Impala was run on AWS EMR and hence required fixed memory and compute nodes to be added as per scaling requirements. If Impala was given nodes short on memory, it terminated the query with an <em>Out of Memory</em> error, hence being unreliable. The over-provisioned clusters left unused resources, adding to the cost. To avoid cost for the time when the Data warehouse was not used, we usually terminated the cluster. So, whenever a new cluster was provisioned a good 800 GB data was reloaded adding to the time of cluster provisioning.</li>
- <strong>Pricing:</strong> In Impala, as well, one is charged for every node that is added into the cluster - be it on AWS EMR, or an independent Hadoop cluster.</li>
- <strong>Version:</strong> Impala on EMR has no direct support - like other Hadoop ecosystem components namely Spark, Hive, etc. It needs to be installed using bootstrap actions which installs older versions of Impala, resulting in reduced features.</li>
- <strong>Performance: </strong>Impala also took a good 10-11 minutes to return results for the queries and if under provisioned, it would go out of memory without executing the query &ndash; needless to say, that was quite frequent in our case!</li>

<strong><em>A Comparative Analysis</em></strong>
So, before we knew it, in our attempt to find the best-fitting data warehouse for our requirements, we had tested 2 other alternatives along with BigQuery. Here&rsquo;s a comparative chart summarizing the technical features of Redshift, Impala and BigQuery:
<br><br />
<style type="text/css">
table, th, td { border: 1px solid black; border-collapse: collapse; padding: 7px;}</style>
<table class="table table-striped table-bordered" style="border: 1px solid black;" width="759">
<tbody>
<tr style="border: 1px solid black;">
<td width="155"><strong>Metrics</strong></td>
<td width="160"><strong>Redshift</strong></td>
<td width="161"><strong>Impala(AWS EMR)</strong></td>
<td width="161"><strong>BigQuery</strong></td>
</tr>
<tr style="border: 1px solid black;">
<td width="155"><strong>Cost</strong></td>
<td width="160">Charged per hour for each instance</td>
<td width="161">Charged per hour for each instance</td>
<td width="161">Charged for storage and data querying only.</td>
</tr>
<tr style="border: 1px solid black;">
<td width="155"><strong>Provisioning</strong></td>
<td width="160">Chosen as per storage and memory requirement.</td>
<td width="161">Chosen as per storage and memory requirement.</td>
<td width="161">No notion of hardware, hence no provisioning.</td>
</tr>
<tr style="border: 1px solid black;">
<td width="155"><strong>Scaling</strong></td>
<td width="160">Nodes can be added or removed</td>
<td width="161">Nodes can be added or removed</td>
<td width="161">Not required as no hardware.</td>
</tr>
<tr style="border: 1px solid black;">
<td width="155"><strong>Reliability</strong></td>
<td width="160">Query executes till completion</td>
<td width="161">Query might give an out of memory error.</td>
<td width="161">Query executes till completion</td>
</tr>
<tr style="border: 1px solid black;">
<td width="155"><strong>Query Performance</strong></td>
<td width="160">Limited by the number of CPUs and memory.</td>
<td width="161">Limited by the memory.</td>
<td width="161">Has no limitation and uses maximum resources available to get fast results</td>
</tr>
<tr style="border: 1px solid black;">
<td width="155"><strong>Maintainance</strong></td>
<td width="160">Requires periodic vacuum operations</td>
<td width="161">None</td>
<td width="161">None</td>
</tr>
<tr style="border: 1px solid black;">
<td width="155"><strong>Partiotioning and Distribution(keys)</strong></td>
<td width="160">Important for Query performance</td>
<td width="161">Important for Query performance</td>
<td width="161">Important to limit the amount of data queried. The query performance fast without partioning as well.</td>
</tr>
<tr style="border: 1px solid black;">
<td width="155"><strong>Streaming Data</strong></td>
<td width="160">Not Possible</td>
<td width="161">Requires table to be refreshed.</td>
<td width="161">Allows streaming inserts using APIs</td>
</tr>
<tr style="border: 1px solid black;">
<td width="155"><strong>Versions</strong></td>
<td width="160">None</td>
<td width="161">Limited to 2.2 with EMR</td>
<td width="161">None</td>
</tr>
<tr style="border: 1px solid black;">
<td width="155"><strong>Bulk Upload</strong></td>
<td width="160">90GB in 4-5 hours</td>
<td width="161">90GB in 1-2 hours with a large Core node</td>
<td width="161">90GB in 4-5 hours</td>
</tr>
<tr style="border: 1px solid black;">
<td width="155"><strong>Join Queries</strong></td>
<td width="160">Slow</td>
<td width="161">Limited with the versions available</td>
<td width="161">Fast</td>
</tr>
<tr style="border: 1px solid black;">
<td width="155"><strong>Count Distinct</strong></td>
<td width="160">Slow</td>
<td width="161">Allowed but extremely slow. Used NDV instead</td>
<td width="161">Fast</td>
</tr>
<tr style="border: 1px solid black;">
<td width="155"><strong>TimeStamp Datatype</strong></td>
<td width="160">Supports different formats</td>
<td width="161">Limited format support</td>
<td width="161">Supports different formats</td>
</tr>
<tr style="border: 1px solid black;">
<td width="155"><strong>Deleting specific rows</strong></td>
<td width="160">Allowed</td>
<td width="161">Not supported</td>
<td width="161">Only partitions can expire. Delete not supported.</td>
</tr>
<tr style="border: 1px solid black;">
<td width="155"><strong>Update Operation</strong></td>
<td width="160">Allowed but slow</td>
<td width="161">Not supported</td>
<td width="161">Not supported</td>
</tr>
</tbody>
</table>
<br>
Alright then, do you now know why we chose BigQuery over the others? Have different opinions? Send it our way by commenting below.In our next blogpost we&rsquo;ll validate our choice, discuss the ground realities and talk about our experiments with BigQuery.
As they say, it is supposed to be automatic, but you must push the button, or scroll and read in this case. Till then, keep innovating and experimenting!
{% include author_anjna.html %}