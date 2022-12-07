---
post_image: https://static.bluepiit.com/blog/wp-content/uploads/sites/2/2015/11/Recommender-System.jpg
layout: post
status: publish
published: true
title: Demystifying Hybrid Recommender Systems and their Use Cases
author:
  display_name: gaurav
  login: gaurav
  email: gaurav@bluepi.in
  url: ''
author_login: gaurav
author_email: gaurav@bluepi.in
permalink: /blog/demystifying-hybrid-recommender-systems-and-their-use-cases/
date: '2016-02-12 07:39:11 +0530'
date_gmt: '2016-02-12 07:39:11 +0530'
categories:
- machine-learning
tags:
- recommender systems
comments: []
---
# Demystifying Hybrid Recommender Systems and their Use Cases
Recommender systems aim to provide users with personalized online product or service recommendations to handle the increasing online information overload problem and improve customer relationship management. A Recommender system can be distinguished from an information retrieval system by the semantics of its user interaction. Recommender systems are mainly <a href="https://www.bluepiit.com/blog/classifying-recommender-systems/">classified into six types of recommender systems</a>. Here we will be discussing only about Hybrid Recommender Systems and their use cases
## Hybrid Recommender systems
The Hybrid Recommendation is very promising as compared to other recommender systems. Many researchers believe that it provides a lot of synergies as compared to basic recommender systems. The main advantage of the Hybrid Recommender systems is that they combine two or more recommendation techniques to gain performance with fewer of the drawbacks of any of them. Hybrid Recommender systems are classified mainly into following:
## Weighted Recommender system
Weighted recommender system is one of the simplest Hybrid Recommender systems. Here the score of the recommended items is computed from the results of all the available recommendation techniques present in the system. For example, P-Tango system combines collaborative and content based recommendation systems giving them equal weight in the starting, but gradually adjusting the weighting as predictions about the user ratings are confirmed or disconfirmed. The main benefit of using a Weighted Hybrid Recommender system is that all of the system&rsquo;s capabilities are brought to bear on the recommendation process and it&rsquo;s easy to perform post-hoc credit and adjust the hybrid system accordingly. Michael Pazzani was one of the few pioneers who developed a system on Weighted Recommender system and is still being used in many companies. Pazzani&rsquo;s combination hybrid doesn&rsquo;t use numeric scores but rather treats the output of each recommended as a set of votes, which are then combined in a consensus scheme.
## Feature Combination
Using feature combination as a Hybrid Recommender engine, you can easily achieve the content/collaborative merger. This is done by basically treating the collaborative information as simple additional feature data associated with each example and use content-based techniques over this augmented data set. For example, in an experiment, in order to achieve higher precision rate than that achieved by just collaborative method, inductive rule learner, Ripper, was applied to the task of recommending movies using both user ratings and content features.<br />
The main advantage of using feature combination hybrid is that it lets the system consider collaborative data without relying on it exclusively, so it reduces the sensitivity of the system to the number of users who have rated an item.
## Cascade
Cascade recommender system follows a staged process of a recommender system. In this technique, one recommendation technique is employed first to produce a coarse ranking of users or items and the second technique refines the recommendation from among the sets. The recommendations are placed in buckets of equal preferences, and the collaborative technique is employed to break ties, further ranking the suggestions in each bucket.<br />
The main advantage of using a cascade recommender system is that it allows the system to avoid employing the second, lower-priority, technique on items that are already well-differentiated by the first. Also, Cascade&rsquo;s second step focuses only on those items for which additional discrimination is needed, it becomes more efficient.
## Feature Augmentation
The feature augmentation is a relatively very new technique; it is attractive because it offers a way to improve the performance of the core systems. In feature augmentation, one technique is employed to produce a rating or classification of an item and that information is then incorporated into the processing of the next recommendation technique. Additional functionalities can be added by intermediaries who can use other techniques to augment the data. The main benefit of using a Feature recommender system is that it allows the recommendation engine to combine two separate types of recommender systems to combine in a way that the output of the first is fed into the input of the second recommender system and data filters can be applied according to the need basis.
## Meta Level
Meta-level hybrid recommender system is one of the most widely used types of recommender system. Here two recommender systems are combined in a way that output of one of the recommender system is the input of the other recommender system. It sounds similar to the feature augmented recommender system but the difference is in meta level the entire model becomes the input whereas in feature augmented, the model generates features for input for a second algorithm.
The main benefit of using a Meta level recommender system is for the content/collaborative hybrid where the learned model is a compressed representation of a user&rsquo;s interest, and a collaborative mechanism that follows can operate on this information-dense representation more easily than on raw rating data.
## Switching
A switching Hybrid recommender system, builds in item-level sensitivity to the hybridization strategy, it uses some criterion to switch between recommendation techniques. When we combine a content and collaborative type of recommender system, then the switching recommender system first uses the content system, and if this cannot make any difference in the system then it deploys the collaborative recommendation system. This switching hybrid does not completely avoid the ramp-up problem, since both the collaborative and the content based systems have the &ldquo;new user&rdquo; problem.
The main benefit of using a switching hybrid recommender system is that it gives a level of sensitivity to the strengths and weaknesses of its constituent recommenders. But, it also brings another level of complexity into the recommender process since the switching criteria must be determined, and this introduces another level of parameterization.
## Mixed
Mixed hybrid recommender system is the most sort after recommender system after the meta level recommender system. In mixed recommender system, one technique is employed to measure data and the other recommender system is employed to measure another data. In the final stage the preferences from these two techniques are combined together and then the final result is displayed. For example, the PTV system uses this approach to assemble a recommended program of television viewing, where the content based technique is employed to measure the textual descriptions of TV shows and collaborative information technology is used to measure the preferences of other users.
The mixed hybrid recommender system avoids the &ldquo;new item&rdquo;, &ldquo;new user&rdquo; startup problem. the other advantage of using a mixed system is that this technique has the desirable &ldquo;niche-finding&rdquo; property which can bring in new items that a strict focus on content would eliminate.
## Conclusion
Hybrid Recommender systems can be the most effective solution for building a recommender system. Content/ Collaborative hybrids are the most sort after recommender systems. They do have many issues like the ramp up problems since both the techniques need a database of ratings. the knowledge-based and utility-based recommender techniques are better options than the content/collaborative recommender systems. The Weighted Hybrid recommender systems were the basic recommender systems, and have been used in many restaurants systems like the Entr&eacute;e system developed by Burke. The feature augmentation and meta-level system are the most popular hybrid recommender systems as the input of one is fed into the output of the other recommender system.
