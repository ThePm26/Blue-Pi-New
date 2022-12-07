---
post_image: https://static.bluepiit.com/blog/wp-content/uploads/sites/2/2019/07/Asset-9.png
layout: post
status: publish
published: true
title: Introduction To Container Orchestration - Kubernetes
author:
  display_name: akashdeep
  login: akashdeep
  email: akashdeep@bluepi.in
  url: ''
author_login: akashdeep
author_email: akashdeep@bluepi.in
permalink: /blog/introduction-to-kubernetes/
date: '2019-07-24 22:45:49 +0530'
date_gmt: '2019-07-24 22:45:49 +0530'
categories:
- cloud
tags: 
- containerization
- cloud-foundry-services
- cloud-hacks-untamed
comments: []
---
# Container Orchestration - Kubernetes
 As we know how popular the Containers have become in today&rsquo;s IT world. Most of the large organizations have moved out of their traditional approach of using virtual machines and started adapting Containers for deployment.
 Kubernetes (&ldquo;koo-burr-NET-eez&rdquo;)  is the conventional pronunciation of a Greek word, meaning &ldquo;helmsman&rdquo; or &ldquo;pilot&rdquo;. Kubernetes was born on Google. It was open-sourced to CNCF in 2014. It is written in the Go language. It focuses mainly on building a robust platform to run thousands of containers in a production environment.
 Following are the list of topics covered in this article:
1. What is Kubernetes? And it&rsquo;s components 
2. Common Kubernetes alternatives and their pros and cons
3. Important Features of kubernetes
4. Ways to Deploy Kubernetes on your own
5. Managed Kubernetes services

## What Is Kubernetes? And it&rsquo;s components

Kubernetes (k8s) is an open-source orchestration system for Docker containers. It allows the user to manage containerized applications in a clustered environment. It simplifies DevOps activities such as deployment, configuration, scaling, versioning, and rolling updates. Most of the distributed applications built with scalability in mind are usually made up of smaller chunks of services called microservices and are deployed and run through a container.
<img src="https://static.bluepiit.com/blog/wp-content/uploads/sites/2/2019/07/Kubernetes.jpg" alt="Kubernetes Introduction" width="793" height="573" class="alignleft size-full wp-image-3784 blog_image_size" /><br />
 
<i> Courtesy: Google.com, Kubernetes Architecture Overview </i>
As shown in the diagram, the different components of kubernetes are briefed out as follows: 
<ul>
<li> Master Node(s): This machine is the controller from which the user can deploy Kubernetes pods. Pods are a set of containers that can be hosted across multiple worker nodes. </li>
<li> Pods: These actually run one or more containerized applications that are very unique and dependent on each other. </li>
<li> Worker Nodes: These machines give an environment where kubernetes can run the pods. </li>
<li> etcd: This is a key-value store used for configuration data and holds a master state information. </li>
<li> Scheduler: This service chooses appropriate nodes for unscheduled pods. </li>
<li> API Server: This service gives RESTful Kubernetes API used to update the etcd database. It validates all user incoming requests before updating etcd. </li>
<li> Controller Manager: This service takes care of all other services &ndash; discovering and managing nodes, routing the user requests, monitoring pods, etc. </li>
<li> Kubelet: This service deploys pods on the node based on the directions given by the API Server on the master. This manages the pods and performs their periodic health checks. </li>
<li> Kube-Proxy: This implements service abstraction by providing TCP and UDP port forwarding potential across a set of backend ports. </li>
<li> Kubectl: This is a command-line interface, allows the user to run commands against Kubernetes clusters. </li>
</ul>

**Common Kubernetes alternatives and their pros and cons**
 The list of popular kubernetes alternatives as follows: 
**Red Hat Openshift:**
It&rsquo;s an open-source platform as a service (PaaS) provided by Red Hat that allows organizations and respective individuals to deploy web applications on the cloud. This means that OpenShift gives the hardware and the development tools, as well as Internet access, which helps web developers to concentrate only on building and supporting their applications.
**Pros:**
 Very easy to set up and use, applications can be scaled as needed, reliable service given by an industry leader has a significant user base
**Cons:**
Poor customer support, free plan very limited for most common types of applications, costly in comparison to kubernetes which in turns free. 
**Red Hat Openshift:**
It&rsquo;s an open-source platform as a service (PaaS) provided by Red Hat that allows organizations and respective individuals to deploy web applications on the cloud. This means that OpenShift gives the hardware and the development tools, as well as Internet access, which helps web developers to concentrate only on building and supporting their applications.
**Pros:**
 Very easy to set up and use, applications can be scaled as needed, reliable service given by an industry leader has a significant user base
**Cons:**
 Poor customer support, free plan very limited for most common types of applications, costly in comparison to kubernetes which in turns free. 
**Docker Swarm:**
 It has been an open-source standard for packaging and distributing containerized applications. Especially, it is native clustering for Docker. A collection of Docker hosts can be turned into a single virtual host.
**Pros:**
 The simplicity and fast speed of exploration: if a user has already worked with Docker containers, understanding and learning how to use the Swarm mode is not a difficult task. 
**Cons:**
 Narrow functionality, not so best in the sense of fault tolerance as kubernetes, and if users are not worked in Docker, he/she will still have to learn a bit. 
**Rancher:**
 This is a kind of step to the ease of development due to the high-quality web interface. Rancher makes it easy to manage and build complex environments. It can manage the containers by themselves or use other managers. 
**Pros:**
 The undoubted advantage is the availability of the catalog of ready-to-run services and applications. Rancher also has a clear web interface and the ability to launch quickly other orchestrating solutions such as Kubernetes. 
**Cons:**
 Still, Rancher is not an easy-to-use platform. To deploy user's own applications with it, at a minimum, users must be able to create Docker images, which means that they have a certain technology entry limit. 
**Important Features Of Kubernetes**
 Kubernetes is a free and stable powerful tool which supports to manage containers and combines infinite scalability and automation. 
 Let&rsquo;s talk about Kubernetes features.
 
<ul>
<ol> 1. Automatic Bin Packing </ol>
 Kubernetes automatically packages the application and schedules the containers based on user requirements and available resources while not compromising availability. To secure complete utilization and save unused resources, Kubernetes maintains equilibrium between critical and best-effort workloads.
<ol> 2. Service Discovery & Load balancing </ol>
 With Kubernetes, there is no need to bother much about networking and communication because Kubernetes will be able to automatically assign IP addresses to containers and a single DNS name for a group of containers, that can load-balance traffic within the cluster.
<ol> 3. Storage Orchestration </ol>
 With Kubernetes, the user can mount the storage system of their choice. Users can either choose for local storage, or opt a public cloud provider such as Azure or GCP or AWS, or maybe use a shared network storage system such as NFS, iSCSI, etc. 
<ol> 4. Self-Healing </ol>
 Kubernetes can automatically restart containers that fail during execution and kills those containers that don&rsquo;t respond to user predefined health checks. But if nodes itself die, then it replaces and redeploys those failed pods/containers on other available nodes.
<ol> 5. Secret & Configuration Management </ol>
 Kubernetes can help the user to deploy and update secrets and application configuration without recreating their image and without exposing critical information in their stack configuration. 
<ol> 6. Batch Execution </ol>
 Kubernetes can also manage user batch and CI workloads, thus replacing containers that fail, if desired. 
<ol> 7. Horizontal Scaling </ol>
 Kubernetes needs only 1 command to scale out the containers, or to scale in when using the CLI. Else, scaling can also be done via the kubernetes UI Dashboard. 
<ol> 8. Automatic Rollbacks & Rollouts </ol>
 Kubernetes drastically rolls out changes and updates to the user application or its configuration, by making sure that not all instances are worked at the same instance. Even if something goes wrong, Kubernetes will rollback the changes. 
<b> Ways to deploy kubernetes on your own </b>
 The different ways to adapt and deploy kubernetes cluster as follows: 
<ol> 1. KOPS: </ol>
 kops helps users to create, upgrade, destroy, and maintain production-grade, highly available, kubernetes cluster from the command line. AWS (Amazon Web Services) is presently officially supported, with GCE in beta support, and VMware vSphere in alpha and other platforms planned in the future. 
<ol> 2. Kubespray: </ol>
 Incubated as a community project with 90+ contributors, Kubespray was designed to host Kubernetes clusters either in the cloud or on-premises. It supports deployments on AWS, Microsoft Azure, Google Compute Engine, OpenStack, and bare metal 
<ol> 3. Kubeadm: </ol>
 kubeadm was designed to simplify Kubernetes installation and bootstrapping of cluster add-ons. When announcing kubeadm in September 2016, the Kubernetes team stressed that the tool wouldn&rsquo;t be engaged in the provisioning of virtual machines&mdash;which is one of the three major stages in setting up a Kubernetes cluster. Regarding that the tool has no infrastructure dependencies, kubeadm seems to be a good choice for Kubernetes bare-metal installations or as a complement to any other tooling a user may employ during a manual setup. 
<ol> 4. Minikube: </ol>
 Minikube can run on Windows and macOS because it relies on virtualization (e.g. Virtualbox) to deploy a kubernetes cluster in a Linux VM. Users can also run minikube directly on Linux with or without virtualization. It also has some developer-friendly features, like add-ons.<br />
Minikube is currently limited to a single-node Kubernetes cluster.
<ol> 5. Microk8s: </ol>
 Microk8s is similar to minikube in that it spins up a single-node Kubernetes cluster with its own set of add-ons. Like minikube, microk8s is limited to a single-node Kubernetes cluster, with the added limitation of only running on Linux and only on Linux where the snap is installed. 
<ol> 6. K3s: </ol>
 K3s runs on any Linux distribution without any additional external dependencies or tools. It is marketed by Rancher as a lightweight Kubernetes offering suitable for edge environments, IoT devices, CI pipelines, and even ARM devices, like Raspberry Pi's. K3s achieves its lightweight goal by stripping a bunch of features out of the Kubernetes binaries (e.g. legacy, alpha, and cloud-provider-specific features), replacing docker with containers, and using sqlite3 as the default DB (instead of etcd). As a result, this lightweight Kubernetes only consumes 512 MB of RAM and 200 MB of disk space. K3s has some nice features, like Helm Chart support out-of-the-box. 
<ol> 7. Kind: </ol>
 Kind (Kubernetes-in-Docker), as the name implies, runs Kubernetes clusters in Docker containers. This is the official tool used by Kubernetes maintainers for Kubernetes v1.11+ conformance testing. It supports multi-node clusters as well as HA clusters. Because it runs K8s in Docker, kind can run on Windows, Mac, and Linux. 
<b> Managed Kubernetes Services </b>
 The important managed kubernetes services as follows: 
<ol> 1. AWS EKS: </ol>
 availability zones to avoid a single point of failure. Amazon EKS is offered by AWS, which is a certified Kubernetes conformant so the user can use existing tooling and plugins from partners and the Kubernetes community. Applications running on any standard Kubernetes environment are fully compatible and can be easily migrated to Amazon EKS. 
<ol> 2. Google GKE: </ol>
 Google Container Engine (GKE) provides a platform to deploy user apps in the public cloud. GKE is offered by Google, which is also the pioneer of container orchestration through the Borg Project and leads other public cloud vendors. 
<ol> 3. Azure AKS: </ol>
 The fully managed Azure Kubernetes Service (AKS) makes deploying and managing containerized applications pilot easy. AKS is managed by Microsoft, which offers serverless kubernetes, an integrated continuous integration, and continuous delivery and enterprise-level security and governance. Unite users development and operations teams on a single platform to faster build, deliver and scale applications with confidence. 
<ol> 4. Alibaba ACK: </ol>
 Container Service for Kubernetes (ACK) is Kubernetes Certified Service Provider（KCSP）and qualified by Certified Kubernetes Conformance Program. ACK is offered by Alibaba, which provides kubernetes consistent experience, workload portability. Integrates Alibaba Cloud capabilities in virtualization, storage, network, and security, providing an optimized running environment for Kubernetes containerized applications. 
<ol> 5. IBM Kubernetes: </ol>
 IBM Cloud Kubernetes Service helps to create a cluster of compute hosts and deploys highly available containers. A Kubernetes cluster allows the user to securely manage the resources that they need to quickly deploy, update, and scale applications.
