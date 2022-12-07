---
post_image: /assets/images/new/fleet2.png 
layout: post 
status: publish 
published: true 
title: BluePi helped in Cloud performance for a fleet management company! 
permalink: /case-study/cloud-performance-for-fleet-management 
date: '2017-03-11 00:12:49 +0530' 
date_gmt: '2013-03-18 00:12:49 +0530' 
categories: cloud


---

<div class="row"> 
<div class="col-lg-4">
     <div class="top-class-detail">
        <div class="row align-item-center">
           <div class="col-lg-12">
             <div class="case_top_box">
               <h3 style="color:#007bff;">Customer </h3>
               <p>Fleet Management</p>
              </div>
            </div>
            <div class="col-lg-12">
             <div class="case_top_box">
               <h3 style="color:#007bff;">Location</h3>
               <p>India</p>
              </div>
            </div>
            <div class="col-lg-12">
             <div class="case_top_box">
               <h3 style="color:#007bff;">Segment</h3>
               <p>Transport</p>
              </div>
            </div>
            <div class="col-lg-12">
             <div class="case_top_box">
               <h3 style="color:#007bff;"> Solution </h3>
               <p>Data Architect</p>
              </div>
            </div>
         </div>
      </div>
    </div>
<div class="col-lg-8" markdown="1">

### Customer Profile
The client is one of the premier service providers of Commercial Fleet Management Solutions in North America.

### Objective
The client uses MySQL database for its critical business processes, which, however, was affected due to the changing business environment and prompted a switch to the more commonly used SQL server.

A direct swap resulted in poor performance characteristics at greater loads. The client wanted us to optimize its business performance.

### BluePi’s Solution
 With the underlying architecture and code base remaining the same, it was obvious the issue lay with the database. BluePi Consulting was tasked with determining the root-cause of the poorer performance and remediating it. While there could be a myriad of possible causes, we went about eliminating these in the order of likelihood.

However, none of these highlighted the cause. While checking the performance characteristics of queries, we did notice that one of the queries was taking a lot longer on SQL Server than on MySQL. The table being accessed in this query contained a large amount of data and the data fetch was taking much longer. This pointed to the optimization of the indexes – and the realization that the two DBMS treat clustered and un-clustered indexes very differently. (SQL Server doesn’t automatically optimize un-clustered indexes).

### AWS Service used
MySQL, SQL Server, SQL Prfiler, AWS
</div>
</div>