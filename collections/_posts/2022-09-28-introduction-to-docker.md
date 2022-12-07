---
post_image: /assets/images/blog/docker.jpeg
layout: post
status: publish
published: true
title: Introduction to Docker
author: 
  display_name: Rohit Verma
  login: 
  email: 
  url: ''
author_login: 
author_email: 
permalink: /blog/introduction-to-docker
date: '2022-09-28 13:33:48 +0530'
date_gmt: '2022-09-28 13:33:48 +0530'
categories:
- data
tags:
- docker
comments:

---
## Container

- It is an isolated environment for running an application.
- it is a light weighted process.

## Virtual Machine

- It is an abstraction of a machine (physical machine). abstraction in the sense it has separate OS and file system.
- It uses Hypervisor.

## Docker Architecture

> Docker follows Client Server Architecture. It has mainly two parts client and Server and all the transmissions happens using Restful api.

## Dockerfile Syntax

```docker
# first line of the Dockerfile contains FROM tag (which image we'll use) 
# after the colon(:) we write OS distribution.
FROM node:alpine

# Now we copy all our files to a App directory 
COPY . ./App

# Now it depends on what of project or requirements you are working on
# if it is node application then
CMD node app.js
```

**Dockerfile can be alot more complicated than this but this is general form. How Dockerfile will look like.**

```bash
FROM, WORKDIR, COPY, ADD, RUN, ENV, EXPOSE, USER, CMD, ENTRYPOINT etc.
```

## Useful Docker Commands

 

- **To check docker version :**

```bash
docker version 
```

- **To build an image from dockerfile :**

```bash
docker build -t <tag_name> .
```

-t  → is used to give image a tag so that it will be easy to use it later.

> Note : If we don’t give a tag name then container name will be random.
> 

- **To see all the docker images :**

```bash
docker image ls
```

here is one shorthand for this :

```bash
docker images
```

- **To pull an image from Docker Hub :**

```bash
docker pull <image_name>
```

- **To run an Image :**

```bash
docker run <image_name>
```

If image is not present in the locally then this command will download it from hub and then run it.

- **To see all the running container :**

```bash
docker ps
```

This command will only show you all the running container but to see all the container :

```bash
docker ps -a
```

- **To run a container using Image in interactive mode :**

```bash
docker run -it <image_name>
```

-it  → it will map the container’s STDIN, STDOUT, STDERR to your’s Terminals so that you can interact with it.

 

- If you want to Ignore some files or directory to move into the container then use **.dockerignore** file. it is similar to .gitignore .

- **To remove images :**

```bash
docker image rm <image_name1> <image_name2>
```

- **To remove all images :**

```bash
docker rmi -f $(docker images -a -q)
```

- **To remove dangling images :**

```bash
docker image prune
```

- **To publish an image to Docker Hub :**

```bash
docker image <image_name> <repo_name>
```

```bash
docker push <repo_name>
```

- Saving and loading Image from local System **:**

```bash
docker image save -o <tar/zip file> <image_name>
```

```bash
docker image load -i <tar/zip file>
```

- To run a container in detached mode **:**

```bash
docker run -d <image_name>
```

```bash
docker run -d --name <container_name> <image_name>
```

- To see the logs of a Container **:**

```bash
docker logs <container_name>
```

- Publishing Port **:**

```bash
docker run -d -p <host_machine_port>:<docker_port> --name <container_name> <image_name>
```

- Execute a command inside a running container **:**

```bash
docker exec <container_name> <cmd>
```

- Start and Stop a container **:**

```bash
docker start <container_name>
```

```bash
docker stop <container_name>
```

- Remove a container **:**

```bash
docker rm <container_name>
```

```bash
docker rm -f <container_name>
```

- Remove all stopped container as well as Image  **:**

```bash
docker system prune
```

## Docker Volumes

> Two docker container have separate file system and don’t share files to achieve this we have to use volumes.
> 
- We can create volume by following command :

```bash
docker volume create <volume_name>
```

- To see the volumes :

```bash
docker volume inspect <volume_name>
```

```bash
docker run -d -v <volume_name>:/app/data <image_name>
```

- Copying file from container to host machine **:**

```bash
docker cp <container_path> <host_path>
```

- Map a host directory to container directory **:**

```bash
docker run -d -v $(pwd):/app <image_name>
```

## docker-compose file

docker-compose is generally used when we have multiple applications and we want to combine them then docker will take care of the networking and ports itself and we just have to write one single command and our application will be up and running.

> Example : Like we have a frontend in React and for PostgresDB and Node.js Backend and Redis for cache. In these kind of cases we used docker-compose.
> 

## Simple docker-compose.yaml

```yaml
#version should be a string (number inside the double quotes)
version : "number"

services :
		web :
			build : ./frontend
			ports :
					- 3000:3000
		api :
			build : ./backend
			ports :
				 - 3001:3001
			environment :
         - DB_URL = ""
    db :
      image : mongo:4.0-xenial
			ports :
				 - 27017:27017
			volumes : 
				 - volume : /data/db
volumes :
			name : volume
```

## Docker Stop vs Docker Kill

- Rebuild the image of docker-compose :

```bash
docker-compose up --build
```

- Create an image from container :

{% include author_harsh.html %}