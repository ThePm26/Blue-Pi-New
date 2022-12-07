---
post_image: https://static.bluepiit.com/blog/wp-content/uploads/sites/2/2015/12/AWS-Kinesis-Streams.jpg
layout: post
status: publish
published: true
title: Decoding the Use Cases of AWS Kinesis Streams
author:
  display_name: pronam
  login: pronam
  email: pronam@bluepi.in
  url: ''
author_login: pronam
author_email: pronam@bluepi.in
permalink: /blog/decoding-the-use-cases-of-aws-kinesis-streams/
date: '2015-12-29 07:06:29 +0530'
date_gmt: '2015-12-29 07:06:29 +0530'
categories:
- cloud
tags:
- analytics
- aws-kinesis-stream
comments: []
---
# Decoding the Use Cases of AWS Kinesis Streams
<strong>Amazon Kinesis Streams</strong> a premium service offered by <a href="https://aws.amazon.com/">AWS</a> under Amazon Kinesis Services. Other services include <strong>Amazon Kinesis Firehose</strong> and <strong>Amazon Kinesis Analytics</strong>. Amazon Kinesis enables clients to build customized applications which processor analyzes streaming data for specialized needs. You can easily add various types of data such as clickstreams, application logs, and social media to an Amazon Kinesis stream from multiple sources any time. In no time, the data you have put for analyzing will be available for your Amazon Kinesis application. It&rsquo;s a data consumer that reads and processes data from an Amazon Kinesis stream where you can also build applications using either Amazon Kinesis API or Amazon Client Library (KCL).<br />

Amazon Kinesis stream is a service for <a href="https://www.bluepiit.com/blog/predictive-analytics-real-time-big-data/">real-time processing</a> of streaming big data. You can push data from many data producers, rapidly and continuously as it is generated into Amazon Kinesis, which offers a reliable, highly scalable service to capture and store the Data.
## Use Cases of AWS Kinesis streams:
Some of the typical scenarios where Amazon Kinesis streams can be used are:
<strong>For Financial Services Leaders:</strong> If you are looking to maintain a real-time audit trail of every single market or exchange order than you should definitely use Amazon Kinesis stream. If you want to have a Custom-built solution which is operationally complex to manage and is not scalable, AWS Kinesis Stream makes it a less cumbersome process. Kinesis enables customers to ingest all the market order data reliably, and build real-time auditing applications.
<strong>For new Digital Advertising Technology companies:</strong> AWS Kinesis stream helps you generate real-time metrics, KPIs for online ads performance for advertisers. Kinesis enables customers to move from periodic batch processing to continual, real-time metrics and reports generation. If you want to generate analytics, you can do that whenever and wherever you want. If you want to see the advertiser performance to optimize the marketing spend and also increase the responsive to clients, AWS Kinesis stream is the way forward.
<strong>Companies requiring real-time data processing:</strong> <a href="https://www.bluepiit.com/blog/analyzing-big-data-to-make-small-companies-big/">Analyzing the real-time data makes small companies big</a>. Often waiting for batching the data, leads to loss of some data. But with AWS kinesis stream you can have your data producers push data to an Amazon Kinesis stream as soon as the data is produced. For example, system and application logs can be continuously added to a stream and be available for processing within seconds.
<strong>Real Time metrics and reporting:</strong> Amazon Kinesis stream helps you extract metrics and generate reports in real-time. For example, the Amazon Kinesis Application can work on metrics and report for system and application logs as the data is streaming in, rather than you waiting to receive data batches.
<strong>Complex Stream Processing:</strong> With the help of AWS Kinesis stream, you can easily create Directed Acyclic Graphs (DAGs) of Amazon Kinesis Applications and data streams. In this scenario, one or more Amazon Kinesis Applications can add data to another Amazon Kinesis stream for further processing, enabling successive stages of stream processing.
## Conclusion:
Despite some of the limitations AWS Kinesis stream has like each shard can only support up to 1000 PUT records per second, it&rsquo;s a perfect choice for companies who are into <a href="https://www.bluepiit.com/blog/real-time-big-data-analytics-on-cloud/">Big Data on Cloud</a>. Apart from the above-mentioned use cases, it also provides ordering of records, as well as the ability to read/ or replay records in the same order to multiple Amazon Kinesis Applications. It provides you a flexible approach in terms of choice of the throughput. Minimum throughput being a single unit of shard which provides 1MB/sec data input and 2MB/sec data output, while the maximum throughput can be anything that you demand. This flexible approach is what makes AWS Kinesis stream a preferred choice for <a href="https://www.bluepiit.com/big-data">analyzing Big Data</a>.
