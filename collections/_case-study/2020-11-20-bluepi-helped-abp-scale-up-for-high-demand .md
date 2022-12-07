---
post_image: /assets/images/new/abp.png 
layout: post 
status: publish 
published: true 
title: BluePi helped abp scale up for high demand 
permalink: /case-study/bluepi-helped-abp-scale-up-for-high-demand
redirect_from : /case-study/bluepi-helped-abp-scale-up-for-high-demand
date: '2020-11-25 00:12:49 +0530' 
date_gmt: '2020-11-25 00:12:49 +0530' 
categories: Retail


---
<div class="row"> 
<div class="col-lg-4">
     <div class="top-class-detail">
        <div class="row align-item-center">
           <div class="col-lg-12">
             <div class="case_top_box">
               <h3 style="color:#007bff;">Industry </h3>
               <p>Media</p>
              </div>
            </div>
            <div class="col-lg-12">
             <div class="case_top_box">
               <h3 style="color:#007bff;">Challenges</h3>
               <p>Scale up for high
demand</p>
              </div>
            </div>
            <div class="col-lg-12">
             <div class="case_top_box">
               <h3 style="color:#007bff;">Solution</h3>
               <p>Modernize the application stack
onto a serverless architecture.</p>
              </div>
            </div>
            <div class="col-lg-12">
             <div class="case_top_box">
               <h3 style="color:#007bff;"> Technology </h3>
               <p>AWS API Gateway, AWS Lambda, AWS Dynamodb, AWS CloudWatch, AWS SNS</p>
              </div>
            </div>
         </div>
      </div>
    </div>
<div class="col-lg-8" markdown="1">

### Challenge

ABP Live is one of the largest online news publishing platforms,
with more than 6 languages including 5 different Indian vernacular
languages. The combined readership is more than 500 million page
views per month.
During special occasions the readership jumps many fold, as a lot of

people flock to ABP network sites due to its credibility and propen-
sity to break the news first. For example on a typical boards result

day the expected readerships spikes way beyond the regular traffic.
This time around ABP team was expecting a huge spike of around 1
million requests per minute.
The spike was expected based on the previous year trends and also
due to the new interactive features that were going live. For a high
volume, short duration burst like this the idea was to implement a
mechanism that would not only work this time around, but also
would scale automatically whenever there is such a need in the
future as well.

### Solution
The solution that suits this type of requirement very well, is to
modernize the application stack onto a serverless architecture.
With AWS great services like DynamoDB and API gateways, the
team achieved a serverless implementation in record time.
Well a picture is worth a thousand words, this is how we achieved
it:
{% picture "{{relative_url}}/assets/images/solution.png" --img class="blog_hero_img" --alt solution architecture %}

### Business value delivered
Since going live with the serverless architecture a couple of result campaigns
have already run successfully. The peak load for these result campaigns was
around 2.08 million concurrent requests. Not only did the infrastructure scale
successfully to maintain a 100% up time, but the cherry on the top is that the
total spend was around 15$ for each of the campaigns. Earlier for the same
campaigns ABP team was spending around 530$ per campaign.

**Some of the highlights**
- Cost benefits as we saved approx $530 per campaign.
- Short lived high spikes executed without any incident.
- Unparallel scalability and fault tolerance.
- Savings in term of maintenance and support as there is no need to provision
or maintain any servers, neither any software or runtime to install/maintain
- Increased agility in development and testing out new ideas while significantly
lowering total cost of ownership (TCO)

### Technology deployed

AWS services were critical in getting the serverless architecture in place in such
a short time. The AWS services we used in this particular case are:
- AWS API Gateway
- AWS Lambda
- AWS Dynamodb
- AWS CloudWatch
- AWS SNS
</div>
</div>