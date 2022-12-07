---
post_image: https://static.bluepiit.com/blog/wp-content/uploads/sites/2/2014/02/SQL-Server-MYSQL.jpg
layout: post
permalink: /blog/sql-server-vs-mysql-case-study/
status: publish
published: true
title: SQL Server vs MYSQL case study
date: '2014-02-04 17:33:16 +0530'
date_gmt: '2014-02-04 12:03:16 +0530'
categories:
- database 
- nosqldb
- csharp-2
tags:
- database 
- performance 
- nosqldb
comments: []
---
# SQL Server vs MYSQL case study
## The Challenge
At BluePi we do a lot of performance re-engineering projects. Some of them involve tuning the application code, some the architecture, however frequently it is the database that is the bottleneck.
One peculiar situation we encountered was when one of our customers bemoaned that the free, MYSQL was giving much better response under load as compared to MS SQL Server. The difference was huge! 90% of samples of the login use case in SQL server was 1000 times slower than MYSQL. 
It goes without saying that SQL Server was not an option with this sort of performance. So we were tasked to determine the root cause and then remediate it.</p>
## Possible causes

- Application code may be poorly written
- Database Indexes may not be properly tuned
- SQL queries may be unoptimised
- Network/Disk or any other physical resources may be constrained

### Application code may be poorly written
As the application code does not change between the two databases it is unlikely that the application code would be a problem. So the only investigation that we did was around the use of database connection pools. A poorly optimized connection pool could be leaking and slowing down the database.
We checked thoroughly the number of connections, the application was using for MS SQL Server through SQL profiler. We checked each and every request but the application was correctly using the connection pool and releasing connection after transactions.
So application code could be ruled out as a possible cause.

### Database Indexes may not be properly tuned
Interestingly the index definitions were exactly the same in both MS SQL and MySQL.
At first look, it appeared that there was nothing wrong with the indexes as MYSQL seemed to be performing really well with the same index definition.
Some of the tables were pretty big - millions of rows. So we decided to turn our focus on addressing the size by closely looking at the partitioning scheme.
MYSQL &nbsp;provides different types of partitioning - &nbsp;range, hash, key, list, and composite partitioning which can be defined at the time of creating a table. &nbsp;On the other hand SQL Server only offers range partitioning. In SQL server this is only possible after creating the table, creating partitioning objects in SQL Server (partition schemes and functions) that are then applied to the corresponding tables. We decided to park this as MySQL did not have any partitioning.

### SQL queries are not optimised correctly.
The possibility that fetches queries for MS SQL Server was not optimized and was leading to higher query execution time was now the focus of our attention.
We calculated the time on all queries which were being executed by application through SQL profiler and we found one query was taking a lot of time and was being called from different places in the application code.
Having found this one slow query on MS SQL we questioned how is the same query on MYSQL is performing so well.
The Table which was being used in this query contained huge data and the data fetch was taking more time in SQL server as compared to MYSQL.
To resolve this, we implemented partitioning on the SQL server(RDS instance of AWS) to parallelly divide data in various tables on the basis of different event id on different months.
Voila! It worked well and lowered query times to a large extent.
In SQL Server 2008 R2, we simply put the check constraints on a date so that there would be different tables for each month. On top of that, we put one view which does the union all on all the various table to get the complete data. In SQL server views are logical views of a table that are faster in comparison to physical read.
In SQL Server 2012 enterprise edition we have an inbuilt function which does parallel partition on a table on the basis of different parameter.

### Components and Concepts
The following terms are applicable to table and index partitioning.
#### Partition function
A database object that defines how the rows of a table or index are mapped to a set of partitions based on the values of a certain column, called a partitioning column. That is, the partition function defines the number of partitions that the table will have and how the boundaries of the partitions are defined. For example, given a table that contains sales order data, you may want to partition the table into twelve (monthly) partitions based on a DateTime column such as a sales date.

#### Partition scheme
A database object that maps the partitions of a partition function to a set of filegroups. The primary reason for placing your partitions on separate filegroups is to make sure that you can independently perform backup operations on partitions. This is because you can perform backups on individual filegroups.

#### Partitioning column
The column of a table or index that a partition function uses to partition the table or index. Computed columns that participate in a partition function must be explicitly marked PERSISTED. All data types that are valid for use as index columns can be used as a partitioning column, except time stamp. The ntext, text, image, xml, varchar(max), nvarchar(max), or varbinary(max) data types cannot be specified. Also, Microsoft&nbsp;.NET Framework common language runtime (CLR) user-defined type and alias data type columns cannot be specified.

#### Aligned index
An index that is built on the same partition scheme as its corresponding table. When a table and its indexes are in alignment, SQL Server can switch partitions quickly and efficiently while maintaining the partition structure of both the table and its indexes. An index does not have to participate in the same-named partition function to be aligned with its base table. However, the partition function of the index and the base table must be essentially the same, in that 1) the arguments of the partition functions have the same data type, 2) they define the same number of partitions, and 3) they define the same boundary values for partitions.

#### Nonaligned index
An index partitioned independently from its corresponding table. That is, the index has a different partition scheme or is placed on a separate filegroup from the base table. Designing a nonaligned partitioned index can be useful in the following cases:

- The base table has not been partitioned.
- The index key is unique and it does not contain the partitioning column of the table.
- You want the base table to participate in collocated joins with more tables using different join columns.

#### Partition elimination
The process by which the query optimizer accesses only the relevant partitions to satisfy the filter criteria of the query.
So with approach, we lower done the login number from lac to thousand at 90% percentile but this is still very high in comparison to MYSQL.
[table id=1&nbsp;alternating_row_colors=true /]
[table id=3&nbsp;alternating_row_colors=true /]

## Conclusion
Finally, we resolved this issue and the performance of the MS SQL server improved a lot and was even better then MYSQL. 
The issue was the table which we partitioned out on the first attempt contained an index on one specific column which is the same is MYSQL too. The catch was indexing works very differently if we compare MYSQL vs SQL server.
In MYSQL once you create normal index it does various kind of optimization by itself, which DBA will not know unless s/he digs deeper. On the other hand, in the case of MS SQL server if you are creating a simple index (non-clustered index) then the possibility is, it might not be optimized. 
Once we have moved particular column from normal index to clustered index things work like a charm and overall performance&nbsp; of an application turned out to be even better than MYSQL. 
[table id=4 alternating_row_colors=true /] 
  
<a href="https://www.bluepiit.com/blog/janusgraph-with-cassandra/">Click Here to know the use of SQL in Janusgraph with Cassandra</a>
