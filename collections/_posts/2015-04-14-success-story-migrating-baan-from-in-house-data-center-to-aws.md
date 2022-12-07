---
layout: post
status: publish
published: true
title: Success Story - Migrating BAAN from In-House Data Center to AWS
author:
  display_name: Barkat Dhillon
  login: barkat
  email: barkat@bluepi.in
  url: ''
author_login: barkat
author_email: barkat@bluepi.in
permalink: /blog/success-story-migrating-baan-from-in-house-data-center-to-aws/

date: '2015-04-14 10:19:46 +0530'
date_gmt: '2015-04-14 10:19:46 +0530'
categories:
- cloud 
- success-story
- on-demand-scalability
- 
tags:
- AWS
comments: []  
---
# Success Story - Migrating BAAN from In-House Data Center to AWS
### Objective:
BAAN Installation on AWS

BAAN manages its user licenses in the centralized licensing system called <strong>Solution License Manager</strong> (SLM).
Since SLM server is not supported by virtual server environment, we were tasked to set it up on a separate non virtual server.

The objective was to<strong>install SLM in the <a href="https://www.bluepiit.com/aws-partnership">AWS Cloud</a></strong>--the SLM server on Linux instance and the SLM client on windows instance.
We wanted to achieve it by first running the SLM installer on the windows instance which will then install the SLM server on Linux through remote execution.

### The Challenge
The biggest challenge while migrating the SLM server to the cloud is that it comes with the MAC address (media access control) of the machine, which makes installation on any virtual box extremely tedious.

### The Solution
We first set up a smooth communication between the Windows instance and the Linux instance by implementing the following steps:

- Enabling communication between internal IPs
To make Linux communicate with the Windows server, we first created a Virtual Private Cloud (VPC) so that both instances can ping and communicate.

- Introducing extra packages to Suse to make it work as an SLM server
We changed the security settings in the Windows and Linux instances. We opened multiple TCP ports on Linux and disabled firewall restrictions on the Windows.

Then we installed vsftp and Remote Execution Command Daemon (rexec) packages on the Linux server. Linux uses the rexec protocol to communicate with the SLM installer. It handles commands issued by foreign hosts and transfers orders to slave virtual machines for job execution. Using suse yast command line, we enabled vsftp and rexec services on Linux. We created a separate user with direct access to the SLM server and give it all the rights to modify the SLM configurations on the Linux instance. This was achieved via the user and security options in the Linux system.
The next most important thing was to modify the configuration file in the Linux system to allow the SLM installer to access the Linux instance.

- Adding IPs of the systems
We added IPs of both the systems in their respective host files to enable two way communication between Windows and the Linux servers effective.
After enabling communication between the internal IPs, we ensured that the Linux server worked as a server while the windows server worked like a client for the SLM.
The basic idea behind creating the Windows server to work as a client was to create a separate user as access rights on Windows is much easier.
We triggered SLM Installer from Windows instance, which was followed by choosing the remote option and giving the host name of the linux server in the dialog box with user id and password of the separate user created on the linux server.

### Conclusion:
With this proof of concept, we made BAAN licensing server work on <a href="https://www.bluepiit.com/blog/on-demand-scalability-one-of-the-pre-dominant-advantages-of-cloud-migration/">AWS Cloud</a> by using Xen as its virtual platform.</span><br />

Thanks to our awesome <a href="https://www.bluepiit.com/migration">Team BluePi's AWS Cloud Experts</a> team to make it happen. Cheers!!! :-)&nbsp;
