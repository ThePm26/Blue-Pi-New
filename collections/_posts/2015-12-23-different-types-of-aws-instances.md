---
post_image: https://static.bluepiit.com/blog/wp-content/uploads/sites/2/2015/12/aws-instance-types.png
layout: post
status: publish
published: true
title: Different Types of AWS Instances
author:
  display_name: gaurav
  login: gaurav
  email: gaurav@bluepi.in
  url: ''
author_login: gaurav
author_email: gaurav@bluepi.in
permalink: /blog/different-types-of-aws-instances/
date: '2015-12-23 07:39:04 +0530'
date_gmt: '2015-12-23 07:39:04 +0530'
categories:
- cloud
- streaming
tags:
- AWS
comments: []
---
# Different Types of AWS Instances
<a href="https://aws.amazon.com/ec2/?sc_channel=PS&sc_campaign=acquisition_IN&sc_publisher=google&sc_medium=ec2_b&sc_content=ec2_e&sc_detail=amazon%20ec2&sc_category=ec2&sc_segment=177536626781&sc_matchtype=e&sc_country=IN&s_kwcid=AL!4422!3!177536626781!e!!g!!amazon%20ec2&ef_id=WwYhjgAAAodRGzzJ:20180529113922:s">Amazon EC2</a> provides a total of 8 family of instance types which are classified according to their use cases. Instance types comprise varying combinations of CPU, memory, storage and networking capacity to give the client a flexibility to choose the appropriate mix of resources for your applications. Each instance type includes one or more instance sizes, allowing clients to scale resources to the requirements of the target workload.
<h5>General Purpose Instance Types:</h5> 

General Purpose Instances are the most sort after Instances that is preferred by many companies. There are two types of instances in this family: Fixed Performance (e.g. M4 and M3) and Burstable Performance (e.g. T2). Some of the sectors where its prominently being preferred are Development environments, build servers, code repositories, low-traffic websites and web applications, micro services, early product experiments and small databases to name a few. Some of its prominent features include:

- High Frequency Intel Xeon Processors with Turbo up to 3.3GHz.
- Burstable CPU, governed by CPU Credits, and consistent baseline performance.
- Lowest-cost general purpose instance type, and Free Tier eligible (t2.micro only)
- Balance of compute, memory, and network resources.

General Purpose Instances have been further classified into T2, M4 and M3 instance types.<br />
<strong>T2 instances</strong> accrue CPU Credits when they are idle, and use CPU credits when they are active.&nbsp; T2 instances are a good choice for workloads that don&rsquo;t use the full CPU often or consistently, but occasionally need to burst (e.g. web servers, developer environments and small databases).
<br><br />
<table class="aligncenter" style="height: 392px;" border="1" width="100%">
<tbody>
<tr>
<td width="125"><strong>Model</strong></td>
<td width="125"><strong>vCPU</strong></td>
<td width="125"><strong>CPU Credits/Hour</strong></td>
<td width="125"><strong>Mem (GiB)</strong></td>
<td width="125"><strong>Storage</strong></td>
</tr>
<tr>
<td width="125"><strong>T2.nano</strong></td>
<td width="125">1</td>
<td width="125">3</td>
<td width="125">0.5</td>
<td width="125">EBS-Only</td>
</tr>
<tr>
<td width="125"><strong>T2.micro</strong></td>
<td width="125">1</td>
<td width="125">6</td>
<td width="125">1</td>
<td width="125">EBS-Only</td>
</tr>
<tr>
<td width="125"><strong>T2.small</strong></td>
<td width="125">1</td>
<td width="125">12</td>
<td width="125">2</td>
<td width="125">EBS-Only</td>
</tr>
<tr>
<td width="125"><strong>T2.medium</strong></td>
<td width="125">2</td>
<td width="125">24</td>
<td width="125">4</td>
<td width="125">EBS-Only</td>
</tr>
<tr>
<td width="125"><strong>T2.large</strong></td>
<td width="125">2</td>
<td width="125">36</td>
<td width="125">8</td>
<td width="125">EBS-Only</td>
</tr>
</tbody>
</table>
<br>
<strong>M4 instances</strong> are the latest generation of General Purpose Instances. This provides a balance of compute, memory and network resources and it&rsquo;s a good choice for applications where the demand of applications and micro servers are high.
<br><br />
<table class="aligncenter"  border="1" width="100%">
<tbody>
<tr>
<td width="125"><strong>Model</strong></td>
<td width="125"><strong>vCPU</strong></td>
<td width="125"><strong>Mem (GiB)</strong></td>
<td width="125"><strong>SSD Storage (GB)</strong></td>
<td width="125"><strong>EBS Throughput (Mbps)</strong></td>
</tr>
<tr>
<td width="125"><strong>M4.large</strong></td>
<td width="125">2</td>
<td width="125">8</td>
<td width="125">EBS-only</td>
<td width="125">450</td>
</tr>
<tr>
<td width="125"><strong>M4.xlarge</strong></td>
<td width="125">4</td>
<td width="125">16</td>
<td width="125">EBS-only</td>
<td width="125">750</td>
</tr>
<tr>
<td width="125"><strong>M4.2xlarge</strong></td>
<td width="125">8</td>
<td width="125">32</td>
<td width="125">EBS-only</td>
<td width="125">1000</td>
</tr>
<tr>
<td width="125"><strong>M4.4xlarge</strong></td>
<td width="125">16</td>
<td width="125">64</td>
<td width="125">EBS-only</td>
<td width="125">2000</td>
</tr>
<tr>
<td width="125"><strong>M4.10xlarge</strong></td>
<td width="125">40</td>
<td width="125">160</td>
<td width="125">EBS-only</td>
<td width="125">4000</td>
</tr>
</tbody>
</table>
<br>
<strong>M3 Instance</strong> types is the prior version of M4 and is prime features include SSD- based instance storage for fast I/O performance, High frequency Intel Xeon E5-2670 v2 (Ivy Bridge) Processors. It&rsquo;s mainly used in Data processing tasks that require additional memory, caching fleets, running backend servers for SAP and other enterprise applications.
<table class="aligncenter" border="1" width="100%">
<tbody>
<tr>
<td width="156"><strong>Model</strong></td>
<td width="156"><strong>vCPU</strong></td>
<td width="156"><strong>Mem (GiB)</strong></td>
<td width="156"><strong>SSD Storage (GB)</strong></td>
</tr>
<tr>
<td width="156"><strong>M3.medium</strong></td>
<td width="156">1</td>
<td width="156">3.75</td>
<td width="156">1 x 4</td>
</tr>
<tr>
<td width="156"><strong>M3.large</strong></td>
<td width="156">2</td>
<td width="156">7.5</td>
<td width="156">1 x 32</td>
</tr>
<tr>
<td width="156"><strong>M3.xlarge</strong></td>
<td width="156">4</td>
<td width="156">15</td>
<td width="156">2 x 40</td>
</tr>
<tr>
<td width="156"><strong>M3.2xlarge</strong></td>
<td width="156">8</td>
<td width="156">30</td>
<td width="156">2 x 80</td>
</tr>
</tbody>
</table>
<h5>Compute Optimized Instance Types:</h5>
Compute Optimized Instances mainly include two families of instance types, namely C4 and C3. <strong>C3 Instances</strong> are used where applications require very high CPU usage, but balanced memory usage because C3 instances have optimized compute capacity. They are recommended for applications that require more compute power because they offer high performing processors. C3 instances are great for applications that require on-demand batch processing, and distributed analytics. They are also ideal for high performance science and engineering applications.
<br><br />
<table class="aligncenter" border="1" width="100%">
<tbody>
<tr>
<td width="156"><strong>Model</strong></td>
<td width="156"><strong>vCPU</strong></td>
<td width="156"><strong>Mem (GiB)</strong></td>
<td width="156"><strong>SSD Storage (GB)</strong></td>
</tr>
<tr>
<td width="156"><strong>c3.large</strong></td>
<td width="156">2</td>
<td width="156">3.75</td>
<td width="156">2 x 16</td>
</tr>
<tr>
<td width="156"><strong>c3.xlarge</strong></td>
<td width="156">4</td>
<td width="156">7.5</td>
<td width="156">2 x 40</td>
</tr>
<tr>
<td width="156"><strong>c3.2xlarge</strong></td>
<td width="156">8</td>
<td width="156">15</td>
<td width="156">2 x 80</td>
</tr>
<tr>
<td width="156"><strong>c3.4xlarge</strong></td>
<td width="156">16</td>
<td width="156">30</td>
<td width="156">2 x 160</td>
</tr>
<tr>
<td width="156"><strong>c3.8xlarge</strong></td>
<td width="156">32</td>
<td width="156">60</td>
<td width="156">2 x 320</td>
</tr>
</tbody>
</table>
<strong>C4 Instances</strong> are more advanced version of C3 instances where the client requires a stronger compute power. These instances are based on the Intel Xeon E5-2666 v3 processor and use Hardware virtualization (HVM). As per AWS specifications, C4 instances run at a base speed of 2.9 GHz, and can go up to a clock speed of 3.5 GHz with Intel Turbo Boost.
<br><br />
<table class="aligncenter" border="1" width="100%">
<tbody>
<tr>
<td width="125"><strong>Model</strong></td>
<td width="125"><strong>vCPU</strong></td>
<td width="125"><strong>Mem (GiB)</strong></td>
<td width="125"><strong>Storage (GB)</strong></td>
<td width="125"><strong>EBS Throughput (Mbps)</strong></td>
</tr>
<tr>
<td width="125"><strong>c4.large</strong></td>
<td width="125">2</td>
<td width="125">3.75</td>
<td width="125">EBS-Only</td>
<td>500</td>
</tr>
<tr>
<td width="125"><strong>c4.xlarge</strong></td>
<td width="125">4</td>
<td width="125">7.5</td>
<td width="125">EBS-Only</td>
<td>750</td>
</tr>
<tr>
<td width="125"><strong>c4.2xlarge</strong></td>
<td width="125">8</td>
<td width="125">15</td>
<td width="125">EBS-Only</td>
<td>1,000</td>
</tr>
<tr>
<td width="125"><strong>c4.4xlarge</strong></td>
<td width="125">16</td>
<td width="125">30</td>
<td width="125">EBS-Only</td>
<td>2,000</td>
</tr>
<tr>
<td width="125"><strong>c4.8xlarge</strong></td>
<td width="125">36</td>
<td width="125">60</td>
<td width="125">EBS-Only</td>
<td>4,000</td>
</tr>
</tbody>
</table>
<h5>GPU Instances:</h5>
GPU optimized instances include the <strong>G2 instances</strong> family which are ideal for gaming applications that require heavy graphics and 3D application <a href="https://www.bluepiit.com/blog/decoding-the-use-cases-of-aws-kinesis-streams/">data streaming</a>. This instance family is backed by a high-performance NVIDIA GPU, and is suitable for audio, video, 3D imaging, and graphic streaming kinds of applications. In order to run the GPU instances, NVIDIA drivers need to be installed and can be launched from HVM AMIs.
<br><br />
<table class="aligncenter"  border="1" width="100%">
<tbody>
<tr>
<td width="125"><strong>Model</strong></td>
<td width="125"><strong>GPUs</strong></td>
<td width="125"><strong>vCPU</strong></td>
<td width="125"><strong>Mem (GiB)</strong></td>
<td width="125"><strong>SSD Storage (GB)</strong></td>
</tr>
<tr>
<td><strong>g2.2xlarge</strong></td>
<td>1</td>
<td>8</td>
<td>15</td>
<td>1 x 60</td>
</tr>
<tr>
<td><strong>g2.8xlarge</strong></td>
<td>4</td>
<td>32</td>
<td>60</td>
<td>2 x 120</td>
</tr>
</tbody>
</table>
&nbsp;
<h5>Memory Optimized Instances:</h5>
Memory Optimized Instances basically includes only the <strong>R3 Instances</strong> family which are specifically designed for memory-intensive applications. R3 instances have the latest Intel Xeon Ivy Bridge processor and offer one of the best prices per GB of RAM. According to AWS, R3 instances can sustain a memory bandwidth of 63,000 MB/sec. R3 instances are great for high performance databases, in memory analytics, and distributed memory caches.
<br><br />
<table class="aligncenter" border="1" width="100%">
<tbody>
<tr>
<td width="152"><strong>Model</strong></td>
<td width="152"><strong>vCPU</strong></td>
<td width="152"><strong>Mem (GiB)</strong></td>
<td width="152"><strong>SSD Storage (GB)</strong></td>
</tr>
<tr>
<td width="152"><strong>r3.large</strong></td>
<td width="152">2</td>
<td width="152">15.25</td>
<td width="152">1 x 32</td>
</tr>
<tr>
<td width="152"><strong>r3.xlarge</strong></td>
<td width="152">4</td>
<td width="152">30.5</td>
<td width="152">1 x 80</td>
</tr>
<tr>
<td width="152"><strong>r3.2xlarge</strong></td>
<td width="152">8</td>
<td width="152">61</td>
<td width="152">1 x 160</td>
</tr>
<tr>
<td width="152"><strong>r3.4xlarge</strong></td>
<td width="152">16</td>
<td width="152">122</td>
<td width="152">1 x 320</td>
</tr>
<tr>
<td><strong>r3.8xlarge</strong></td>
<td>32</td>
<td>244</td>
<td>2 x 320</td>
</tr>
</tbody>
</table>
<h5>Storage Optimized Instances:</h5>
Storage Optimized Instances include the I2 and a more recent <strong>D2 instances</strong> families. <strong>I2 instances</strong> provides heavy SSDs for random I/Os that are required for databases, data warehouses and distributed systems such as Hadoop. They are suitable for NoSQL databases like HBase, Cassandra, MongoDB and OLTP.
<br><br />
<table class="aligncenter" border="1" width="100%">
<tbody>
<tr>
<td width="151"><strong>Model</strong></td>
<td width="151"><strong>vCPU</strong></td>
<td width="151"><strong>Mem (GiB)</strong></td>
<td width="151"><strong> Storage (GB)</strong></td>
</tr>
<tr>
<td width="151"><strong>i2.xlarge</strong></td>
<td width="151">4</td>
<td width="151">30.5</td>
<td width="151">1 x 800 SSD</td>
</tr>
<tr>
<td width="151"><strong>i2.2xlarge</strong></td>
<td width="151">8</td>
<td width="151">61</td>
<td width="151">2 x 800 SSD</td>
</tr>
<tr>
<td width="151"><strong>i2.4xlarge</strong></td>
<td width="151">16</td>
<td width="151">122</td>
<td width="151">4 x 800 SSD</td>
</tr>
<tr>
<td width="151"><strong>i2.8xlarge</strong></td>
<td width="151">32</td>
<td width="151">244</td>
<td width="151">8 x 800 SSD</td>
</tr>
</tbody>
</table>
<br>
<strong>D2 Instance</strong> family is a Dense Storage Instance which have a High-frequency Intel Xeon E5-2676v3 (Haswell) processors, HDD storage, High disk throughput and support for Amazon EC2 Enhanced Networking. D2 Instances can be majorly used in Massively Parallel Processing (MPP) data warehousing, MapReduce and Hadoop distributed computing, distributed file systems, network file systems, log or data-processing applications.
<br><br />
<table class="aligncenter" border="1" width="100%">
<tbody>
<tr>
<td width="150"><strong>Model</strong></td>
<td width="150"><strong>vCPU</strong></td>
<td width="150"><strong>Mem (GiB)</strong></td>
<td width="150"><strong> Storage (GB)</strong></td>
</tr>
<tr>
<td width="150"><strong>d2.xlarge</strong></td>
<td width="150">4</td>
<td width="150">30.5</td>
<td width="150">3 x 2000 HDD</td>
</tr>
<tr>
<td><strong>d2.2xlarge</strong></td>
<td>8</td>
<td>61</td>
<td>6 x 2000 HDD</td>
</tr>
<tr>
<td><strong>d2.4xlarge</strong></td>
<td>16</td>
<td>122</td>
<td>12 x 2000 HDD</td>
</tr>
<tr>
<td><strong>d2.8xlarge</strong></td>
<td>36</td>
<td>244</td>
<td>24 x 2000 HDD</td>
</tr>
</tbody>
</table>
<br>
<a href="https://aws.amazon.com">Amazon Web Services</a> keeps on adding new features or enhancements periodically. You can check out the complete matrix of the updated tables and even can customize it according to your own requirements from <a href="http://ec2pricing.net/">EC2 Instance Types and pricing</a>.
