---
post_image: /assets/images/new/channelplay.png 
layout: post 
status: publish 
published: true 
title: BluePi helps Channelplay implement BCP with HA & DR
permalink: /case-study/channelplay-implement-bcp-with-ha-dr
redirect_from : /case-study/channelplay-implement-bcp-with-ha-dr
date: '2020-06-26 00:12:49 +0530' 
date_gmt: '2020-06-26 00:12:49 +0530' 
categories: Retail


---
<div class="row"> 
<div class="col-lg-4">
     <div class="top-class-detail">
        <div class="row align-item-center">
           <div class="col-lg-12">
             <div class="case_top_box">
               <h3 style="color:#007bff;">Industry </h3>
               <p>Retail</p>
              </div>
            </div>
            <div class="col-lg-12">
             <div class="case_top_box">
               <h3 style="color:#007bff;">Challenges</h3>
               <p>Disaster Recovery and High Availability infrastructure</p>
              </div>
            </div>
            <div class="col-lg-12">
             <div class="case_top_box">
               <h3 style="color:#007bff;">Solution</h3>
               <p>Under a minute RPO and RTO</p>
              </div>
            </div>
            <div class="col-lg-12">
             <div class="case_top_box">
               <h3 style="color:#007bff;"> Business value </h3>
               <p>BCP implementation with HA and Multi-AZ deployment.</p>
              </div>
            </div>
            <div class="col-lg-12">
             <div class="case_top_box">
               <h3 style="color:#007bff;"> Technology </h3>
               <p>EC2, VPC, IAM, S3 object storage, ALB & NLB, Automated snapshot, EIP, CloudEndure migration tool, Cloudwatch, EBS Volume as per use case. .</p>
              </div>
            </div>
         </div>
      </div>
    </div>
<div class="col-lg-8" markdown="1">

### Challenge

ChannelPlay is one of the pioneers in their industry, their unique Sales Outsourcing, and Sales Training services ensure the availability of best
resources for selling.
Their programs such as visual merchandising and loyalty programs help create effective and motivated retail environments. A couple of
examples of their innovative approach is the Mystery Shopping and Market Research services that help measure performance and drive
improvements.
Given the width and depth of their operations, a lot of clients rely on ChannelPlay for improving their retail sales performance.
ChannelPlay wanted to implement best Business Continuity Practices on the cloud by leveraging the high availability and disaster recovery capabilities.

### Solution

BluePi helped plan and migrate ChannelPlay workloads along with the HA and DR capabilities on AWS. ChannelPlay technology landscape
includes Apache, Nginx, NodeJs, MySQL, Tomcat, Nprinting.

### Salient features:

*   DR capabilities with RPO and RTO of under an hour.
*   Multi-tier architecture with decoupled tiers for web, app, and database.
*   Multi-AZ deployments to ensure high availability on demand
*   Migration of more than 30 VMs running 5 application stacks with zero downtime and no data loss.
*   Secured Infrastructure with segregated network subnets, secured access to the environment through VPN Tunnel, IAM access to resources running on AWS.

### Business value delivered

BluePi migrated Channelplay core applications onto AWS Cloud with zero downtime and no data loss. Channelplay was able to achieve and
implement the business continuity plan ensured by HA and Multi-AZ capabilities as per the business need, SLA. 

### Technology deployed

This project would not have been possible without the amazing AWS services. We have time and again relied on these services because of their
ease of use and of course, great reliability. 

**Network & Architecture:** Created a well-architected infrastructure as per the AWS best practices. Used the Multi-Tier network architecture approach and
created Public and Private subnets for each VPC. IPSec VPN tunnel was created between the source cloud, corporate office, and AWS for secure
communication.

**High Availability:** Setup Application and Network load balancer as per the application use case. Configured AWS certificate manager and obtain free
SSL certificates with auto-renewal features. Launched applications and database stacks in different availability zones to achieve high availability.
Used awscli tools to create a slave database internally.

**Security:** Followed the security best practices using Identity and Access Management policy and Enforced Multi-Factor Authentication policy to
secure console logins. Implemented IAM roles to grant unique security credentials to users, groups, and resources to access AWS resources.
Implemented Cloudtrail and setup trail to keep API logs for a longer duration to fulfill compliances and policy. Implemented encryptions on EBS and S3
using AWS KMS policy.

**CloudEndure Migration Tool:** We have used the AWS Cloudendure migration tool to migrate applications including database stack to AWS cloud.
The CloudEndure migration tool helped a lot to quickly replicate stacks to AWS and also supports continued data replication till the cutover windows.
While using CloudEndure tools it took just one day to replicate one project VM’s, We saved a lot of time in migration and cutover window and
completed the migration process in very less time.
</div>
</div>