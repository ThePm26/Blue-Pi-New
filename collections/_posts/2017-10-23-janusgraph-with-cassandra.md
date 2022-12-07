---
post_image: https://static.bluepiit.com/blog/wp-content/uploads/sites/2/2017/10/Blog-Janus-Graph.jpg
layout: post
status: publish
published: true
title: JanusGraph with Cassandra
author:
  display_name: Blue Pi
  login: yogesh
  email: yogesh@bluepi.in
  url: ''
author_login: yogesh
author_email: yogesh@bluepi.in
permalink: /blog/janusgraph-with-cassandra/

date: '2017-10-23 07:03:50 +0530'
date_gmt: '2017-10-23 07:03:50 +0530'
categories:
- database
tags:
- database performance
- gremlin
comments: []
---
# JanusGraph with Cassandra
<p>JanusGraph is a Graph Database. First of all, let&rsquo;s see what is Graph Database.</p>
<h5>Graph Database:</h5>
<p>In computing, a graph database is a database that uses graph structures for semantic queries
with nodes, edges, and properties to represent and store data. A key concept of the system is the
graph (edge/relationship), which directly relates data items in the store. The relationships allow data
in the store to be linked together directly, and in many cases retrieved with one operation.</p>
<h5>Brief Description:</h5>
<p>The Graph databases are based on the graph theory and employ nodes, edges, and properties.</p>
<ul>
<li><strong>Nodes </strong>represent entities such as people, businesses, accounts, or any other item to be
tracked. They are roughly similar to the record, relation, or row in a relational database, or
the document in a document database.</li>
<li><strong>Edges</strong>, alias graphs or relationships, are the lines that connect nodes to other nodes; they represent the relationship between them. Meaningful patterns emerge when examining the
connections and interconnections of nodes, properties, and edges. Edges are the main
concept in graph databases, representing an abstraction which is not directly implemented in
other systems.</li>
<li><strong>Properties </strong>are germane information that relates to nodes. For example, if BluePi were one
of the nodes, it might be tied to properties such as website, reference material, or word that
starts with the letter b, depending on which aspects of BluePi are germane to a given
database.</li>
</ul>
<h4>One of the Advantages of Graph Database over Relational Database</h4>
<p>The relational model gathers data together using information in the data. For example, one
might look for all the "users" whose phone number contains the area code "311". This would be
done by searching selected datastores, or tables, looking in the selected phone number fields for the
string "311". This is a time-consuming process in large tables, so relational databases offer the
concept of a database index, which allows data like this to be stored in a smaller sub-table,
containing only the selected data and unique key of the record it is part of. If the phone numbers are
indexed, the same search would occur in the smaller index table, gathering the keys of matching
records, and then looking in the main data table for the records with those keys. Generally, the
tables are physically stored so that lookups on these keys are fast.</p>
<p>In contrast, graph databases directly store the relationships between records. Instead of an
email address being found by looking up its user's key in the user PC column, the user record has a
pointer directly to the email address record. That is, after selecting a user, the pointer can be
followed directly to the email records, there is no need to search the email table to find the matching
records. This can eliminate the costly join operations. For example, if one searches for all of the
email addresses for users in area code "311", the engine would first perform a conventional search
to find the users in "311", but then retrieve the email addresses by following the links found in those
records. A relational database would first find all the users in "311", extract a list of the pk's,
perform another search for any records in the email table with those pk's, and link the matching
records together. For this kind of common operations, a graph database is significantly faster.</p>
<h5>List of graph databases</h5>
<p>The following is a list of major graph databases:<br />
AllegroGraph, ArangoDB, Blazegraph, Cayley, Dgraph, DataStax Enterprise Graph, Sparksee, GraphBase, gStore, InfiniteGraph, JanusGraph, MarkLogic, Neo4j, OpenLink Virtuoso, Oracle Spatial and Graph, OrientDB, SAP HANA, Sqrrl Enterprise, Teradata Aster, Microsoft SQL Server 2017.</p>
<h5>The Benefits of JanusGraph</h5>
<ol>
<li style="list-style:circle;">Support for very large graphs. JanusGraph graphs scale with the number of machines in the cluster.</li>
<li style="list-style:circle;"> Support for very many concurrent transactions and operational graph processing.</li> <br>
<p>JanusGraph&rsquo;s transactional capacity scales with the number of machines in the cluster and
answers complex traversal queries on huge graphs in milliseconds.</p>
<li style="list-style:circle;"> Support for global graph analytics and batch graph processing through the Hadoop framework.</li>
<li style="list-style:circle;"> Support for geo, numeric range, and full-text search for vertices and edges on very large graphs.</li>
<li style="list-style:circle;"> Native support for the popular property graph data model exposed by TinkerPop.</li>
<li style="list-style:circle;"> Native support for Gremlin, the graph traversal language.</li>
<li style="list-style:circle;"> Effortless integration with Gremlin graph server for programming language connectivity.</li>
<li style="list-style:circle;"> Numerous graph-level configurations provide knobs for tuning performance.</li>
<li style="list-style:circle;">Vertex-centric indices provide vertex-level querying to alleviate issues with the infamous supernode problem.</li>
<li style="list-style:circle;"> Provides an optimized disk representation to allow for efficient use of storage and speed of access.</li>
<li style="list-style:circle;"> Open source under the liberal Apache 2 license.</li>
</ol>
<h4>Benefits of JanusGraph with Cassandra</h4>
<ol>
<li style="list-style:circle;"> Continuously available with no single point of failure.</li>
<li style="list-style:circle;"> No read/write bottlenecks to the graph as there is no master/slave architecture.</li>
<li style="list-style:circle;"> Elastic scalability allows for introducing and removing machines.</li>
<li style="list-style:circle;"> Caching layer makes sure that continuously accessed data is available in the memory.</li>
<li style="list-style:circle;"> Increase the size of the cache by adding more machines to the cluster.</li>
<li style="list-style:circle;"> Integration with Hadoop.</li>
<li style="list-style:circle;"> Open source under the liberal Apache 2 license.</li>
</ol>
<p><br><br />
<h5>Using JanusGraph and Relational Database</h5>
<p>A relational database is based on a relational model of data. All relational databases use <a href="https://www.bluepiit.com/blog/sql-server-vs-mysql-case-study/"> SQL (Structured Query Language)</a> for querying and maintaining the database.<br />
This model organizes the data into one/more tables of columns and rows, with a unique key identifying each row. Rows are also called records/tuples. Columns are also known as attributes. Generally, each table/relation represents one &lsquo;entity type&rsquo; (for example user or item). The rows represent instances of that type of entity (for example &lsquo;John&rsquo; or &lsquo;mobile&rsquo;) and the columns representing values attributed to that instance (for example &lsquo;address&rsquo; or &lsquo;price&rsquo;).</p>
<p>One can use both relational database and graph database in an application depending on the project requirement. If there is a requirement of creating relations between the users, with all the data stored in the relational database with a unique key (for example userId) for every user, it is difficult to store the relations between the users in a relational database. In this case, both relational and graph databases can be used. Creating the vertices with unique property (userId) and creating edges between these vertices (relations between users) solves the issue of storing relations between users.</p>
<p>In this way, one can use both relational and graph database in a single project/application.<br />
Now let&rsquo;s see how to configure JanusGraph with Cassandra</p>
<h5>Prerequisites:</h5>
<ul>
<li>Download and Install Java 8 <a href="https://www.oracle.com/technetwork/java/javase/downloads/index.html" target="_blank" rel="noopener noreferrer">https://www.oracle.com/technetwork/java/javase/downloads/index.html</a></li>
<li>JanusGraph&rsquo;s shell scripts expect that the $JAVA_HOME environment variable points to the directory where JRE or JDK is installed.</li>
<li>Download and Install Cassandra <a href="https://cassandra.apache.org/doc/latest/getting_started/installing.html" target="_blank" rel="noopener noreferrer">https://cassandra.apache.org/doc/latest/getting_started/installing.html</a></li>
</ul>
<h5>Getting started with JanusGraph</h5>
<p>Step 1: Download JanusGraph from <a href="https://github.com/JanusGraph/janusgraph/releases" target="_blank" rel="noopener noreferrer">https://github.com/JanusGraph/janusgraph/releases</a><br />
Step 2: Unzip the zip file that was downloaded.<br />
Step 3: Configure JanusGraph to use cassandra for data storage</p>
<ul>
<li>Open /conf/janusgraph-cassandra.properties file.</li>
<li>Set the below values and save the file.</li>
</ul>
<pre><code  style="white-space: normal; color:#4512AE;" data-language="shell" >
storage.backend=cassandrathrift
storage.username=[cassandra username]
storage.password=[cassandra password]
storage.cassandra.keyspace=[keyspace name, default is janusgraph]
storage.hostname=[machine&rsquo;s ip where cassandra is running]
</code></pre>
<p>Step 4: Now, run gremlin.sh file inside the bin folder. If everything goes right, gremlin console should appear.<br />
Step 5: Load janusgraph with the properties file which is saved earlier by running below command</p>
<pre><code  style="white-space: normal; color:#4512AE;" data-language="shell">
graph=JanusGraphFactory.open('conf/janusgraph-cassandra.properties');
</code></pre>
<p>Now janusgraph is created.</p>
<h4>Creating a vertex</h4>
<pre><code style="white-space: normal; color:#4512AE;" data-language="shell">
mgmt = graph.openManagement();
person = mgmt.makeVertexLabel('person').make();
mgmt.commit()
// Create a labeled vertex
v = graph.addVertex(label, 'person');
// Create an unlabeled vertex
v = graph.addVertex();
graph.tx().commit();
</code></pre>
<p>&nbsp;</p>
<h5>Creating a labeled vertex with property</h5>
<pre><code style="white-space: normal; color:#4512AE;" data-language="shell">
person = graph.addVertex(label, 'person');
person.property(&lsquo;personId&rsquo;, 1);
graph.tx().commit();
</code></pre>
<p>&nbsp;</p>
<h5>Creating a labled edge</h5>
<pre><code style="white-space: normal; color:#4512AE;" data-language="shell">
mgmt.makeEdgeLabel('edgeLable').make();
</code></pre>
<p>&nbsp;</p>
<h5>Creating an edge between 2 vertices</h5>
<pre><code style="white-space: normal; color:#4512AE;" data-language="shell">
//First create 2 vertices
user1=graph.addVertex('person');
user2=graph.addVertex('person');
// adding edge
user1.addEdge('edgeLable', user2);
</code></pre>
<p>&nbsp;</p>
<h5>To display all the vertices</h5>
<pre><code style="white-space: normal; color:#4512AE;" data-language="shell">
graph.traversal().V();
//to display personIds
graph.traversal().V().values("personId");
</code></pre>
<p>&nbsp;</p>
<h5>To display all the edges</h5>
<pre><code style="white-space: normal; color:#4512AE;" data-language="shell">
graph.traversal().E();
</code></pre>
<p>&nbsp;</p>
<h5>Now, let&rsquo;s see how to load graph and create vertices, edges from java</h5>
<p>Below java method illustrates how to load graph and create vertices and edges</p>
<pre><code style="white-space: normal; color:#4512AE;" data-language="java">
import org.janusgraph.core.JanusGraph;
import org.janusgraph.core.JanusGraphFactory;
import org.janusgraph.core.JanusGraphTransaction;
import org.apache.tinkerpop.gremlin.structure.Edge;
import org.apache.tinkerpop.gremlin.structure.T;
import org.apache.tinkerpop.gremlin.structure.Vertex;
public class GraphFactory{
public void createVertexAndEdge(){	//First configure the graph	JanusGraphFactory.Builder config = JanusGraphFactory.build(); config.set("storage.backend", &ldquo;cassandrathrift&rdquo;); config.set("storage.hostname", &ldquo;13.126.71.131&rdquo;);	//ip address where cassandra is installed config.set("storage.username", &ldquo;cassandra&rdquo;); config.set("storage.password", &ldquo;cassandra&rdquo;); config.set("storage.port", &ldquo;9160&rdquo;); config.set("storage.cassandra.keyspace", &ldquo;testing&rdquo;);	//Get the instance of graph	JanusGraph graph = config.open();	//Open a transaction	JanusGraphTransaction tx = graph.newTransaction();	//Create vertex with label	Vertex v1 = tx.addVertex(T.label, "user");	//Add property to the vertex	v1.property("userId", 1);	Vertex v2 = tx.addVertex(T.label, "user");	v2.property("userId", 2);	//Create edge between 2 vertices	Edge edge = v1.addEdge("edgeLable", v2);	//Finally commit the transaction	tx.commit();	}
}
</code></pre>
<p>Below are the screenshots for creating vertices and edges on gremlin console</p>
<div class="col-md-12" style="margin-top: 10px; margin-bottom: 10px;"><img class="img-resposive center-block" src="https://dhh0yoio3ikfv.cloudfront.net/blog/wp-content/uploads/sites/2/2017/10/1.jpg" width="100%" /></div>
<div class="col-md-12" style="margin-top: 10px; margin-bottom: 10px;"><img class="img-resposive center-block" src="https://dhh0yoio3ikfv.cloudfront.net/blog/wp-content/uploads/sites/2/2017/10/2.jpg" width="100%" /></div>