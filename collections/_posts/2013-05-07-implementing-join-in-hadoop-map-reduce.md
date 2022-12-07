---
post_image: https://static.bluepiit.com/blog/wp-content/uploads/sites/2/2013/05/Join-Hadoop-Map-Reduce.jpg
layout: post
status: publish
published: true
title: Implementing Join in Hadoop Map-Reduce
author:
  display_name: Blue Pi
  login: yogesh
  email: yogesh@bluepi.in
  url: ''
author_login: yogesh
author_email: yogesh@bluepi.in
permalink: /blog/implementing-join-in-hadoop-map-reduce/
date: '2013-05-07 13:33:48 +0530'
date_gmt: '2013-05-07 13:33:48 +0530'
categories:
- big-data
- hadoop
tags:
- hadoop-map-reduce
- big-data-solution 
- big-data-management
comments:
- id: 31
  author: Prem Singh Bist
  author_email: prem62900@gmail.com
  author_url: ''
  date: '2014-06-19 10:44:00 +0530'
  date_gmt: '2014-06-19 05:14:00 +0530'
  content: Nice. information .. !! Thank you !!
- id: 33
  author: Pradeep Nanda
  author_email: pradeep.nanda055@gmail.com
  author_url: ''
  date: '2014-10-20 11:09:00 +0530'
  date_gmt: '2014-10-20 05:39:00 +0530'
  content: Good Explanation...Thank You..
- id: 39
  author: admin
  author_email: rajneeshty@gmail.com
  author_url: ''
  date: '2015-03-11 13:15:09 +0530'
  date_gmt: '2015-03-11 13:15:09 +0530'
  content: Your Welcome Prem.
- id: 112
  author: Samantha
  author_email: byhsaywjh@googlemail.com
  author_url: http://macanasmagazine.com/yourls/3bt
  date: '2016-07-17 08:53:56 +0530'
  date_gmt: '2016-07-17 08:53:56 +0530'
  content: Hi my name is Samantha and I just wanted to send you a quick note here
    instead of calling you. I discovered your Implementing Join in Hadoop Map-Reduce
    &laquo; Blog - BluePi Consulting website and noticed you could have a lot more
    visitors. I have found that the key to running a successful website is making
    sure the visitors you are getting are interested in your subject matter. There
    is a company that you can get keyword targeted traffic from and they let you try
    their service for free for 7 days. I managed to get over 300 targeted visitors
    to day to my website. http://www.prestonkincaid.com/link/b
- id: 141
  author: oakley radarlock sunglasses matte black black iridium online sale outlet
  author_email: plymupwr@gmail.com
  author_url: http://www.fleetsale.ru/oakley-radarlock-sunglasses-004.html
  date: '2016-07-20 07:24:13 +0530'
  date_gmt: '2016-07-20 07:24:13 +0530'
  content: "My friend\r\nThat post is very helpful,it give me much help,thank you!"
- id: 144
  author: BrainZMansel
  author_email: aishagreenwald@gmail.com
  author_url: http://www.sbgtracts.com/ActivityFeed/MyProfile/tabid/61/userId/15137/Default.aspx
  date: '2016-07-27 05:06:38 +0530'
  date_gmt: '2016-07-27 05:06:38 +0530'
  content: "I'm really impressed together with your writing skills along with with
    all \r\nthe layout on your weblog. Is that this a paid theme or would you customize
    it yourself?\r\n\r\nAnyway maintain the nice quality writing, it's rare to view
    a great blog similar to this one \r\ntoday.\r\n\r\nFeel free to surf to my web
    site - <a href=\"http://www.sbgtracts.com/ActivityFeed/MyProfile/tabid/61/userId/15137/Default.aspx\"
    rel=\"nofollow\">BrainZMansel</a>"
---
# Implementing Join in Hadoop Map-Reduce
Recently while working on a project at BluePi we encountered a situation where we needed something like a join in a Map-Reduce job running on Hadoop. In this post I am going to talk about how we can implement a Join in Hadoop Map-Reduce. There may be a lot of scenarios in real life applications where we might need to implement Joins when working on applications which rely on Hadoop's Map-Reduce framework.

## Lets define the problem statement first
There are two Data sources namely ds1 and ds2. ds1 is represented by data1.txt which contains multiple columns separated by comma. We are going to deal with just two columns (groupkey and status1)
This is how a record in data1.txt looks like
<code style="white-space: normal; color:#4512AE;">
groupkey,x1,x2,x3,x4,status1<br />
1,"some value","some value","some value","some value","Ready"<br />
</code>
ds2 is another csv datastore contained in data2.txt which also contains multiple columns separated by comma.&nbsp;we are going to deal with two coumns (groupkey and status2). A sample record would look like

<code style="white-space: normal; color:#4512AE;"><br />
groupkey,x5,x6,x7,x48,status2<br />
1,"some value","some value","some value","some value","Pending"<br />
</code>

Our aim is to get the output data source containing status1 and status2 columns corresponding to the same groupkey. Let's define various components that would allow us to achieve our objective.
We will be using a Maven project to demonstrate the code, so lets create a maven project first and add following dependecny to the pom.xml
<img class="aligncenter wp-image-1134 size-full" src="https://static.bluepiit.com/blog/wp-content/uploads/sites/2/2013/05/code-hadoop.png" alt="Implementing Join in Hadoop Map-Reduce" width="749" height="181" />
Now lets write some code, firstly we need to define a Mapper class and implement the map method inside it

<pre class="lang:java decode:1 "><code style="white-space: normal; color:#4512AE;">public class Mapper1 extends MapReduceBase implements
Mapper {
private String commonkey, status1, fileTag = "s1~";
public void map(LongWritable key, Text value,OutputCollector output, Reporter reporter) throws IOException { // taking one line/record at a time and parsing them into key value pairs String values[] = value.toString().split(","); commonkey = values[0].trim(); status1 = values[4].trim(); // sending the key value pair out of mapper output.collect(new Text(commonkey), new Text(fileTag + status1)); }
}
</code></pre>
<p>map method defined above processes data1.txt and frames the initial key value pairs Key(Text) &ndash; commonkey Value(Text) &ndash; An identifier to indicate the source of input(using s1&rsquo; for the &ldquo;file1&Prime; file) + status1<br />
Define another Mapper which does similar stuff on the other datasource namely ds2</p>
<pre class="lang:java decode:1 "><code style="white-space: normal; color:#4512AE;"
>public class Mapper2 extends MapReduceBase implements
Mapper&nbsp; {
// variables to process delivery report
private String commonkey, status2, fileTag = "s2~";
public void map(LongWritable key, Text value,OutputCollector[Text, Text] output, Reporter reporter) throws IOException { String line = value.toString(); String values[] = line.split(","); commonkey = values[3].trim(); status2 = values[23].trim(); output.collect(new Text(commonkey), new Text(fileTag + status2)); }
} </code>
</pre>
<p>Its time to implement a Reducer now,</p>
<pre class="lang:java decode:1 "> <code style="white-space: normal; color:#4512AE;"
>public class StatusReducer extends MapReduceBase implements Reducer[Text, Text, Text, Text] {
// Variables to aid the join process
private String status1, status2;
public void reduce(Text key, Iterator values,OutputCollector; output, Reporter reporter) throws IOException { while (values.hasNext()) { String currValue = values.next().toString(); String splitVals[] = currValue.split("~"); /* * identifying the record source that corresponds to a commonkey and * parses the values accordingly */ if (splitVals[0].equals("s1")) { status1 = splitVals[1] != null ? splitVals[1].trim(): "status1"; } else if (splitVals[0].equals("s2")) { // getting the file2 and using the same to obtain the Message status2 = splitVals[2] != null ? splitVals[2].trim(): "status2"; } output.collect(new Text(status1), new Text(status2)); }
}
} </code>
</pre>
<p>For running the Hadoop join we need to write a class which becomes the job runner, we need to configure various parameters like Mapper, Reducer etc in the Job Configuration in order to run it correctly, following configurations need to be set up</p>
<pre class="lang:java decode:1 "><code style="white-space: normal; color:#4512AE;"
>public class Executor extends Configured implements Tool { public int run(String[] args) throws Exception { JobConf conf = new JobConf(getConf(), Excecutor.class); conf.setJobName("SMS Reports"); // setting key value types for mapper and reducer outputs conf.setOutputKeyClass(Text.class); conf.setOutputValueClass(Text.class); // specifying the custom reducer class conf.setReducerClass(StatusReducer.class); // Specifying the input directories(@ runtime) and Mappers independently // for inputs from multiple sources MultipleInputs.addInputPath(conf, new Path(args[0]), TextInputFormat.class, Mapper1.class); MultipleInputs.addInputPath(conf, new Path(args[1]), TextInputFormat.class, Mapper2.class); // Specifying the output directory @ runtime FileOutputFormat.setOutputPath(conf, new Path(args[2])); JobClient.runJob(conf); }
}
public static void main(String[] args) throws Exception { int res = ToolRunner.run(new Configuration(), new Excecutor(),args); System.exit(res); }
} </code>
</pre>
<p>The next step is now to create a jar file, which simply could be done with following command run at the root of your directory from command line</p>
<pre class="lang:shell decode:1 "> <code style="white-space: normal; color:#4512AE;"
>mvn clean package </code>
</pre>
<p>This creates the desired jar file(lets call it mapreduce-join-example.jar) in the target folder of your project, transfer the jar to the Master Node of the Hadoop cluster. Also we need to copy the files to be processed on the HDFS before we run the job, this could be done with following command</p>
<pre class="lang:shell decode:1 "> <code style="white-space: normal; color:#4512AE;">hadoop dfs -copyFromLocal /home/ds1/data1.txt /hdfs_home/data1
hadoop dfs -copyFromLocal /home/ds2/data2.txt /hdfs_home/data2 </code>
</pre>
<p>Once files are copied we can run the jar file on Hadoop cluster using the following command</p>
<pre class="lang:shell decode:1 "> <code style="white-space: normal; color:#4512AE;"
>hadoop jar&nbsp; mapreduce-join-example.jar com.bluepi.join.Executor /hdfs_home/data1 /hdfs_home/data2 /hdfs_home/output </code>
</pre>
<p>and thats it, your output directory should contain the resultant file with desired results.<br />
&nbsp;</p>
