---
post_image: https://static.bluepiit.com/blog/wp-content/uploads/sites/2/2018/10/AWS-Media-Services.png
layout: post
status: publish
published: true
title: MEDIA SERVICES ON AWS
author:
  display_name: Blue Pi
  login: yogesh
  email: yogesh@bluepi.in
  url: ''
author_login: yogesh
author_email: yogesh@bluepi.in
permalink: /blog/media-services-aws/
date: '2018-10-12 10:24:09 +0530'
date_gmt: '2018-10-12 10:24:09 +0530'
categories:
- cloud 
- video
- aws-media-mela
- video-on-demand
- media-entertainment
tags:
- cloud services 
- video
- flash
comments: []
---
# Media Services on AWS
<p> With the huge increase in the demand of the digital media and growth of internet industry, Be it a Television content or OTT content, cost-effectiveness, broadcast latency, encoding, transcoding, packaging, delivery and monetizing the channel are the major areas of concern of all the broadcasting providers. While latency drastically impacts the user experience since sometimes it becomes really frustrating for the user when there are delays due to such latency hence directly impacting the revenue, cost also needs to be in checked.</p>
<p> AWS offers a variety of services such as, Media live, Media Package, Media Store, Media tailor, CloudFront and Elastic transcoder which are specifically programmed keeping in view the challenges being faced while delivery of content for live streaming. Apart from the boom of social media, there are other factors as well which has to lead to adoption the given AWS services. The old flash based applications using RTMP stream are slowly fading away and leading CDNs are moving away from RTMP slowly with the adoption of HTML5 friendly streaming technologies such as HLV, MPEG Dash and more recently CMAF. Content providers are developing broadcasting services with interactive features where such delay in latency stands no place. For the leading social media platforms, live TV channel, synchronized screens, they need to control the latency on a fine-grained level. </p>
<p> From a cost perspective, this blog mainly covers the cost of the production of the content, the platform on which it will be watched for encoding, packaging, delivery and we will also be focusing on how we can monetize the channel using media tailor. For arriving onto the cost of the above mentioned, we need to figure out the approximate audience size on the basis of the trend data, the quality on which the audience will be watching the videos, the amount of devices for which the video will be transcoded and the cache/hit ratio which we can determine through CloudFront.</p>
<p><b> Media convert </b> allows you to create the video on demand which converts input video into multiple output formats which can be supported by various devices on different resolutions. Right video processing settings are the only thing to worry about on the basis of which you get the output formats while creating jobs. It not only converts the input file in the output content of your choice but also provides graphics overlays, content protection, multi-lingual audio, closed captioning support which helps in enriching user experience. Media live supports a wide range of inputs and provides multiple outputs formats for delivery over the internet. The various input formats supported by media services are MPEG2, AVC, Apple ProRes, HEVC compression standards and different packaging formats like Dash ISO, Apple HLS, CMAF, Microsoft smooth streaming etc.</p>
<p> While media convert works on the video on demand content,<b> Media live</b> provides live video processing service for delivery to broadcast televisions and internet-connected devices such as mobiles, setup boxes, TVs etc. Media convert encodes the live video streams in real time, compress the large size videos into smaller versions for viewers. For setting up the media convert, output group configurations are to be filled on the basis of the kind of output required by the broadcaster. While, the provisioning of the infrastructure, scaling and high availability is managed by AWS. Media life accepts the ingestion of videos in RTP, RTMP, and HLS while provides output in UDP, HLS, Microsoft Smooth, and RTMP/RTMPS. </p>
<p> Furthermore, The content needs to be securely packaged and to be originated for all input streams and send the viewers the packaged and customized content to the end users for the delivery in the format that is compatible with the device applying DRM standards which can be done using <b> AWS media package</b>.</p>
<p> <b>MediaTailor</b> is an important and commercial aspect of the media services being offered by AWS which lets video providers inserts individually targeted advertising onto the video stream without sacrificing the quality level of the video streams. AWS Elemental MediaTailor delivers automated reporting based on both client and server-side and delivery metrics, making it easy to accurately measure ad impressions and viewer behavior. You can easily monetize unexpected high-demand viewing events with no up-front costs using AWS Elemental MediaTailor. It passes the client information request to the Ad decision server and Ad decision server responds to the request with personalized ad basis on client information.
<p> Below is the complete workflow of how AWS Elemental media service works together for broadcasting raw media:</p>
<p><br><br />
<img class="blog_image_size" src="https://static.bluepiit.com/blog/wp-content/uploads/sites/2/2018/10/Untitled.png" alt="AWS Elemental media service workflow" height="132" width="742"><br />
<br></p>
<p><b>Workflow for ingesting RTMP stream, compression, packaging and transmitting the content to the station.</b></p>
<p> BluePi has also helped its customers delivering video on demand for the repetitive content, creating the channel playlist, inserting the channel logo etc. the below workflow shows how broadcasting can be done using media services at the minimal possible cost. </p>
<p><br><br />
<img class="blog_image_size" src="https://static.bluepiit.com/blog/wp-content/uploads/sites/2/2018/10/2.png" alt="Broadcasting workflow" height="132" width="742"><br />
<br></p>
<p> The setting up media services one need to understand the complete configurations of all the components listed above, A user must possess required access to the media service one wishes to use and should have the access to EC2 systems manager parameter store to store any sensitive information. </p>
<p> A trusted entity role is created in Media live that includes EC2 systems manager parameter as well. To reduce the latency, high performance and consistent live streaming we recommend using media store and a VPC across two availability zones for high availability. Once the initial setup is done, ingest the RTMP stream to AWS media live for encoding, create a channel and attach the input source for transcoding and packaging the input into specific output using media package. One can use a lambda function to push the transcoded video into the S3 bucket as well. For preventing unauthorized access to the environment, create an input security group which allows only the authorized users to push the content to the channel and associate a channel with the input and input with input security group. The last step is to add the output stream to a channel which will push the output stream to transmission POP location with the given bit rate and resolution. For monitoring the channel, we can use cloudwatch for monitoring logs and events. </p>
