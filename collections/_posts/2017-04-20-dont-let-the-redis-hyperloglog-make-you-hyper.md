---
post_image: https://static.bluepiit.com/blog/wp-content/uploads/sites/2/2017/04/20170418_Blogimage_reddis_Hyperloglog.png
layout: post
status: publish
published: true
title: Don&rsquo;t Let the Redis HyperLogLog Make You Hyper!
author:
  display_name: Blue Pi
  login: yogesh
  email: yogesh@bluepi.in
  url: ''
author_login: yogesh
author_email: yogesh@bluepi.in
permalink: /blog/dont-let-the-redis-hyperloglog-make-you-hyper/
date: '2017-04-20 06:27:47 +0530'
date_gmt: '2017-04-20 06:27:47 +0530'
categories:
- bigdata
- media-entertainment
tags:
- database performance
- analytics
comments: []
---
# Let the Redis HyperLogLog Make You Hyper!
## What is HyperLogLog?
&ldquo;How Many Distinct&rdquo; is the question that is always asked in the current era of &lsquo;Data&rsquo; wherein a count of unique entities is required in a fast and efficient way, trading off some accuracy in the result. Enters HyperLogLog which is a probabilistic cardinality estimation algorithm that is efficient in terms of memory usage and gives results with a 2% error rate.
Interesting? Here&rsquo;s more.
The algorithm itself takes about 1.5kB of space for calculating the cardinality of a multiset rather than taking memory equivalent to the distinct elements.
HyperLogLog works on hash functions and hashes every new value seen and then works on getting the probity of seeing the longest run of zeroes which is used to predict the cardinality of that set. The accuracy of the algorithm increases with the number of elements to be counted.
Many database applications use the HyperLogLog algorithm to estimate the cardinality of the multisets with some improvisations in memory and time. Few of them to name are Redis, <a href="https://www.bluepiit.com/blog/redshift-remodelling-foes-friends-and-dimensions/">AWS Redshift</a>, Druid, etc.
Druid, for example, uses the Murmur 128 hash function to convert the data to HyperLogLog structure and apply functions to compute the count, sum etc.
Redshift, on the other hand, uses &lsquo;Approximate Count Syntax&rsquo; to compute the distinct counts using the HyperLogLog algorithm.
## HyperLogLog in Redis
Redis HyperLogLog function is like the sets in Redis, stored as strings in the storage. The HyperLogLog data set can be serialized and deserialized using the &lsquo;Get and Set&rsquo; functions of Redis. Redis HyperLogLog data structure computes the distinct counts in a set using a fixed amount of memory and constant complexity with a trade-off that the count has an error of less than 1%. The memory usage of computing distinct counts using HyperLogLog is less than 12kb.
Redis HyperLogLog commands allow you to add elements, count elements and even merge/intersect the sets to get a combined result of two sets. Though intersection is not readily available as a direct command, one can compute the intersection by using different HyperLogLog data structures.
Redis HLL have two representations having different memory usage, Sparse and Dense. Sparse representation is used by smaller sets using less memory whereas Dense representation is used for larger sets using up to 12kb of memory. This encoding can be altered using Redis HLL configuration parameters.
## Redis HyperLogLog Data Manipulation
Redis HyperLogLog allows set manipulation and set operations using the following commands:
##### PFADD
PFADD allows one to add elements to the HLL data structure. The addition of an element to the HLL data structure results in recomputing of cardinality of the set and retiring 1 if any change or new data is observed.&nbsp;E.g. - PFADD article users a b c
##### PFCOUNT
PFCOUNT is used for computing the approximate cardinality of the HLL structure giving the number of elements in the HLL set with an error rate below 1% and using a maximum of 12kb of memory. This command can be used with multiple keys which results in the combined cardinality of all the data structures by merging them on the fly.
##### PFMERGE
PFMERGE is used for computing the combined cardinality of multiple HLL sets and then write the merged data to another set.
##### PiStats- Our Use Case
PiStats is our media focussed product suite comprising Analytics and Personalization, CMS, DAM, Mobile and Web Apps. We use HyperLogLog to calculate distinct users on the website across various dimensions.
##### Example of Use Case
**Using the daily visitors list to get the weekly unique visitors count**
This can be achieved using the PFMERGE command of the HLL data structures wherein the required daily visitor&rsquo;s sets are merged together to get merged visitor set.
##### Getting the unique visitors using a specific device and OS
This can be achieved by intersecting the two sets having the device and os unique visitors count. The intersection operation is not readily available in Redis HLL but can be achieved by maintaining a separate key for the intersection of the two dimensions. Also, it can be achieved using Venn Diagram approach of set theory, i.e.,
Cardinality(device) + Cardinality(os) &ndash; Cardinality(device &lsquo;union&rsquo; os) = Cardinality(device &lsquo;intersection&rsquo; os)
We sincerely hope that you enjoyed reading this blog post. If you have any queries or suggestions, please reach out to us at enquiry@bluepi.in, we would be happy to answer!
Till then, keep innovating!
{% include author_anjna.html %}
