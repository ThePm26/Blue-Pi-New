---
post_image: https://static.bluepiit.com/blog/wp-content/uploads/sites/2/2017/04/Blog-Clash-Of-the-Titans.jpg
layout: post
status: publish
published: true
title: Clash of the Titans &ndash; Which OLAP Will Win?
author:
  display_name: Blue Pi
  login: yogesh
  email: yogesh@bluepi.in
  url: ''
author_login: yogesh
author_email: yogesh@bluepi.in
permalink: /blog/clash-of-the-titans-which-olap-will-win/
date: '2017-04-27 09:05:06 +0530'
date_gmt: '2017-04-27 09:05:06 +0530'
categories:
- big-data
- microsoft-sql-data-warehouse
- ibm-dashdb
- ibm-bluemix
- softlayer
- cloud-foundry
tags:
- migration
- data-warehouse
- azure-powershell
comments: []
---
# Clash of the Titans &ndash; Which OLAP Will Win?
<p>There is a number of OLAP solutions available in the market, including the popular ones like Vertica, Oracle BI, SAP Business Warehouse, which have pre-existed for a long time. While many of these started as on-premise solutions, have tried to re-establish them in today&rsquo;s competitive market by providing SaaS variance.<br />
But, the world is heading towards cloud and OLAP solutions on cloud work well, as they are built with the mindset of exploiting cloud potential of robustness, scalability, and availability. Hence, we picked the most popular data warehouses provided by the leading cloud platforms and ran an experiment to do a performance comparison!<br />
Below three OLAP DBs were chosen for comparison:</p>
<ul>
<li>IBM DashDB</li>
<li>Amazon Redshift</li>
<li>Microsoft SQL Data Warehouse</li>
</ul>
<p>All these are built on columnar and MPP architecture, to quicken up the aggregations and utilize both cores and servers for query parallelization.</p>
<h3>IBM DashDB</h3>
<p>A managed cloud database based on the DB2 and Netezza engine. There are 3 editions: IBM dashDB for Transactions (general purpose, transactional or web workloads), dashDB for Analytics (data warehouse), and dashDB Local (a Docker container image allowing deployment on private clouds).<br />
Provides integration with different kinds of data sources like Oracle, on-prem, analytics tools like R, SPSS and BI tools like SAS, Cognos, Tableau.</p>
<h3>Amazon Redshift</h3>
<p><a href="https://www.bluepiit.com/blog/redshift-remodelling-foes-friends-and-dimensions/">Amazon Redshift</a>, a hosted data warehouse product, forms part of the larger cloud-computing platform Amazon Web Services. It is built on top of technology from the massive parallel processing (MPP) data-warehouse company- ParAccel and based on PostgreSQL.</p>
<p>Redshift differs from Amazon's other hosted database offering, Amazon RDS, in its ability to handle analytics workloads. To be able to handle large-scale data sets and database migrations, Amazon makes use of massively parallel processing.</p>
<p>It provides seamless integration with many AWS services like S3, Elastic Search as a Service, Kinesis, Quicksight, Mobile analytics etc. while also supports lots of external BI tool like Jaspersoft, Tableau, Pentaho etc.</p>
<h3>Microsoft SQL Data Warehouse</h3>
<p>Azure SQL Data Warehouse is a cloud-based data warehouse-as-a-service hosted on Microsoft&rsquo;s Azure platform. It has a massively parallel processing (MPP) shared nothing architecture capable of distributing query computation over a set of compute nodes running Azure SQL Database and uses Azure Storage Blobs as the underlying data storage.<br />
Azure SQL Data Warehouse decouples compute and storage enabling compute power, to be adjusted independently of storage based on workload requirements at any given time.</p>
<p>SQL data warehouse integrates with Azure machine learning, Azure data factory, stream analytics and <a href="https://www.bluepiit.com/blog/in-data-we-trust-power-bi-and-its-capabilities/">PowerBI</a>. This also provides integration with other visualization and reporting tools like Tableau, Pentaho etc.</p>
<h3>Experiment Setup</h3>
<p>To find best among these, we ran the experiment to see how these perform. Here are some stats on the experiment setup:</p>
<p><strong>Data</strong>: 900 GB structured data,</p>
<p><strong>Queries</strong>: 3 </p>
<p><strong>Query Iterations</strong>: 6 </p>
<p><strong>Machine Configuration</strong>: 32 core with 256 RAM </p>
<p>Same kinds of machines were procured on all the platforms to standardize the results.<br />
Once loaded, further steps were taken to tune the OLAP platforms as much as possible by:</p>
<ul>
<li>Distributing data across nodes on the filter or query.</li>
<li>Sort data by the selection of query.</li>
</ul>
<p>3 different queries were executed to test the performance of multiple metrics like data volume, multiple filters joins.</p>
<p>Query 1 &ndash; Aggregation over complete data set</p>
<p><br>
<div class="col-md-12"><img class="img-responsive blog_image_size" src="https://dhh0yoio3ikfv.cloudfront.net/blog/wp-content/uploads/sites/2/2017/04/img1.png" /></div>
<p><br>
<p>Query 2 &ndash;Multiple filters and grouping </p>
<p><br>
<div class="col-md-12"><img class="img-responsive blog_image_size" src="https://dhh0yoio3ikfv.cloudfront.net/blog/wp-content/uploads/sites/2/2017/04/img2.png" /></div>
<p><br>
<p>Query 3 &ndash;Join between tables</p>
<p><br>
<div class="col-md-12"><img class="img-responsive blog_image_size" src="https://dhh0yoio3ikfv.cloudfront.net/blog/wp-content/uploads/sites/2/2017/04/img3.png" /></div>
<p><br>
<p>6 different iterations were done for same query and the best performing result is picked. This is how the three OLAP performed:</p>
<p><br><br />
<table style="text-align: center;" border="1" width="100%">
<tbody>
<tr>
<td></td>
<td><strong>Redshift</strong></td>
<td><strong>DashDB</strong></td>
<td><strong>SQL Data Warehouse</strong></td>
</tr>
<tr>
<td><strong>Query 1</strong></td>
<td>65 sec</td>
<td>247 sec</td>
<td>311 sec</td>
</tr>
<tr>
<td><strong>Query 2</strong></td>
<td>15 sec</td>
<td>14 sec</td>
<td>12 sec</td>
</tr>
<tr>
<td><strong>Query 3</strong></td>
<td>33 sec</td>
<td>262 sec</td>
<td>130 sec</td>
</tr>
</tbody>
</table>
<p><br>
<p>P.S. Redshift consistently outperforms other OLAP on all the fronts. Be it joins or aggregations on whole data set or aggregations with filter. If tuned correctly and the right set of distribution and sort keys are used, Redshift will prove to be much faster than any other on-cloud OLAP solution.</p>
<p>We, at BluePi, have deep-rooted expertise in working with on-cloud OLAP solutions, &lsquo;Redshift&rsquo; is a primary domain. He has implemented the same on a very large scale for numerous happy customers, performing complex cloud migrations, giving niche solutions.</p>
<p>If you have any query or are looking forward to reach out to an expert, need technical consultation or a cutting-edge solution for any complex technical bottleneck, we are listening! Reach out to us at <a href="mailto:enquiry@bluepi.in">enquiry@bluepi.in</a> or <a href="https://www.bluepiit.com/contact-us">contact us here</a>!<br />
This blog has been written by Hariprasad and Saubhagya.</p>
<div class="col-md-12" style="background-color: #fff; margin-top: 10px; margin-bottom: 20px; padding-top: 20px; padding-bottom: 20px;">
<div class="col-md-12">
<p><strong>Hariprasad Narasimhaiah,</strong> Sr. Manager Technology</p>
<p>Hari is an experienced Systems Architect with expertise in Systems Migration, UNIX/LINUX Infrastructure, Data Center Migration and Consolidation, Solutions Engineering and Implementation, Virtualization and Disaster Recovery. I have successfully lead direct reports and cross functional teams, to manage project initiation to deployment and support, assess and analyze current infrastructure and provide improvements and solutions.
</p>
</div>
<p><strong>Saubhagya Banerji,</strong> System Analyst</p>
<p>Saubhagya Banerji works as a System Analyst at BluePi Consulting Pvt. Ltd. His areas of interest include Spring Cloud, Android, Strongloop and AWS. When he is not working on advances in tech field, he likes to play Tennis, enjoys spending time on his PS4 and doing leisure activities. For anything and everything geek, he is right here to help you get answers and accelerate your tech-quench.
</p>
