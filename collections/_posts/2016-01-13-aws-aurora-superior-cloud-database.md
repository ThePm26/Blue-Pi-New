---
post_image: >-
  https://static.bluepiit.com/blog/wp-content/uploads/sites/2/2016/01/aws-aurora.png
layout: post
status: publish
published: true
title: AWS Aurora - Superior Cloud Database
author:
  display_name: admin
  login: admin
  email: sushil@bluepi.in
  url:
author_login: admin
author_email: sushil@bluepi.in
permalink: /blog/aws-aurora-superior-cloud-database/
date: 2016-01-13 10:20:00
date_gmt: '2016-01-13 10:20:20 +0530'
categories:
  - cloud
  - aws-aurora
tags:
  - aws
  - aws-aurora-architecture
  - amazon-rds
comments:
---
# AWS Aurora - Superior Cloud Database

AWS Aurora is a highly scalable, fast and durable, MySQL compatible database engine offered by Amazon Web Services[(also, Benefits to Testify the Importance of Amazon EMR)]). It is a fully managed database engine where Amazon RDS handles database provisioning, patching, backup and recovery. With AWS Aurora, failure detection and repair of failed instances is also managed. Aurora offers better performance than MySql at a much lower price than of commercially available databases.

## **Data storage model of Aurora**

Aurora was designed to be more suitable for cloud usage and this is evident from it's data storage model.

![AWS Aurora Architecture](https://static.bluepiit.com/blog/wp-content/uploads/sites/2/2016/01/aws-aurora.png){: .wp-image-1219.size-full width="505" height="326"}

AWS Aurora Architecture

Whenever we create a DB cluster for Amazon Aurora, it consists of [*one or more instances*](https://www.bluepiit.com/blog/different-types-of-aws-instances/) and aurora *cluster volume* which manages data for the instances. There are two types of instances in an Aurora cluster.

1. Primary instance which is responsible for modifications to cluster volume. Each cluster will have one primary instance.

2. Aurora replica which support only read operations. Having replica helps distribute read workload and increases database availability. Aurora replicas can be one or more instances.

The cluster volume is virtual storage volume which spans across multiple availability zones. The storage is replicated across 3 availability zones(AZs) with 2 copies of data in each AZ. This in turn increases durability and availability of the database.

## **Aurora Benefits**

Aurora scores as a true cloud database with the following features contributing to it:

* **[Scalability(One of the pre-dominant advantages of Cloud Migration\!)](https://www.bluepiit.com/blog/on-demand-scalability-one-of-the-pre-dominant-advantages-of-cloud-migration/)**\: Aurora is a scalable database, which grows with business needs. There is no need to provision storage at the beginning. Storage is added in units of 10GB on a need basis and can scale up to 64TB. An Aurora instance can scale in minutes and you can add replicas with just a couple of clicks.

&nbsp;

* **Self-healing**\: Aurora is designed to recover from a crash almost instantaneously. Due to its robust data model, it can tolerate the loss of two copies of the data while it is handling writes and three copies of the data while it is handling reads. Aurora performs crash recovery asynchronously on parallel threads, so that your database is open &nbsp; and available immediately after a crash. With ability to recover to a healthy AZ with no data loss, it is able to provide 99.99% availability.

&nbsp;

* **Improved concurrency handling**\: Aurora uses quorum writes. So, instead of waiting for all writes to finish before proceeding, it can move ahead as soon as at least 4 out of 6 writes are complete. Because the writes take advantage of any available free space, load on the database instance is reduced and concurrency increases. The scatter-write model also allows for very efficient and rapid backup.

&nbsp;

* &nbsp;**Cache warming across db restarts**\: Aurora follows a service-oriented architecture, due to which the Aurora's cache survives a database restart or shutdown. It helps the database to resume fully loaded operations faster than others with no 'warm up' required.

![db-architecture](https://static.bluepiit.com/blog/wp-content/uploads/sites/2/2016/01/aws-aurora1.png){: .aligncenter.size-full.wp-image-1220 width="219" height="302"}

![aurora-db-architecture](https://static.bluepiit.com/blog/wp-content/uploads/sites/2/2016/01/aurora-db-architecture.png){: .aligncenter.size-full.wp-image-1221 width="481" height="278"}

* **Zero downtime migration from RDS MySQL**\: Aurora is compatible with MySQL 5.6. With advantages of Aurora over MySQL, there exists several use cases of migration from MySQL to Aurora. Amazon has automated the migration and it can now be achieved directly from AWS console with just a few clicks. After migration we can reap the benefits of Aurora such as fault-tolerance, high-throughput and scalability.

&nbsp;