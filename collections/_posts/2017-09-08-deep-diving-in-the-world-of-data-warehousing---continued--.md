---
post_image: >-
  https://static.bluepiit.com/blog/wp-content/uploads/sites/2/2017/09/Blog-Deepdiving_DataWarehouse-2.jpg
layout: post
status: publish
published: true
title: Deep Diving in the World of Data Warehousing - Continued..
author:
  display_name: Blue Pi
  login: yogesh
  email: yogesh@bluepi.in
  url:
author_login: yogesh
author_email: yogesh@bluepi.in
permalink: /blog/deep-diving-in-the-world-of-data-warehousing-continued/
date: 2017-09-08 03:09:00
date_gmt: '2017-09-08 03:09:18 +0530'
categories:
  - bigdata
tags:
  - analytics
  - data warehouse
comments:
---
# Deep Diving in the World of Data Warehousing

In our last [blog](https://www.bluepiit.com/blog/deep-diving-in-the-world-of-data-warehousing/), we tried to understand terminology around data warehouse. But data warehouse is only a central storage system, to build a complete analytical solution there are other components needed which we will be discussing in a while below.

## ETL

Like we said earlier, the main hindrance to starting a [Power BI solution](https://www.bluepiit.com/blog/in-data-we-trust-power-bi-and-its-capabilities/) is to extract data from operational systems and putting it in a suitable format for informational applications that run off the data warehouse. ETL is an acronym of Extract, Transform, Load and such tools perform all the conversions, summarizations, key changes, structural changes and condensations needed to transform disparate data into information that can be used by the decision support tools. The functionality includes:

* Removing unwanted information while loading data from operational databases
* Converting to common data names and definitions, for uniformity across data from differentplatforms.
* Establishing defaults for missing data
* Accommodating source data definition changes i.e. meta data information.

There are tools which are already available for the above operations but they work only withsimpler data extracts. Frequently, customized extract routines need to be developed for themore complicated data extraction procedures.

## Meta Data

Meta data is data about data that describes the data warehouse. It is used for building, maintaining, managing and using the data warehouse.The role of metadata in a warehouse is different from the warehouse data, yet it plays an important role. The various roles of metadata are explained below:

* Metadata acts as a directory for data warehouse data.
* This directory helps the decision support system to locate the content correctly in datawarehouse.
* Metadata helps in decision support system for mapping of data while transformation fromoperational environment to data warehouse environment.
* Metadata also helps in the distinction between lightly detailed data and highly summarized data.
* Metadata is used by query tools to build insights.
* Metadata is used by ETL tools in cleaning, transforming and loading data.

## Data Marts

Data mart is an implementation of the data warehouse with a scope of content and data warehouse functions. Usually, data mart is restricted to a single department or part of the organization.Some of the complexities inherent in data warehouses are usually not present in data-mart-oriented projects. Data architecture modeling, for instance, which is a crucial technique for data warehouse development, is far less required for data marts.Modeling for the data mart is more end-user focused than modeling for a data warehouse.The primary advantages are:

* **Data Segregation**\: Each box of information is developed without changing the other ones. This boosts information security and the quality of data.
* **Easier Access to Information**\: These data structures provide an easy way to interpret the information stored on the database.
* **Faster Response**\: Since marts are derived from the adopted structure, it performs better than full data warehouse scan.
* **Simple queries**\: Due to smaller size and volume of data, queries tend to be simpler.
* **Subject full detailed data**\: Might also provide summarization of the information
* **Specific to User Needs**\: This set of data is focused on the end user needs
* **Easy to Create and Maintain**

## Implementation Methodology

One of the key to success in building a scalable Data warehouse solution is iterative approach. Data warehouse development can easily be bogged down if scope is too broad. The simplest way to scope data warehouse development is building one data mart at a time. Each data mart supports a single organizational element and the scope of development is limited by the data mart requirements.Initial data mart usually acts as the Data warehouse proof-of- concept, the scope must be restricted and sufficient to provide immediate and real benefits. Over a period of time, additional data marts can be developed and integrated as enterprise needs and resource availability.Different phases of development are:**Determine hardware and software platforms**There are certain questions to be answered before correct hardware and software platform can be identified like:

* How much data will be in Data Warehouse?
* Economic feasibility of platform.
* Scalability of platform and if it is optimized for data warehouse performance.
* Choices of OS, development software and database management systems.

Based on above information, the right set of decisions and procurement can be made.**Develop source integration and data transformation platforms**Integration and transformation programs are necessary to extract information from operational systems and databases for initial and subsequent loads. There could be a separate program needed to do the initial load depending upon the data volume and complexity.Update programs are usually simpler and just pick the changed data since the last run. Over time, update programs will be changed to reflect changes in both operational and other data sources.**Develop data security policies and procedures**A data warehouse system is a read-only source of enterprise information, so there is no need to be concerned of creating, update, delete capabilities. Though there is a need to address the tradeoff between protecting the corporate assets against unauthorized access and making data accessible to users who need the decision power.Security also comprises of physical security of the data warehouse. Data must be secured from loss, damage and enough redundancy and backup measures must be in place.

## Design User Interfaces

Data availability is one side of the coin but how easily and effectively a user can perceive that data is what defines the usability of such a solution. To provide ease of data consumption, graphical views are preferred by most of the organizations. For performance, developers must ensure that platform supports and are optimized to cater to end-user needs. There must be an option for the user to drill down and roll up to get more detailed views as well as a view of the overall health of the organization. There is a number of tools that can be integrated with the existing data warehouse to get all such capabilities while certain specific and customized views will need manual development. Find out,[How India’s fastest-growing logistics company is driving key business decisions by running](https://www.bluepiit.com/case-study/big-data-and-realtime-reporting) real-time reporting on top of Redshift.
{% include author_aashu.html %}