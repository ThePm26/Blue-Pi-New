---
post_image: https://static.bluepiit.com/blog/wp-content/uploads/sites/2/2015/10/udp-setup.png
layout: post
status: publish
published: true
title: Tsunami UDP Protocol &ndash; Installation, Setup and Limitations
author:
  display_name: gaurav
  login: gaurav
  email: gaurav@bluepi.in
  url: ''
author_login: gaurav
author_email: gaurav@bluepi.in
permalink: /blog/tsunami-udp-protocol-installation-setup-and-limitations/
date: '2015-10-13 11:24:47 +0530'
date_gmt: '2015-10-13 11:24:47 +0530'
categories:
- app-development
tags: 
- app-dev
comments:
- id: 43
  author: pronam
  author_email: pronam@gmail.com
  author_url: ''
  date: '2015-10-13 11:34:00 +0530'
  date_gmt: '2015-10-13 11:34:00 +0530'
  content: 'Great post! '
- id: 44
  author: Tsunami UDP Protocol &ndash; Installation, Setup and Limitations | BluePi
    Consulting
  author_email: ''
  author_url: https://bluepiit.wordpress.com/2015/10/16/tsunami-udp-protocol-installation-setup-and-limitations/
  date: '2015-10-16 10:08:29 +0530'
  date_gmt: '2015-10-16 10:08:29 +0530'
  content: "[&#8230;] Tsunami UDP installation is pretty straight forward, the current
    version of the source code can be found from their sourceforge website. We can
    CVS checkout the current version with following command [&#8230;]"
- id: 120
  author: Tessie
  author_email: p7lz5mkose@outlook.com
  author_url: http://jqmbenvjv.com
  date: '2016-07-18 18:48:40 +0530'
  date_gmt: '2016-07-18 18:48:40 +0530'
  content: Olen kokeillut kookos&Atilde;&para;ljy&Atilde;&curren; kasvovoiteena niin
    ett&Atilde;&curren; iltaisin olen laittanut. Lopetin aika &Atilde;&curren;kki&Atilde;&curren;
    kun kasvot alkoivat kuivua ihan &Atilde;&curren;lytt&Atilde;&para;m&Atilde;&curren;sti,
    en tied&Atilde;&curren; oliko syyn&Atilde;&curren; kookos&Atilde;&para;ljy vai
    puhdas sattuma. Poskiin tuli sellaiset l&Atilde;&curren;ik&Atilde;&curren;t jotka
    tuntuivat aivan hirptapakeeilka, eli ei ollut ihan sit&Atilde;&curren; omaa tyypillist&Atilde;&curren;
    naama hilseilee pakkasella- kuivumista. Ja h&Atilde;&curren;visi kyll&Atilde;&curren;
    kun lopetin &Atilde;&para;ljyn k&Atilde;&curren;yt&Atilde;&para;n kasvoissa. Tosin
    t&Atilde;&curren;&Atilde;&curren; miun iho on melko herkk&Atilde;&curren; kaikelle...
    Pit&Atilde;&curren;nee kokeilla viel&Atilde;&curren; uudemman kerran.
- id: 122
  author: Blue
  author_email: gm0ot4fqtl@mail.com
  author_url: http://cgyvtgpmlme.com
  date: '2016-07-18 18:52:45 +0530'
  date_gmt: '2016-07-18 18:52:45 +0530'
  content: I have been coieidsrnng a PTO driven generator myself as I have seen them
    in action here. Diesel is the way to go for any farm/home engine as far as storage
    and safety.I have an old Ford 4000 52HP diesel tractor that I bought for little
    more than a good diesel generator costs.
- id: 170
  author: JimmiXS
  author_email: jimos4581rt@hotmail.com
  author_url: http://www.FyLitCl7Pf7kjQdDUOLQOuaxTXbj5iNG.com
  date: '2016-08-09 14:48:21 +0530'
  date_gmt: '2016-08-09 14:48:21 +0530'
  content: 440mwy http://www.FyLitCl7Pf7kjQdDUOLQOuaxTXbj5iNG.com
- id: 214
  author: nhl 17 coins
  author_email: iccbqve@gmail.com
  author_url: http://cazaconnosotros.com/historias-de-caza-y-cazadores/fifa-17-coins-free-ea-sports-active-2-with-purchase-of-wii-system
  date: '2016-08-16 09:42:58 +0530'
  date_gmt: '2016-08-16 09:42:58 +0530'
  content: The advice is rather helpful
- id: 638
  author: Teresa
  author_email: cyyqpe@meldram.com
  author_url: http://www.teqdar.net/shortl/6adt
  date: '2016-09-03 16:43:09 +0530'
  date_gmt: '2016-09-03 16:43:09 +0530'

---
# Tsunami UDP Protocol &ndash; Installation, Setup and Limitations
Tsunami is one of several currently available UDP-based transfer protocols that were developed for high speed transfer over network paths that have a high bandwidth-delay product.
Tsunami performs a file transfer by sectioning the file into numbered blocks of usually 32kB size. Communication between the client and server applications flows over a low bandwidth TCP connection. The bulk data is transferred over UDP.

Most of the protocol intelligence is worked into the client code - the server simply sends out all blocks, and resends blocks that the client requests. The client specifies nearly all parameters of the transfer, such as the requested file name, target data rate, block size, target port, congestion behaviour, etc, and controls which blocks are requested from the server and when these requests are sent.

##### Installation
Tsunami UDP installation is pretty straight forward, the current version of the source code can be found from their website. We can CVS checkout the current version with following command
<pre><code style="color:#4512AE;"
>
cvs -z3 -d:pserver:anonymous@tsunami-udp.cvs.sourceforge.net:/cvsroot/tsunami-udp co -P tsunami-udp
sudo apt-get install git gcc
sudo apt-get install automake autoconf
cd tsunami-udp
./recompile.sh
sudo make install
</code></pre>

##### Setup
An <a href="https://www.bluepiit.com/blog/how-to-automate-copying-an-ec2-amis-from-one-aws-region-to-another-cleanup-using-aws-lambda">EC2 Instance</a> with good or 10Gbit Ethernet network would be preferable to achieve higher transfer speed. TCP 22 and TCP/ UDP 46224 needs to be opened between server and client for communication and data transfer.
On Server side start up the process with command
tsunamid --port 46224 * # (<em>Serves all files from current directory for copy</em>)
On client side start the transfer
<code style="white-space: normal; color:#4512AE;"
>tsunami connect [server] get * # (<em>copies all files served to current directory</em>)</code>
Below are a few screen shots
<img class="aligncenter size-full wp-image-999 blog_image_size" src="https://static.bluepiit.com/blog/wp-content/uploads/sites/2/2015/10/udp-setup.png" alt="udp-setup" width="715" height="276" />
<em>Maximum speed achieved 649.1Mbps</em>
<img class="aligncenter size-full wp-image-1001 blog_image_size" src="https://static.bluepiit.com/blog/wp-content/uploads/sites/2/2015/10/tsunami-udp-setup.png" alt="tsunami-udp-setup" width="877" height="491" />
<em>CloudWatch Network utilization comparison between Tsunami UDP and SCP</em>

##### Limitations

- Tsunami UDP transfers only files and doesn&rsquo;t do directories/ subdirectories, we need to tar them all up as one single tar file (additional storage capacity needs to be taken into consideration).
- Multi-threading is not supported.
- Multi session not supported. Client supports only one connection to the server at a time. No parallel file transfer.
- No resume or retry for file transfer.
- Does not support Native encryption.

##### Conclusion
Tsunami UDP provides a free, easy way of quickly move large amounts of data in and out of <a href="https://www.bluepiit.com/aws-partnership">AWS</a> or between regions. Transfer speeds are very high about 80 to 90 MB/s when compared to standard SCP/ FTP at 6 to 7 MB/s.
