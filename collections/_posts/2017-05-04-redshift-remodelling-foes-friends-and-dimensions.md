---
post_image: https://static.bluepiit.com/blog/wp-content/uploads/sites/2/2017/05/20140504_Redshift_blog_Aks-min.jpg
layout: post
status: publish
published: true
title: Guide to Redshift Remodeling- Friends and Foes
author:
  display_name: Blue Pi
  login: yogesh
  email: yogesh@bluepi.in
  url: ''
author_login: yogesh
author_email: yogesh@bluepi.in
permalink: /blog/redshift-remodelling-foes-friends-and-dimensions/
date: '2017-05-04 11:22:42 +0530'
date_gmt: '2017-05-04 11:22:42 +0530'
categories:
- cloud
- aws-redshift
tags:
- Redshift
comments:
- id: 963
  author: Deep Diving in the World of Data Warehousing
  author_email: ''
  author_url: https://www.bluepiit.com/blog/deep-diving-in-the-world-of-data-warehousing/
  date: '2017-09-08 03:14:28 +0530'
  date_gmt: '2017-09-08 03:14:28 +0530'
  content: "[&#8230;] There are number of solutions present in market like Teradata&rsquo;s
    EDW Platform, Oracle Exadata Machine, or our in-house favourite and most competent
    of them all Amazon Redshift. [&#8230;]"
- id: 982
  author: Redis HyperLogLog Algorithm | Database Applications | Bluepi Blogs
  author_email: ''
  author_url: https://www.bluepiit.com/blog/dont-let-the-redis-hyperloglog-make-you-hyper/
  date: '2019-07-18 07:38:14 +0530'
  date_gmt: '2019-07-18 07:38:14 +0530'
  content: "[&#8230;] of the multisets with some improvisations in memory and time.
    Few of them to name are Redis, AWS Redshift, Druid, etc. Druid, for example, uses
    the Murmur 128 hash function to convert the data to [&#8230;]"
---
# Redshift Remodeling- Friends and Foes
In this series, we make an attempt to chronicle our experience and best practices with redshift having used it in 'anger' in many projects. <a href="https://www.bluepiit.com/blog/clash-of-the-titans-which-olap-will-win/">In this part 1 of the series</a>, we look for appropriate schema design for redshift, the various alternatives and the pros and cons of each.
## Schema Design
Proper dimensional model is an absolute need for Redshift to perform well. Three different dimensional models work best with Redshift:

+ The Snowflake
+ The Star
+ Flat

To understand the differences between the three modeling schemes let's get some terminology out of the way.
There are two types of tables that we create in a dimensional model <strong>Facts</strong> and <strong>Dimensions</strong>. The fact tables are the measures, while the dimension tables contain descriptive attributes. So, the facts usually have numbers and we use some numeric operations like sum, count, average on them. On the contrary, the dimensions are used to filter or categorize the data. The number of unique, in a dimension, would always be an order of magnitude smaller in comparison to the number of facts.
The difference between Star and Snowflake Schema manifests in the <strong>'normalization'</strong>, we do in the dimensions. In the Snowflake schema, the dimension tables are d iteratively whereas in Star there is only one level of normalization.
Examples
So, let's visualize this with two tables Sales fact and Store dimension table. The Sales fact stores the amount of product sold from each store.
Star Schema
<div class="col-md-12"><img class="img-resposive center-block" src="https://dhh0yoio3ikfv.cloudfront.net/blog/wp-content/uploads/sites/2/2017/05/IMAGE-1.png" /></div>
Here store and product are dimension tables while sales are the fact table.
Data in dimension tables do not change frequently and as mentioned above, contains the descriptive attributes. Here, the store table stores the outlet information while the product is the collection of all types of products produced by the company.
Fact table sales, rather stores every transaction or sale of a product made by the individual store, so it is highly dynamic in nature and usually the heaviest one as well. Note all the columns in sales are of integer type, which makes it easy to do aggregations, indexing for queries to run faster.
Also, fact tables must be distributed across different redshift clusters by either stores or products to gain huge improvements in query performance.
Snowflake Schema
<div class="col-md-12"><img class="img-resposive center-block" src="https://dhh0yoio3ikfv.cloudfront.net/blog/wp-content/uploads/sites/2/2017/05/IMAGE-2.png" /></div>
Do you see a problem with Star Schema? There is one, dimension table &ldquo;store&rdquo; is not normalized. That means if there are 1000 stores in India, country &lsquo;India&rsquo; would be repeated 1000 times. Same is the case with city and state. This makes dimension tables unnecessary bulkier.
While denormalizing extensively increases the number of joins to fetch the data, which adds to computing time and adds to query execution.
Flat Schema
There exists another model i.e. flat model, which is essentially another level of denormalization over the star schema. The state, city, country and store all get folded into the fact table.
Here are the pros and cons of the three modeling choices.
### The three approaches compared

<div class="col-md-12"></div>
<div class="col-md-12"></div>
<table style="text-align: center;" border="1" width="100%">
<tbody>
<tr>
<td>Type</td>
<td>Normalization</td>
<td>Ease of Query</td>
<td>Storage size</td>
<td>Joins</td>
</tr>
<tr>
<td>Snowflake</td>
<td>High</td>
<td>Difficult</td>
<td>Low</td>
<td>Many</td>
</tr>
<tr>
<td>Star</td>
<td>Medium</td>
<td>Medium</td>
<td>Medium</td>
<td>One</td>
</tr>
<tr>
<td>Flat</td>
<td>Low</td>
<td>Easy</td>
<td>High</td>
<td>None</td>
</tr>
</tbody>
</table>
&nbsp;

## Recommendations
If you are using Redshift for data marts where query performance is critical the right choice is a snowflake schema. if you are <a href="https://www.bluepiit.com/blog/deep-diving-in-the-world-of-data-warehousing/">using redshift as generic data warehouse</a> it is preferred to build a star schema.
To know more about such cutting-edge technology, interesting use cases and deep insights to dwell upon and transform your business growth,<a href="https://www.bluepiit.com/contact-us"> reach out to us. Till then, keep innovating! 
{% include author_pronam.html %}
