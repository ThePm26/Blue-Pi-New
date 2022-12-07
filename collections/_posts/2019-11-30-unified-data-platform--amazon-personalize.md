---
post_image: https://static.bluepiit.com/blog/wp-content/uploads/sites/2/2019/09/Asset-12.png
layout: post
status: publish
published: true
title: Unified Data Platform & Amazon personalize
author:
display_name: admin
login: admin
email: sushil@bluepi.in
url:
author_login: admin
author_email: sushil@bluepi.in
permalink: /blog/unified-data-platform-amazon-personalize/
date: 2019-11-30 06:26:00
date_gmt: '2019-11-30 06:26:11 +0530'
categories:
  - bigdata
tags:
  - analytics
description: user data platform unifies data from disparate systems to one single repository, which can then provide great value to different teams/functions. The data can broadly originate in transactional systems, customer relationship management systems, customer interaction on the online/offline channels and third-party systems. A UDP not only brings all of this together but correlates and references data from all these systems, hence providing a Single Customer View which records all the user touch points
comments: []
---
# Unified Data Platform & Amazon personalize
It is beyond doubt that Personalization adds real value to the customer engagement, in fact,<br>around 30% page views on Amazon are from recommendations. But the question then is, why doesn’t everyone implement it and more importantly, why is it so hard to achieve good results.

The problem is multi-faceted and too many to enumerate but broadly we can divide them into:

## Data issues

Multitude of systems: ERPs, CRMs, OMS, Support centres, Apps, website, POS, or in other words an alphabet soup of systems, which cater to different needs but do not “talk” to each other. Data formats and structures are different. Combining them is a real pain.&nbsp;
Inaccurate data: Historical data might be missing values or have inaccuracies because end of the day systems is run by humans.

Sheer scale of data: With online e-commerce operations, the data which was huge already got humongous. Imagine a retail operation with millions of SKUs and hundreds of stores and now millions of online customers.

## Implementation issues

**Competency:** Data science and [big data technologies](https://www.bluepiit.com/big-data/) are relatively new and there is a genuine shortfall of trained high-quality resources. Also, enterprises need disruptive changes to bring about new age techniques like personalization.

**Speed to market:** Even if we have the best of the class engineers and data scientists, it takes a lot of time to implement, train, tune, retrain and<br>improve. Most of the times, business folks lose motivation before even a couple of cycles are run.
A/B testing capabilities: Related to above (speed to market), implementing<br>multiple techniques, comparing them, tuning them and in some cases finding a new approach is simply exhausting and very slow-moving

**Real-time recommendations:** This is when the customer is online and browsing through the millions of products and categories, needs to be presented with recommendations based on recent behaviour. A person looking for a polo shirt today might have been trying to find a helmet last week.

## Hard problems of personalization:

**Cold start:** What happens when a customer lands on your site for the first time, you do not have contextual data for that particular customer. How do you find out what to recommend?

**Contextual in real-time:** Similar to the “real-time recommendations”, contextual personalization in real-time requires huge scaling potential and needs to factor in the current context.

**Discovery vs Related:** Although not a challenge per-se, but to be really effective the personalization has to be able to help product discovery as well as match the customer taste and context.

**How we help our client implement personalization**

## BluePi User data platform

Our [user data platform unifies data](https://www.bluepiit.com/blog/unified-data-platform-amazon-personalize/) from disparate systems to one single repository, which can then provide great value to different teams/functions. The data can broadly originate in transactional systems, customer relationship management systems, customer interaction on the online/offline channels and third-party systems. A UDP not only brings all of this together but correlates and references data from all these systems, hence providing a Single Customer View which records all the user touch points.

UDP collects data from different systems - it then refines, enriches, corrects (in some cases, like for example a system might be missing some customer attributes like address), unifies the collected data, and finally, it makes this supercharged data available to different teams across the organisation and to services like Personalize.

## Amazon personalize

Amazon personalize is a fully managed M/L service that makes it pretty simple to implement the personalization at your organization. This the same technology that powers personalization on Amazon website. ;

## How does it work

**Data Preparation**<br> Amazon personalize personalize requires data as three different datasets - User, Interaction and Item. Interaction is primarily either the clickstream or the transactional information of the user like his past purchases. This data needs to be converted to Personalize datasets using the available SDKs.

## Creating Dataset Group

<pre><code style=" white-space: pre-wrap; color:#4512AE;">
import boto3
personalize = boto3.client('personalize')
response = personalize.create\_dataset\_group(name = 'YourDatasetGroup')
dsg\_arn = response\['datasetGroupArn'\]
description = personalize.describe\_dataset\_group(datasetGroupArn = dsg\_arn)\['datasetGroup'\]
print('Name: ' + description\['name'\])
print('ARN: ' + description\['datasetGroupArn'\])
print('Status: ' + description\['status'\]) ```
Creating Dataset   

import boto3
personalize = boto3.client('personalize')
response = personalize.create\_dataset(
    name = 'YourDataset',
    schemaArn = 'schema\_arn',
    datasetGroupArn = 'dataset\_group\_arn',
    datasetType = 'Interactions')
print ('Dataset Arn: ' + response\['datasetArn'\]) ``` 
</code></pre>

## Importing data to Dataset Group 

<pre><code style=" white-space: pre-wrap; color:#4512AE;">
import boto3
personalize = boto3.client('personalize')
response = personalize.create\_dataset\_import\_job(
    jobName = 'YourImportJob',
    datasetArn = 'dataset\_arn',
    dataSource = {'dataLocation':'s3://bucket/file.csv'},
    roleArn = 'role\_arn')
dsij\_arn = response\['datasetImportJobArn'\]
print ('Dataset Import Job arn: ' + dsij\_arn)
description = personalize.describe\_dataset\_import\_job(
    datasetImportJobArn = dsij\_arn)\['datasetImportJob'\]
print('Name: ' + description\['jobName'\])
print('ARN: ' + description\['datasetImportJobArn'\])
print('Status: ' + description\['status'\]) ```
</code></pre>

The above methodology works well for a dataset being consumed in batch. Personalize also gives SDK that allows integration with realtime events directly from the clickstream.

## Training

Solution Personalize "solution" is the training of the algorithm/recipe on the dataset created from the above preparation step. The recipes are a predefined algorithm that Amazon Personalize has made available for different use cases, for example, User Personalization recipe that uses HRNN(hierarchical recurrent neural network). There are recipes that tackle specific problem areas like cold start, popularity and related.

To create a solution with Personalize one can use the below code snippet

<pre><code style=" white-space: pre-wrap; color:#4512AE;">
import boto3
personalize = boto3.client('personalize')
print ('Creating solution') response = personalize.create\_solution( name = "SolutionName", datasetGroupArn = "Dataset group arn", performAutoML = True)

#Get the solution ARN.
solution\_arn = response\['solutionArn'\] print('Solution ARN: ' + solution\_arn)

#Use the solution ARN to get the solution status.
solution\_description = personalize.describe\_solution(solutionArn = solution\_arn)\['solution'\] print('Solution status: ' + solution\_description\['status'\])

#Use the solution ARN to create a solution version.
print ('Creating solution version') response = personalize.create\_solution\_version(solutionArn = solution\_arn) solution\_version\_arn = response\['solutionVersionArn'\] print('Solution version ARN: ' + solution\_version\_arn)

#Use the solution version ARN to get the solution version status.
solution\_version\_description = personalize.describe\_solution\_version( solutionVersionArn = solution\_version\_arn)\['solutionVersion'\] print('Solution version status: ' + solution\_version\_description\['status'\]) 
</code></pre>

**Evaluation**<br>The built model can be evaluated against metrics like coverage, mean reciprocal rank, precision, etc. All these metrics help to gauge the performance of the model. Multiple stages of hyper-parameter tuning can also be evaluated using these metrics in order to get to the best possible model that can be deployed. Model evaluation can be done as below

<pre><code style="white-space: pre-wrap; color:#4512AE;">
import boto3
personalize = boto3.client('personalize')
response = personalize.get\_solution\_metrics( solutionVersionArn = 'solution version arn')
print(response\['metrics'\])
</code></pre>

**Deploy and Use**<br>The trained models can be deployed as APIs to be used for Recommendations or Creating Campaigns. The serving APIs are directly consumable by any application by utilizing the Personalize AWS SDKs.

**It all ties up**

As mentioned above, the BluePi UDP integrates nicely with Amazon personalize. It takes care of getting the data prepared for personalize, solving some of the problems mentioned above.

<img src="https://static.bluepiit.com/blog/wp-content/uploads/sites/2/2019/11/architecture-1.png" alt="UDP Architecture" class="blog_image_size">

&nbsp;