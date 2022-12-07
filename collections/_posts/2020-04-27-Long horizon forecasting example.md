---
post_image: /assets/images/blog/long-horizon.png
layout: post
status: publish
published: true
title: A use case for what-if tool - Long horizon forecasting example
author:
  display_name: Aarushi Kapoor 
  login: 
  email: 
  url: ''
author_login: 
author_email: 
permalink: /blog/long-horizon-forecasting-example
date: '2020-04-27 13:33:48 +0530'
date_gmt: '2020-04-27 13:33:48 +0530'
categories:
- retail
tags:
- sales forecasting
comments:

---

# A use case for what-if tool - Long horizon forecasting example
{% picture "{{relative_url}}/assets/images/blog/long-horizon.png" --img class="blog_hero_img" --alt long-horizon %}

## The need for long-horizon forecasting

Long-horizon forecasting involves predicting a situation 1.5-2 years in advance. Some businesses need such horizons for procurement of raw materials, ensuring the availability of staff and labour to meet demand and supply, expense management in terms of maintenance, smart purchasing to improve infrastructure and technology for continuous growth, and even better hiring. To sum up, long-horizon forecasting is crucial for any business in order to be prepared to smooth sail any challenges that the future might bring.

Having said this, it is difficult for most statistical and [machine learning](https://www.bluepiit.com/blog/machine-learning-in-supply-chain-optimization/) models to give accurate long-horizon forecasts accurately simply because it is easier to predict what happens tomorrow rather than predicting what happens one year from now, given what happened today. It is nearly impossible to take into account all the changes that will occur over longer periods of time which adds to the inherent uncertainty any entity possesses. It is also very difficult to make sense of these forecasts due to the long waiting period to their due date and they often lose context as well. It is difficult to establish the causal relationships between the independent and the dependent variables for such forecasts if the experiment is ill structured without a proper randomised controlled trial and thus such forecasts have lower levels of confidence.

A simple example of this is Bloomberg's prediction of a recession in the United States which stood at about 35% in August 2019 for the next year (2020), is now at 100% - 8 months down the line. While we can justify this by the unprecedented COVID-19 outbreak, it is clear that long-horizon forecasts can severely falter in accuracy due to the wide range of uncertainties that the future poses. Even if no outlier events take place, it is important to understand that long-horizon forecasts can not possibly capture such variabilities. The only long term prediction that we can make for certain even hundreds of years down the line is that the Earth will still be revolving around the Sun - again without a 100% level of confidence! 

## The What-If Analysis

Assume that you are a [retail chain](https://www.bluepiit.com/blog/retail-analytics-why-it-is-important/) trying to set up a store in a small city. What are some of the questions that you would consider?

{% picture "{{relative_url}}/assets/images/blog/bubble1.png" --img class="blog_hero_img" --alt bubble %}
 

Similarly, the what-if [analysis](https://www.bluepiit.com/blog/retail-analytics-why-it-is-important/), also known as sensitivity analysis refers to the change in an outcome under different circumstances. Here the statistical or machine learning model is trained again and again introducing or deleting certain feature variables at each stage to analyse the effects they have on the outcome and also study the level of variability they bring into the mathematical model relationship, thus improving the performance of the model and the quality of the forecasts. It helps in simplifying the model removing any unnecessary or redundant features and also identifying unexpected relationships among the dependent variables.

In practice there are many ways to conduct what-if analyses. Some of the commonly used are: 


*    If there is a linear relationship among the dependent and independent variables, the measure of the standardized regression coefficients can be interpreted as the measure of sensitivity. 
*    If we have a function Y = f(X), the measure 
  
  $ V(EXi(Y \| X)) $

, where V denotes variance and E denotes the expected value of Y given all X except the $ ith X $, which essentially gives the variance in the expected value of Y when the X is missing, thus giving the sensitivity introduced by $ Xi $ in Y. If there is an interaction effect among the Xs however, this method fails.
*   In machine learning emulators or simpler mathematical functions which closely resemble the model function are used to calculate sensitivity. This needs a sampling design to choose data points from the input variables, a choice of the emulator - most successful ones which are heavily used are gradient boosting and random forests and finally the training of the emulator so that it resembles the main model function. 

## The What-If Tool

The What-If Tool is an open source software to analyze [machine learning](https://www.bluepiit.com/blog/machine-learning-in-supply-chain-optimization/) models developed by PAIR (People + AI Research) at Google research. It has many utilities such as - 
{% picture "{{relative_url}}/assets/images/blog/textbox.png" --img class="blog_hero_img" --alt text box %}

The ability of the What-If tool to compare multiple models within the same workflow can be very well used for time series analysis. Particularly, when it comes to long-horizon [forecasting](https://www.bluepiit.com/blog/factors-to-keep-in-mind-while-forecasting/), selecting the right amount of data is key. Intuitively, more the data, better the model learns and hence better the results. This, however, is not always true and needs to be validated. Many times the model stops improving in terms of the accuracy metric when more data is added. Since more data also means more computation time, we need to identify the point where there is no significant change in the accuracy metric (statistical t-tests can be used to establish statistical significance) with the increase in the volume of data.  

Research has also shown that selecting the right lags are important to time series [forecasting](https://www.bluepiit.com/blog/factors-to-keep-in-mind-while-forecasting/) and play a very important role when one is forecasting over a long horizon. The same ability of the What-If Tool mentioned above can be used to train multiple models parallelly against different lags to identify the right lag which neither over fits nor unfits the data. Also, deeper models such as neural networks and RNNs are proven to identify the trends and seasonality well for the time series data when rightly feature engineered. The tool also allows one to edit data points, add and remove features in a row to analyse model performance. It also automatically generates partial dependence plots which can be used to identify the sensitivity of the dependent variables. 

Lastly, this tool can allow the researcher to easily optimise the models on the basis of her need and allows easier comparison. We know that one model doesn't fit types of data well, so running multiple models simultaneously can help make the experimentation faster. Consider LSTMs for time series modeling. A research from the University of Maryland, it talks about how incorporating expectation-bias helps improve long-term forecasting problems. With this tool, comparisons between the baseline model, models with certain tweakings, models incorporated with new out of the box ideas etc. can be easily made and since the output for all will be saved, valuable time will not be lost in multiple tries of the model training. In conclusion, the What-If Tool by Google can be very useful specially for experimentation purposes, and must surely be given a try!

{% include author_arushi.html %}