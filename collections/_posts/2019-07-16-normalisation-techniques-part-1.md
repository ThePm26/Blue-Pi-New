---
post_image: https://static.bluepiit.com/blog/wp-content/uploads/sites/2/2019/07/DATA_BLOG-1.png
layout: post
status: publish
published: true
title: Data Transformation (Part 1) | Normalisation Techniques
author:
  display_name: pronam
  login: pronam
  email: pronam@bluepi.in
  url: ''
author_login: pronam
author_email: pronam@bluepi.in
permalink: /blog/normalisation-techniques-part-1/
date: '2019-07-16 10:36:29 +0530'
date_gmt: '2019-07-16 10:36:29 +0530'
categories:
- machine-learning
tags: 
- normalisation
description: The process of normalisation entails converting numerical values into a new range using a mathematical function. Two common normalisation methods are min-max normalisation and z score normalisation
comments: []
---
# Data Transformation | Normalisation Techniques
{% picture "{{relative_url}}/assets/images/blog/visual.png" --img class="img-fluid" --alt Normalisation Techniques %}
Almost always when we get raw data in any project, it is unfit for direct consumption for analysis or modelling
. It is a especially a concern when the data volume is huge for example in a <a href="{{site.url}}/blog/what-is-big-data-analytics/">big data analytics </a> project
. In this blog post I cover a few of the most common transformations and their use.

## Normalisation
The process of normalization entails converting numerical values into a new range using a mathematical function. There are two primary reasons why this may be used.

## To make two variables in different scales comparable
In a profile of a customer where I may have two variables - years of education and income. We might want both these to be treated equally but their ranges are very different. Plotting them on a graph may make it impossible to decipher any correlation between these two variables. However, normalization would bring them on to the scale and the relationship would clearly stand out.

## Some models may need the data to be normalized before modeling
KNN models, for example, require a pre-requisite normalization for the model to produce effective results. Refer to this article for greater details.
Some common normalization methods are as follows.

## Min-Max
Min-Max is probably the most commonly used transformation. This transforms the numerical variable into a new range, for example, 0 to 1.  It is calculated by the formula given below.
{% picture "{{relative_url}}/assets/images/blog/minmax.png" --img class="img-fluid" --alt min max %}
For example, consider the range of marks that a set of students have scored by roll number given below

<table border="1">
<tr><th>Roll Number</th><th>Marks</th>
</tr>
<tr><td>1</td><td>10</td>
</tr>
<tr><td>2</td><td>15</td>
</tr>
<tr><td>3</td><td>50</td>
</tr>
<tr><td>4</td><td>60</td>
</tr>
</table><br>
If we were to normalize it between the ranges of 0 to 1 we would get the following 
<table border="1">
<tr>
<th>Roll Number</th><th>Calculation</th><th>Normalised marks</th>
</tr>
<tr>
<td>1</td>
<td>{% picture "{{relative_url}}/assets/images/blog/cal1.png" --img class="new-img-fluid" --alt min max %}
</td>
<td>0</td>
</tr>
<tr>
<td>2</td>
<td>{% picture "{{relative_url}}/assets/images/blog/cal2.png" --img class="new-img-fluid" --alt min max %}
</td>
<td>.1</td>
</tr>
<tr>
<td>3</td>
<td>{% picture "{{relative_url}}/assets/images/blog/cal3.png" --img class="new-img-fluid" --alt min max %}
</td>
<td>.8</td>
</tr>
<tr>
<td>4</td>
<td>{% picture "{{relative_url}}/assets/images/blog/cal4.png" --img class="new-img-fluid" --alt min max %}
</td>
<td>1</td>
</tr>
</table><br>

As we can see above that we have taken max as the maximum marks as obtained by the student as opposed to the maximum marks possible. However if from the original data set, it is possible to determine the maximum ranges then that is what we should be using and 60 in the above formulae should have been replaced by 100.

**z-score**
Simply put the z-score is the number of standard deviations a data point is from the mean of the data set. To be able to understand this we must understand what is standard deviation. The formula for z-score is as below<br />
{% picture "{{relative_url}}/assets/images/blog/zscore.png" --img class="img-fluid" --alt zscore --img style="width:207px" %}
where 
{% picture "{{relative_url}}/assets/images/blog/x.png" --img class="img-fluid" --alt zscore --img style="width:28px" %} is the mean and 
{% picture "{{relative_url}}/assets/images/blog/s.png" --img class="img-fluid" --alt zscore --img style="width:28px" %} is the standard deviation
For the above data set the z-score calculation of each observation is as follows.
mean is 33.75 and Standard Deviation is 24.95

<table border="1">
<tr>
<th>Roll Number</th><th>Marks</th><th>Z-Score</th>
</tr>
<tr>
<td>1</td><td>10</td><td>-0.7037037037</td>
</tr>
<tr><td>2</td><td>15</td><td>-0.5555555556</td>
</tr>
<tr>
<td>3</td><td>50</td><td>0.4814814815</td>
</tr>
<tr>
<td>4</td><td>60</td><td>0.7777777778</td>
</tr>
</table><br>

## Box-Cox Transformation
It is not necessary for a data set to adhere to a normal distribution. However many [data analysis](https://www.bluepiit.com/retail/retail-analytics) methods require the data distribution to be normal. Box-Cox is a transformation that can be used to convert any distribution to a normal distribution. Every dataset may not benefit from a Box-Cox transformation, for example, if there are significant outliers box-cos may not help. 
The box-cox transformation in mathematical form is denoted as<br />
{% picture "{{relative_url}}/assets/images/blog/boxcox1.png" --img class="img-fluid" --alt boxcox --img style="width:170px" %}
where &lambda; is the exponent (power) and &delta; is a shift amount that is added when X is zero or negative. When &lambda; is zero, the above definition is replaced by<br />
{% picture "{{relative_url}}/assets/images/blog/boxcox2.png" --img class="img-fluid" --alt boxcox --img style="width:170px" %}
As you can very well imagine the trick is to find the right value of &lambda; to get a normal distribution.
Usually, the standard &lambda; values of -2, -1.5, -1, -0.5, 0, 0.5, 1, 1.5, and 2 are investigated to determine which, if any, is most suitable. However, a maximum likelihood estimation can be used to determine the best possible value of &lambda; to get a more normal distribution. 
To understand Box-Cox transformation lets look at a non normal data-set and see the impact of the transformation on it.<br />
{% picture "{{relative_url}}/assets/images/blog/norm.png" --img class="img-fluid" --alt boxcox --img style="width:630px" %}
In <a href="https://www.bluepiit.com/blog/data-transformation-part-2-normalisation-techniques/">part II of this series of normalisation</a>, we will discuss Aggregations, Value Mapping and Discretization. 