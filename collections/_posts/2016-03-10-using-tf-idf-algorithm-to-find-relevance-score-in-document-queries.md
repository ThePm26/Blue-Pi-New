---
post_image: https://static.bluepiit.com/blog/wp-content/uploads/sites/2/2016/03/TF-IDF-Algorithm.png
layout: post
status: publish
published: true
title: Using TF-IDF Algorithm to Find Relevance Score in Document Queries
author:
  display_name: gaurav
  login: gaurav
  email: gaurav@bluepi.in
  url: ''
author_login: gaurav
author_email: gaurav@bluepi.in
permalink: /blog/using-tf-idf-algorithm-to-find-relevance-score-in-document-queries/
date: '2016-03-10 09:24:04 +0530'
date_gmt: '2016-03-10 09:24:04 +0530'
categories:
- machine-learning 
- tf-idf-algorithm
- tf-idf
tags:
- relevance score
- inverse-document-frequency
- encoding
comments:
- id: 93
  author: Wholesale Oakley juliet sunglasses orange flare fire iridium outlet
  author_email: siksflwnmnn@gmail.com
  author_url: http://www.fleetsale.ru/oakley-juliet-sunglasses-010.html
  date: '2016-06-28 19:37:57 +0530'
  date_gmt: '2016-06-28 19:37:57 +0530'
  content: This post have resolved my problem,thanks very much and hope you writting
    more good articles.
- id: 137
  author: Lucy
  author_email: 399znbrv@outlook.com
  author_url: http://tnphkvau.com
  date: '2016-07-18 19:21:46 +0530'
  date_gmt: '2016-07-18 19:21:46 +0530'
  content: I found yo&amp;r7821#;ue blog via Bing and I have to say. A Massive Thank
    you very much, I believed your post was extremely educational I&#8217;ll revisit
    to see what extra great information I can recieve here.
- id: 207
  author: JimmiXS
  author_email: jimos4581rt@hotmail.com
  author_url: http://www.FyLitCl7Pf7kjQdDUOLQOuaxTXbj5iNG.com
  date: '2016-08-13 19:21:18 +0530'
  date_gmt: '2016-08-13 19:21:18 +0530'
  content: 5eLjc5 http://www.FyLitCl7Pf7kjQdDUOLQOuaxTXbj5iNG.com
---
# Using TF-IDF Algorithm to Find Relevance Score in Document Queries
As the term implies, TF-IDF stands for term frequency-inverse document frequency and is used to determine what words in a corpus of documents might be more favorable to use in a query. TF-IDF calculates values for each word in a document to the percentage of documents the word appears in. Words with high TF-IDF numbers imply a strong relationship with the document they appear in, suggesting that if that word to appear in a query, the document could be of interest to the person.
The task of retrieving data from a user-defined query has become so common and natural in recent years that some might not give it a second thought. However, this growing use of query retrieval warrants continued research and enhancements to generate better solutions to the problem.
## Type of Term Frequency Algorithm
There have been many advances in the TF-IDF algorithm, many researchers have contributed and have come out with many of their own algorithms which although not used prominently but are still relevant. Here is a list of algorithms that are generally referred for Term frequency:

<p style="text-align: center;"><img class="aligncenter size-full wp-image-1368" src="https://static.bluepiit.com/blog/wp-content/uploads/sites/2/2016/03/images-1.png" alt="images-1" width="628" height="94" />

## Type of Inverse Document Frequency
The Inverse Document frequency algorithm, has also seen many advances, the only problem with the simple IDF has is it's not able to identify words which are singular and plural, so it identifies them as two distinct characters, thus not giving an accurate result. Researchers have tried to come up with some algorithms to counter that:

<p style="text-align: center;"><img class="aligncenter size-full wp-image-1369" src="https://static.bluepiit.com/blog/wp-content/uploads/sites/2/2016/03/images-2.png" alt="images-2" width="632" height="116" />

## The Math behind TF-IDF
Essentially, TF-IDF works by determining the relative frequency of words in a specific document compared to the inverse proportion of that word over the entire document corpus. Intuitively, this calculation determines how relevant a given word is in a particular document. Words that are common in a single or a small group of documents tend to have higher TFIDF numbers than common words such as articles and prepositions. The TF-IDF weighing is a much better way to understand this, it&rsquo;s the product of its TF weight with IDF weight.

<p style="text-align: center;"><img class="aligncenter size-full wp-image-1370" src="https://static.bluepiit.com/blog/wp-content/uploads/sites/2/2016/03/images-3.png" alt="images-3" width="286" height="60" />

This type of weighing is the best weighing scheme in information retrieval and it increases with the number of occurrences of a given word in the document. Another factor which contributes to this is with an increase in a rarity of the word in other documents the weight also increases. This &lsquo;W&rsquo; term is said to have a large discriminatory power. Therefore, when a query contains this &lsquo;W&rsquo;, returning a document &lsquo;d&rsquo; where &lsquo;W&rsquo; is large will very likely satisfy the user.

## Applications
This algorithm is useful when you have a document set, generally a large one, which needs to be categorized and its especially easy to implement as you don't need to train a model ahead of time and it will automatically account for differences in lengths of documents.
If you have a Blogging website where tens of thousands of users contribute and write blog posts, the tags attached to each blog post will appear on listing pages on various parts of the site. Although the authors are able to tag things manually when they write the content, in many cases they chose not to, and therefore many blog posts are not categorized. Empirics show that only a small fraction of users will take the time to manually add tags and assist with a categorization of posts and reviews, making voluntary organization unsustainable. Such a document set is an excellent use-case for TF-IDF, as it generates tags for the blog posts and helps display them in the right areas of your site. Best of all, no new writer or blogger would have to suffer through manually tagging them on their own! A quick run of the algorithm would go through the document set and sort through all the entries, eliminating a great deal of hassle.

## Advantages of TF-IDF
TF-IDF is an efficient and simple algorithm for matching words in a query to documents that are relevant to the query. From the research done by many of the scholars till now have proven that, TF-IDF returns documents that are highly relevant to a particular query. Furthermore, encoding TF-IDF is also not a very big challenge, thus making it ideal for forming the basis for more complicated algorithms and query retrieval systems. Over the years, TF-IDF has formed the basis for all the research that has been done on developing algorithms on document queries.

## Conclusion
Although many new algorithms have come up in the recent past, the simple TF-IDF algorithm is still the benchmark for Query retrieval methods. But, the simple TF-IDF has its own limitations as well, like it fails to distinguish between a singular word and plural words. So, if suppose you search for &lsquo;drug&rsquo;, TF-IDF will not be able to equate the word &lsquo;drug&rsquo; with &lsquo;drugs&rsquo; categorizing each instead as separate words and slightly decreasing the word&rsquo;s &lsquo;Wd&rsquo; value. The adaptive TF-IDF algorithm proposed by Berger incorporates hillclimbing and gradient descent to enhance performance. In the adaptive TF-IDF algorithm, they also proposed a cross-language retrieval setting by applying a statistical translation to the benchmark TF-IDF.
Another type of algorithm, known as a Genetic algorithm which focuses on genetic programming, mutation, crossover, and copying have shown improved results over the simple TF-IDF weighing scheme. This shows that there is significant interest in enhancing the power of simple TF-IDF algorithm which would result in increasing the success of query retrieval systems.
