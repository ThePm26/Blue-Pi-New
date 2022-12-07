---
post_image: /assets/images/blog/inventory1.png
layout: post
status: publish
published: true
title: Inventory rebalancing - Part 1
author:
  display_name: Gadoya Parth
  login: 
  email: 
  url: ''
author_login: 
author_email: 
permalink: /blog/inventory-rebalancing-part1/
date: '2020-04-02 13:33:48 +0530'
date_gmt: '2020-04-02 13:33:48 +0530'
meta_description: Inventory imbalance refers to phenomena where some stores end up having overstock and some stores end up having understock, due to supply chain issues and poor demand planning.
categories:
- retail
tags:
- Supply Chain
comments:

---
# Inventory rebalancing
{% picture "{{relative_url}}/assets/images/blog/inventory1.png" --img class="blog_hero_img" --alt artificial intelligence %}

## Introduction

Any retail chain organisation, operating multiple stores across multiple states and cities, and sometimes in multiple countries, has to optimise its [supply chain](https://www.bluepiit.com/blog/things-to-know-about-ai-in-supply-chain-optimization/) to meet varying customer demand.

## Outline
 - Why does inventory imbalance happen?
 - How to identify inventory imbalance across stores?
 - Imbalance metrics

## Why does inventory imbalance happen?
Inventory imbalance refers to phenomena where some stores end up having overstock and some stores end up having understock, due to supply chain issues and poor demand planning.

##### Supply chain issues

- Reaching stock early than anticipated time
- Reaching stock late


##### Underlying reasons for above issues:

- Uncertainty in supplier deliveries
- Uncertainty in manufacturing output


##### Poor demand planning

- Underestimating demand
- Overestimating demand


Above issues or combination of issues lead to inventory imbalance problems. This imbalance affects customers and stores both negatively and ultimately the recall value of organization suffers with significant loss of customers and sales.

##### Major loss can be categorised as:

- Loss of sales (Understock)
- Excess inventory costs (Overstock)

## How to identify inventory imbalance across stores?
Inventory imbalance is a result of lack of proper inventory planning. There are multiple signs which indicate poor inventory planning which helps in identifying inventory imbalances.

##### Major indicators are as below:
 - Frequency of stock out situations
 - Reduction in order-fill-rate (OFR) (OFR is fraction of customer demand met from on-hand inventory)
 - Increased obsolete inventory due to expiry/seasonality
 - Visualising Stock factor for every store - sku combination

Out of all indicators presented, Stock factor visualisation is described as below:

##### Stock factor visualisation involves below steps to perform:
 - Estimate demand for each store-sku combinations (for current period)
 - Check how much inventory is lying on hand (on start of current period)
 - **Stock factor = Inventory / Estimated demand**
 - Now for each store, we can do a bar-plot of stock factors for each sku.

Height of the graph can be a good indicator of inventory imbalance. Bigger height suggests excess inventory and lower height suggests very less inventory on-hand. This can be a good tool for identifying inventory imbalance.

For each store-sku combination, if we can define optimal stock factor, then this visualisation will become even more informative. But to come up with an optimal stock factor itself is a complex topic and needs a separate blog as it is out of scope of the current blog. Also please note that, this optimal stock factor can also vary over the time, which makes it even more complex.

## Imbalance metrics
As we understood, there are various clues regarding imbalance in inventory. 

We need mathematical metrics which can capture inventory imbalance and help us in identifying imbalance. These metrics guide us to accelerate continuous improvement of the whole supply chain.

##### Below are those metrics:
* Stock out based metrics
  - Out of all days in a given period, how many days are stock out days?
  - Percentage of days of stock out

* Order Fill Rate (OFR)
  - OFR = ( Satisfied demand / Actual demand ) * 100
  - High OFR means sufficient stock against demand and lower OFR suggests inability of the store to meet demand.
     
* Days of Sales Inventory (DSI)
  - How many days are required to completely sell given inventory?
  - DSI = Inventory / Per day demand
  - Higher DSI suggests overstock and lower DSI suggests lack of sufficient stock.
     
In this blog, we presented a major problem of inventory imbalance in retail and various strategies on how to identify this. At this moment, we have sufficient background to focus on the solution of this problem, which we will cover in the [upcoming part.](https://www.bluepiit.com/blog/inventory-rebalancing-part2/) We will also dig deeper into python implementation of the solution.

{% include author_gadoyaparth.html %}