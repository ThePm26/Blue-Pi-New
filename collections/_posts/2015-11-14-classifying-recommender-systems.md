---
post_image: https://static.bluepiit.com/blog/wp-content/uploads/sites/2/2015/11/Recommender-System.jpg
layout: post
status: publish
published: true
title: Classifying Different Types of Recommender Systems
author:
  display_name: Barkat Dhillon
  login: barkat
  email: barkat@bluepi.in
  url: ''
author_login: barkat
author_email: barkat@bluepi.in
permalink: /blog/classifying-recommender-systems/
date: '2015-11-14 07:24:01 +0530'
date_gmt: '2015-11-14 07:24:01 +0530'
categories:
- machine-learning
tags:
- recommender systems
description: There are majorly six types of recommendation systems for the Media and Entertainment Collaborative Recommender system, Content-based recommendation system, Demographic based recommendation system, Utility based recommender system, Knowledge based recommender system and Hybrid recommendation system
comments: []
---
# Classifying Different Types of Recommender Systems
Recommender systems are defined as recommendation inputs given by the people, which the system then aggregates and directs to appropriate recipients.&nbsp; It can be further defined as a system that produces individualized recommendations as output or has the effect of guiding the user in a personalized way to interesting objects in a larger space of possible options. Recommender system will become an integral part of the Media and Entertainment industry in the near future. There are majorly six types of recommender systems which work primarily in the Media and Entertainment industry: <strong>Collaborative Recommender system</strong>, <strong>Content-based recommender system</strong>, <strong>Demographic based recommender system</strong>, <strong>Utility based recommender system</strong>, <strong>Knowledge based recommender system</strong> and <strong><a href="https://www.bluepiit.com/blog/demystifying-hybrid-recommender-systems-and-their-use-cases/">Hybrid recommender system</a></strong>.

## Collaborative Recommender System:
It&rsquo;s the most sought after, most widely implemented and most mature technologies that is available in the market. Collaborative recommender systems aggregate ratings or recommendations of objects, recognize commonalities between the users on the basis of their ratings, and generate new recommendations based on inter-user comparisons. The greatest strength of collaborative techniques is that they are completely independent of any machine-readable representation of the objects being recommended and work well for complex objects where variations in taste are responsible for much of the variation in preferences. Collaborative filtering is based on the assumption that people who agreed in the past will agree in the future and that they will like similar kind of objects as they liked in the past.

## Content based Recommender System:
It&rsquo;s mainly classified as an outgrowth and continuation of information filtering research. In this system, the objects are mainly defined by their associated features. A content-based recommender learns a profile of the new user&rsquo;s interests based on the features present, in objects the user has rated. It&rsquo;s basically a keyword specific recommender system here keywords are used to describe the items. Thus, in a content-based recommender system the algorithms used are such that it recommends users similar items that the user has liked in the past or is examining currently.

## Demographic based Recommender System: 
This system aims to categorize the users based on attributes and make recommendations based on demographic classes. Many industries have taken this kind of approach as it&rsquo;s not that complex and easy to implement. In Demographic-based recommender system the algorithms first need a proper market research in the specified region accompanied with a short survey to gather data for categorization. Demographic techniques form &ldquo;people-to-people&rdquo; correlations like collaborative ones, but use different data. The benefit of a demographic approach is that it does not require a history of user ratings like that in collaborative and content based recommender systems.

## Utility based Recommender System: 
Utility based recommender system makes suggestions based on computation of the utility of each object for the user. Of course, the central problem for this type of system is how to create a utility for individual users. In utility based system, every industry will have a different technique for arriving at a user specific utility function and applying it to the objects under consideration. The main advantage of using a utility based recommender system is that it can factor non-product attributes, such as vendor reliability and product availability, into the utility computation. This makes it possible to check real time inventory of the object and display it to the user.

## Knowledge based Recommender System:
This type of recommender system attempts to suggest objects based on inferences about a user&rsquo;s needs and preferences. Knowledge based recommendation works on functional knowledge: they have knowledge about how a particular item meets a particular user need, and can therefore reason about the relationship between a need and a possible recommendation.

## Hybrid Recommender System: 
Combining any of the two systems in a manner that suits a particular industry is known as Hybrid Recommender system. This is the most sought after Recommender system that many companies look after, as it combines the strengths of more than two Recommender system and also eliminates any weakness which exist when only one recommender system is used. There are several ways in which the systems can be combined, such as:


- ### Weighted Hybrid Recommender:

In this system the score of a recommended item is computed from the results of all of the available recommendation techniques present in the system. For example, P-Tango system combines collaborative and content based recommendation systems giving them equal weight in the starting, but gradually adjusting the weighting as predictions about the user ratings are confirmed or disconfirmed.Pazzani&rsquo;s combination hybrid doesn&rsquo;t use numeric scores but rather treats the output of each recommender as a set of votes, which are then combined in a consensus scheme.

- ### Switching Hybrid Recommender:

Switching Hybrid Recommender, switches between the recommendation techniques based on particular criterions. Suppose if we combine the content and collaborative based recommender systems then, the switching hybrid recommender can first deploy content based recommender system and if it doesn&rsquo;t work then it will deploy collaborative based recommender system.

- ### Mixed Hybrid Recommener:
Where it&rsquo;s possible to make a large number of recommendations simultaneously, we should go for Mixed recommender systems. Here recommendations from more than one technique are presented together, so it the user can choose from a wide range of recommendations.&nbsp; The PTV system, mainly a recommended program to suggest customers for television viewing, developed by <a href="https://about.me/barry.smyth">Smyth</a> and Cotter is used by the majority of the media and entertainment companies.

See also how to do <a href="{{site.url}}/blog/product-recommendations-using-HRNN">product recommendations using
 HRNN</a>
