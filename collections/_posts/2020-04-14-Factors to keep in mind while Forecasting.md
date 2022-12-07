---
post_image: /assets/images/blog/forecast.png
layout: post
status: publish
published: true
title: Factors to keep in mind while Forecasting
author:
  display_name: Aarushi Kapoor 
  login: 
  email: 
  url: ''
author_login: 
author_email: 
permalink: /blog/factors-to-keep-in-mind-while-forecasting/
date: '2020-04-14 13:33:48 +0530'
date_gmt: '2020-04-14 13:33:48 +0530'
meta_description: Factors to keep in mind while Forecasting
categories:
- retail
tags:
- sales forecasting
comments:

---
# Factors to keep in mind while Forecasting
{% picture "{{relative_url}}/assets/images/blog/forecast.png" --img class="blog_hero_img" --alt Forecast %}

A famous quote coined by Paul Saffo, a consultant associate professor at Stanford University who has been a technology forecaster for more than 35 years now, says that- “The goal of forecasting is not to predict the future but to tell you what you need to know to take meaningful action in the present”. One of the sole reasons for the survival of the _Homo Sapiens - the ONLY surviving human species, _is that they had the ability to prepare themselves in advance, thus safe-guarding themselves from any adverse conditions of the future. Ensuring smooth functioning in any setting - be it a simple household or a high functioning business or even the running of a country, involves [forecasting](https://www.bluepiit.com/blog/what-are-the-different-demand-forecasting-techniques) several events which are likely to happen in the future and strengthening the course of action. This probably justifies the immense research and efforts being put into improving the forecasting techniques all around the world.

A good forecast has many characteristics, the most important one being accuracy. Inaccurate forecasts can cause a lot of damage sending any system into overdrive or an undesirable inactivity. In addition to accuracy, forecasts should be up-to-date, timely, reliable and plausible. 

Broadly speaking, there are three types of forecasting techniques - 

1. **Quantitative Forecasting** - This is primarily used in the early stages of a set-up when the amount of data available is less. For example determining the [demand of a new product](https://www.bluepiit.com/blog/forecast-new-product-success-scientifically) would require this methodology since no historical data which is essential for quantitative modeling will be at hand. These techniques include market research, combined expert opinions in a panel, studying the growth of similar products in the market and simulating similar conditions for the new commodity and finally the Delphi method (a questionnaire based approach in which a series of experts are made to answer various questions whose answers determine the questions of the next questionnaire and enabling maximum sharing of information for effective forecasting amongst this group of experts). 

2. **Time Series Forecasting** - When a large amount of historical data is available, a time series analysis is a good [forecasting technique](https://www.bluepiit.com/blog/what-are-the-different-demand-forecasting-techniques) to employ. Using this analysis one can study trends, seasonalities and the randomness in the life cycle of an entity. These methods include moving averages, exponential smoothing, trend projections, ARIMA models and so on. 

{% picture "{{relative_url}}/assets/images/blog/time-series.png" --img class="blog_hero_img" --alt time series graph %}
{% picture "{{relative_url}}/assets/images/blog/formula.png" --img class="blog_hero_img" --alt formula %}

While using this methodology, it is important to use a stationary time series. Any chronologically ordered data which is centered about a constant mean,have a constant variance and be covariance stationary. In other words, the above mentioned statistics should not be a function of (or change with) time for the given time series. The following image shows non-stationarity in terms of mean, variance and covariance respectively for the plots in the red colour.
    
{% picture "{{relative_url}}/assets/images/blog/series-graph.png" --img class="blog_hero_img" --alt series graph %}

Stationarity is usually absent in real life data, so many methods are incorporated to achieve a somewhat stationary time series - because it becomes very difficult to model non-stationarity. Using logarithms or differencing techniques helps to make a time series stationary. These transformations being fairly simple, help model situations easily and help to obtain the forecasts in their original format. 

It is also a good idea to check the normality of the series and power transform to make the data normal, if required. This can help improve the performance of a time series model since normality is an underlying assumption for most statistical models. 

Another factor to take into account while using time series forecasting is the horizon for which a forecast is being generated. Short-period (&lt;= 1 year) forecasts are more accurate than long-term (5-10 years) or very long period (>10 years) forecasts. 

The level of [forecasting](https://www.bluepiit.com/blog/what-are-the-different-demand-forecasting-techniques) can also affect the nature of the forecasts. Typically there are 3 levels to be considered - the micro level, the industry level and the macro level. Consider a firm which sells shoes which has stores across India. The different levels of forecasts here can be at a store level, a city level or a state level. It is obvious that the forecasts obtained at each level will be different and will require a different level of accuracy at each level to function correctly. 

Finally, retraining of a model is crucial for every new prediction since the model needs to capture the latest changes in the behaviour of the entity for which the forecast is being generated.

3. **Causal Modeling** - This is probably the most sophisticated of the forecasting techniques that exist and they capture relationships among the variables. These techniques include regression models, econometric models, economic input-output models etc. 

While applying this technique, it is important to take care of the underlying assumptions to obtain the best forecasts. Take a simple regression analysis for example. To get accurate forecasts one must ensure normality of the independent variables. There should be no relationship amongst the dependent variables (no multicollinearity), the variables must be homoscedastic and there should be no autocorrelation present.   

{% picture "{{relative_url}}/assets/images/blog/casual-modeling.png" --img class="blog_hero_img" --alt casual modeling %}
{% picture "{{relative_url}}/assets/images/blog/formula2.png" --img class="blog_hero_img" --alt formula %}

Choosing the right type of technique is essential to improve the quality of the forecasts. 

## Uncertainty as a factor 
Harvard Business Review also talks about the ability of a forecast to capture uncertainty as an extremely important factor to keep in mind while forecasting. While considering the features of a model, a forecaster needs to take into account those variables which are somewhat improbable but not impossible to encapsulate uncertainty. 

It is first important to describe what is the level of uncertainty one wishes to capture. Suppose that a researcher is trying to forecast the sales of shoes in a particular store. The various features which can influence this directly are - the geographical area of the store (say city or village), the price range of the product (affects the type of customers it attracts), types of shoes it sells (sports or casual), capacity of the store etc. However if the forecaster wants to prepare for future shutdowns due to natural calamities or terrorist attacks which might not be very probable (but not impossible, no one imagined a complete lockdown in 2020 due to Covid-19!), she/he will have to incorporate these features in the model as well. A less extreme example of this can be to include the feature of competition this shoe store faces or include the impact of opening of new stores on the sales of an existing store. Thus it is necessary to establish the width of uncertainty the forecaster desires to include. 

## Conclusion

It is said that 70%-80% percent of the effort while modeling goes into the data preparation and cleaning stage. From the discussion above, we can clearly see how consideration of various factors can help improve the forecasts in terms of accuracy, durability and consistency. No methodology fits all, one can only find out what works best for their problem by trying and improvising as they move along!

{% include author_arushi.html %}