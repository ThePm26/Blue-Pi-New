---
post_image: https://static.bluepiit.com/blog/wp-content/uploads/sites/2/2019/07/Asset-1.png
layout: post
status: publish
published: true
title: Data Transformation (Part 2)| Normalisation techniques
author:
  display_name: pronam
  login: pronam
  email: pronam@bluepi.in
  url: ''
author_login: pronam
author_email: pronam@bluepi.in
permalink: /blog/data-transformation-part-2-normalisation-techniques/
date: '2019-07-24 05:37:18 +0530'
date_gmt: '2019-07-24 05:37:18 +0530'
categories:
- machine-learning
tags: 
- normalisation
description: We will discuss different data normalisation methods such as value mapping normalisation, discretization normalisation, equal width discretization ,  egual frequency discretization and aggregation normalisation
comments: []
---
# Data Transformation | Normalisation techniques
{% picture "{{relative_url}}/assets/images/blog/norm2.png" --img class="img-fluid" --alt Normalisation Techniques %}
In the part 1 of the series we looked at the various methods of normalising the data including min-max and box-cox transformations. In this part we look at the following
<ul>
<li style="list-style:disc">Value Mapping</li>
<li style="list-style:disc">Discretization </li>
<li style="list-style:disc">Equal Width Discretization </li>
<li style="list-style:disc">Equal Frequency Discretization </li>
<li style="list-style:disc">Aggregation </li>
<li style="list-style:disc">Value Mapping </li>
</ul>
Sometimes in the data set we may have variables that are textual in character but they may signify an order. For example a data set may have a column having three distinct values Low, Medium and High. These can be numerically mapped to 0, 1 and 2. However extreme care must be exercised when choosing the values as they must reflect the degree of change in mathematical terms. Who is to say that the right values are not 0, 5 and 6 for instance.
Another very frequent example of value mapping arises when we need to map categorical values into separate columns. This is required often in any deep learning data preparation. This is termed as one hot encoding signifying only one column of the data set representing the boolean is hot. 
Consider a dataset as below and it&rsquo;s one hot encoded form below:
<table border="1">
<th>Category</th>
<th>Article</th>
<th>Quantity</th>
<tr>
<td>Electronics</td>
<td>Mobile Phone</td>
<td>100</td>
</tr>
<tr>
<td>Electronics</td>
<td>Tablet</td>
<td>100</td>
</tr>
<tr>
<td>Electronics</td>
<td>Laptop</td>
<td>60</td>
</tr>
<tr>
<td>Furniture</td>
<td>Table</td>
<td>25</td>
</tr>
<tr>
<td>Furniture</td>
<td>Chair</td>
<td>100</td>
</tr>
</table><br>
<table border="1">
<th>Electronics</th>
<th>Furniture</th>
<th>Article</th>
<th>Quantity</th>
<tr>
<td>1</td>
<td>0</td>
<td>Mobile Phone</td>
<td>100</td>
</tr>
<tr>
<td>1</td>
<td>0</td>
<td>Tablet</td>
<td>100</td>
</tr>
<tr>
<td>1</td>
<td>0</td>
<td>Laptop</td>
<td>60</td>
</tr>
<tr>
<td>0</td>
<td>1</td>
<td>Table</td>
<td>25</td>
</tr>
<tr>
<td>0</td>
<td>1</td>
<td>Chair</td>
<td>50</td>
</tr>
</table><br>
As can be observed this makes the data set quite sparse if there are many values in the category columns.
<h4> Discretization</h4>
Discretization (also referred to as binning) is the process of converting a continuous variable (or a nominal variable  into their discrete counterparts. Intuitively it may appear that discretization would  lead to loss in information however in certain circumstances the process is quite valuable. For example a risk profile of a customer instead of being represented as any value within 0 to 100 may be categorised into Very Low, Low, Medium, High, Very High. Specifically if there is suspicion about the accuracy of the continuous variable discretization may be a desirable normalisation step. 
The mathematical value from discretization arises as the frequency of values in original dataset would be very infrequent thereby leading to poor modelling and correlation. Another discretization of a different nature could be applied to export data for instance. The export data may have millions of company each exporting a handful of materials. It maybe value in grouping the companies into industries and a summarised view at the industry level may lend to a much better analysis.
While discretization may appear to be simply a process of grouping together like values in a dataset there are certain decisions that require consideration.  How many intervals to choose is one such. Here two different approaches are commonly used that will be explained with the dataset below. 
<table border="1">
<th></th>
<th>Math</th>
<th>Physics</th>
<th>Chemistry</th>
<th>English</th>
<th>Biology</th>
<th>Economics</th>
<th>History</th>
<th>Civics</th>
<tr>
<td>John</td>
<td>55</td>
<td>45</td>
<td>56</td>
<td>87</td>
<td>21</td>
<td>52</td>
<td>89</td>
<td>65</td>
</tr>
<tr>
<td>Suresh</td>
<td>75</td>
<td>55</td>
<td>0</td>
<td>64</td>
<td>90</td>
<td>61</td>
<td>58</td>
<td>2</td>
</tr>
<tr>
<td>Ramesh</td>
<td>25</td>
<td>54</td>
<td>89</td>
<td>76</td>
<td>95</td>
<td>87</td>
<td>56</td>
<td>74</td>
</tr>
<tr>
<td>Jessica</td>
<td>78</td>
<td>55</td>
<td>86</td>
<td>63</td>
<td>54</td>
<td>89</td>
<td>75</td>
<td>45</td>
</tr>
<tr>
<td>Jennifer</td>
<td>58</td>
<td>96</td>
<td>78</td>
<td>46</td>
<td>96</td>
<td>77</td>
<td>83</td>
<td>53</td>
</tr>
</table><br>

## Equal Width Discretization
The algorithm first finds the min and max values and the splits the range into equal distances based on the interval. 
So let's say we want 5 intervals and the range of marks vary between 0 to 100.  In this case we would have the different bins as 0 - 20, 21-40, 41-60, 61-80, 81 -100. After equal width discretization the table would look as below:
<table border="1">
<th></th>
<th>Math</th>
<th>Physics</th>
<th>Chemistry</th>
<th>English</th>
<th>Biology</th>
<th>Economics</th>
<th>History</th>
<th>Civics</th>
<tr>
<td>0-20</td>
<td>0</td>
<td>0</td>
<td>1</td>
<td>0</td>
<td>0</td>
<td>0</td>
<td>0</td>
<td>1</td>
</tr>
<tr>
<td>21-40</td>
<td>1</td>
<td>0</td>
<td>0</td>
<td>0</td>
<td>1</td>
<td>0</td>
<td>0</td>
<td>1</td>
</tr>
<tr>
<td>41-60</td>
<td>4</td>
<td>4</td>
<td>1</td>
<td>1</td>
<td>1</td>
<td>1</td>
<td>2</td>
<td>1</td>
</tr>
<tr>
<td>61-80</td>
<td>0</td>
<td>0</td>
<td>1</td>
<td>3</td>
<td>0</td>
<td>2</td>
<td>1</td>
<td>2</td>
</tr>
<tr>
<td>81-100</td>
<td>0</td>
<td>1</td>
<td>2</td>
<td>1</td>
<td>3</td>
<td>2</td>
<td>2</td>
<td>0</td>
</tr>
</table><br>

## Equal Frequency Discretization
The algorithm find the minimum and maximum values there-after divides the range into the given number of intervals, in such a way that every interval contains the equal number of sorted values
As we have five intervals and five observations each observation would get 1 value only. So if list the bins it should suffice for each language as each bin would have a frequency of 1. 
The results are generated by using the classInt package in R. 
The code is as below for Maths.<br />
{% highlight python linenos %}
dataset <-c(55,75,25,78,58)
library(classInt)
classIntervals(dataset, 5)
{% endhighlight %}
Maths  - [18.375,40)     [40,56.5)   [56.5,66.5)   [66.5,76.5) [76.5,84.625]

## Aggregation
Sometimes the variable that you are trying to visualise may not be part of the original dataset but maybe a derived variable based as a function of one or more variables in the original dataset. 
As example we may have a dataset that has runs scored and balls faced by each batsman in  a cricket match. What we may be interested in however could be the metric called strike rate which is defined simply as strike rate is then an aggregated variable. 
That sums up the most common data normalisation techniques. 
