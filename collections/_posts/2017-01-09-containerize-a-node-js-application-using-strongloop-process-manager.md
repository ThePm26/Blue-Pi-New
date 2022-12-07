---
post_image: https://static.bluepiit.com/blog/wp-content/uploads/sites/2/2017/01/Ready-for-Cloud1.png
layout: post
status: publish
published: true
title: How to containerize a Node.js Application
author:
  display_name: gaurav
  login: gaurav
  email: gaurav@bluepi.in
  url: ''
author_login: gaurav
author_email: gaurav@bluepi.in
permalink: /blog/containerize-a-node-js-application-using-strongloop-process-manager/
date: '2017-01-09 11:11:26 +0530'
date_gmt: '2017-01-09 11:11:26 +0530'
categories:
- app-development
tags:
- app-dev
- app-development
comments: []
---
# How to containerize a Node.js Application
The rise and rise of Node.js applications is, quite simply, phenomenal! Thanks to a JavaScript-everywhere architecture, the difference between backend and frontend is no longer as evident as it used to be. From emerging startups to large enterprises, every business is trying to leverage the lightweight and lightning quick Node.js framework to build high-performance applications across numerous use cases. For those interested to drill down a bit more, here&rsquo;s an article explaining the <a href="http://www.thecrazyprogrammer.com/2016/03/top-7-reasons-node-js-popular.html">reasons why Node.js is so popular</a>.

Equally up to the task, or perhaps, even more evident, is the use of cloud! All these applications are largely built for the cloud, where one needs to minimize the dependency on OS and the environment to truly leverage the <a href="https://www.bluepiit.com/migration"> power of the cloud</a>. And that&rsquo;s where containerization technology comes to the fore, helping developers like you and me to break these apps down into binary and deploy them on cloud clusters!

One of the most commonly used tools to achieve containerization is, Docker. In a nutshell, Docker is a software (or a containerization platform), that provides an abstraction of OS-level virtualization. These <em>containers</em> contain the real operating system, the software that you build along with all dependencies to run the software in a variable environment. In this blog post, we&rsquo;ll explore how to containerize a node.js application using Docker. But before that, we need to break the app into binary &ndash; and for that very purpose, we&rsquo;ll use StrongLoop Process Manager.

If you&rsquo;re a developer, get yourself a host-machine with Docker-Engine and Docker-Compose installed. And it goes without saying, that you need a node.js application to containerize a node.js app!

While we&rsquo;re at it, let&rsquo;s take a look at some of the Docker components, since we&rsquo;ll be using some of them in the subsequent processes.

+  **Docker Daemon**: used to manage docker containers on the host it runs 
+  **Docker CLI**: used to command and communicate with the docker daemon 
+  **Docker Image Index**: a repository (public or private) for docker image. 
+  **Docker Containers**: directories containing everything-your-application 
+  **Docker Images**: snapshots of containers or base OS (e.g. Ubuntu) images 
+  **Dockerfile**: scripts automating the building process of images 

Next up, are some of the best practices. Trust me, although this looks simple enough, one step amiss and you&rsquo;ll have to run-around quite a bit!

+  Avoid installing unnecessary packages 
+  Run only one process per container 
+  Minimize the number of layers 
+  Sort multi-line arguments 

Having checked for the best practices, here&rsquo;s a quick look at some of the Dockerfile instructions we&rsquo;ll use:

+  **FROM**: Sets the base image for the subsequent instructions 
+  **MAINTAINER**: Allows to set the author field of the generated image 
+  **RUN**: Allows you to execute any command in a new layer on top of the current image 
+  **CMD**: The main purpose of CMD is to provide defaults of an existing container i.e Starting a service 
+  **LABEL**: Adds the meta data to the image 
+  **EXPOSE**: Informs docker that the container listens on specific network port at run time 
+  **ENV**: Sets the environment variable to the 
+  **ADD &amp; COPY**: Both performs the same functionality. COPY supports only basic copying of local files into container; while ADD has some features like local only tat extraction and remote URL support 
+  **ENTRYPOINT**: Allows to configure a container that run as an executable 
+  **VOLUME**: Used to expose any data storage area on host to the docker 
+  **WORKDIR**: Working directory, instead of proliferating instruction like RUN cd.. &amp;&amp; perform some function use WORKDIR to define working directory. 

And finally, we&rsquo;ve reached a point where we can install StrongLoop Process Manager and get done with the rest of the process in a breeze! So, here&rsquo;s the step-by-step process you&rsquo;ve been waiting for:

##### Installation of Strongloop process manager on docker container</h5>
+ Download and run the StrongLoop Process Manager container
curl -sSL https://strong-pm.io/docker.sh | sudo /bin/sh
 
+ Verify the Docker image
docker images
 
+ Verify the Docker container and ports
docker ps
 
{% picture "{{relative.url}}/assets/images/blog/StrongLoop.png" --img class="img-responsive blog_image_size" --alt Strong Loop %} 

**Note:** Port 8701 is the deployment port while 3001 &ndash; 3003 is the manager port.<br />
Once the Strongloop process manager is up and running, it&rsquo;s time to build the Dockerfile &ndash; this goes a long way in ensuring we don&rsquo;t run multiple complex executables.</p>

##### Building the dockerfile
+ Download code from your git repo or use code if you have it locally
+ Create a text file as Dockerfile&nbsp;# touch dockerfile
+ Edit the file in your favourite editor (We are using vi)
vi dockerfile
+ Paste the below content, save and exit

        FROM node:4-onbuild
        RUN mkdir /demo
        WORKDIR /demo
        COPY package.json /demo
        COPY server.js /demo
        RUN apt-get update &amp;&amp; apt-get install -y nodejs npm vim
        RUN npm install -g strongloop
        VOLUME /home/demo/:/demo/
        EXPOSE 3000CMD ["npm", "start"]



**Note:**We have downloaded the code from git at /home/demo/ directory and by using VOLUME parameter we are mounting it to /demo/folder of the container.
+ The dockerfile is ready. Now we'll create docker-compose.yml to build and run the container
        vi docker-compose.yml
        Paste the below content, save and exit
        version: '2'
        services:
        web:
        build:
        volumes:&nbsp;&nbsp;&nbsp; - "./home/demo/:/demo"
        ports:&nbsp;&nbsp;&nbsp; - "32769:3000"
 
+ We have the docker-compose and docker file ready, now we will build the container:
docker-compose up -d
 
+ Verify the image
ocker images
{% picture "{{relative.url}}/assets/images/blog/Docker-Compose-Output-1024x36.png" --img class="img-responsive blog_image_size" --alt Strong Loop %} 
+ Verify the container
docker ps
{% picture "{{relative.url}}/assets/images/blog/Docker-Compose-Output2-1024x30.png" --img class="img-responsive blog_image_size" --alt Strong Loop %}
+ Login into the container
docker exec &ndash;ti demoappcontainer /bin/bash
+ Go to the /demo/ and, build and deploy the binary using strongloop process manager
cd /demo/
slc build
slc deploy http://remote.host:8701
+ The application is now deployed on the docker container. Go to any browser and type
http://remote.host:3001
 
 
Remember, since you&rsquo;re using StrongLoop Process Manager container, type the container IP of the same in place of remote host.
That&rsquo;s all folks!
We&rsquo;ve successfully:

+ Familiarized ourselves with the docker environment and its components 
+ Got StrongLoop Process Manager to break your node.js application into binary 
+ Got the binaries deployed on a StrongLoop Process Manager container 
+ Saved ourselves the hassles of building a separate node.js environment just for that single, awesome app! 
 
The next time you come across an application built on node.js and you want to deploy it without worrying about OS environments, you know what to do! And now that we already have a container up and running, you may choose to deploy any other app, irrespective of the OS - on the same host!

Doesn&rsquo;t that save you a good bit of cost and all the troubles involved in building a new environment from the scratch? 

Trust us, it does!&nbsp;If you have any questions, we&rsquo;re here to answer. Just drop us a comment and we&rsquo;ll be glad to reply in double-quick time.
Until then, happy containerization!