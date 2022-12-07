---
post_image: https://static.bluepiit.com/blog/wp-content/uploads/sites/2/2014/04/infinite-scroll.jpg
layout: post
status: publish
published: true
title: Implement Infinite Scroll Pagination in AngularJS
author:
  display_name: Barkat Dhillon
  login: barkat
  email: barkat@bluepi.in
  url: ''
author_login: barkat
author_email: barkat@bluepi.in
permalink: /blog/angularjs-infinite-scroll-pagination/
date: '2014-04-01 15:51:39 +0530'
date_gmt: '2014-04-01 15:51:39 +0530'
categories:
- app-development
tags:
- app-dev
- question
- app-development
- angularjs
comments:
- id: 107
  author: Gaurav
  author_email: gaurav@bluepi.in
  author_url: http://proversity.com
  date: '2016-07-12 04:53:15 +0530'
  date_gmt: '2016-07-12 04:53:15 +0530'
  content: Very nicely explained indeed.
- id: 108
  author: Amardeep
  author_email: amardeep@bluepi.in
  author_url: http://proversity.com
  date: '2016-07-12 04:54:05 +0530'
  date_gmt: '2016-07-12 04:54:05 +0530'
  content: Good to see your content
- id: 875
  author: LED Modern Chandelier http://www.frontlinesilverspring.com/
  author_email: example@example.com
  author_url: http://www.jodiqueenan.com/
  date: '2016-10-18 07:29:21 +0530'
  date_gmt: '2016-10-18 07:29:21 +0530'
  content: Jimmy
- id: 877
  author: madden nfl 17 coins
  author_email: auikntnqh@gmail.com
  author_url: https://dinahgeraldine.wordpress.com/2016/10/19/madden-17-throughout-the-various-people-types/
  date: '2016-10-20 23:18:45 +0530'
  date_gmt: '2016-10-20 23:18:45 +0530'
  content: Wow, lovely site. Thnx ..
- id: 880
  author: LillianaBarl
  author_email: adamelbourne@gmail.com
  author_url: http://facebook.com/Darell
  date: '2016-10-25 22:30:31 +0530'
  date_gmt: '2016-10-25 22:30:31 +0530'
  content: "I see your website needs some unique &amp; fresh articles.\r\nWriting
    manually is time consuming, but there is tool for this task.\r\n\r\nJust search
    for - Fasrixo's tools"
- id: 885
  author: replique bague van cleef occasion
  author_email: lhfzqe@gmail.com
  author_url: http://www.bijouxpascher.net/
  date: '2016-11-01 15:45:08 +0530'
  date_gmt: '2016-11-01 15:45:08 +0530'
  content: "cartierlovejesduas Ah&hellip; y &ldquo;En Robinson We Trust&rdquo;, claro.
    xD\r\n <a href=\"http://www.bijouxpascher.net/\" rel=\"nofollow\">replique bague
    van cleef occasion</a> [url=http://www.bijouxpascher.net/]replique bague van cleef
    occasion[/url]"
- id: 886
  author: Dyan
  author_email: janellbrody@gmx.de
  author_url: http://Herbert.typepad.com
  date: '2016-11-04 14:03:46 +0530'
  date_gmt: '2016-11-04 14:03:46 +0530'
  content: "I see interesting content here. Your website can go viral easily, you
    need \r\nsome initial traffic only. How to get it? Search for: ricusso's methods
    massive traffic"
---
# Implement Infinite Scroll Pagination in AngularJS
 I bet you have seen and pretty used to the old fashioned pagination that looks something like below: 
<img class="alignnone size-medium wp-image-411" src="https://static.bluepiit.com/blog/wp-content/uploads/sites/2/2014/12/old-pagination-300x32.png" alt="old-pagination" width="300" height="32" /> 
The pagination style above suffers from a significant UX issues. The user has to guess on what page is the result he is looking for. He clicks and clicks in the hope of finding the right page and finally gets frustrated and leaves your site. 

Also, you are asking too many inputs from user to traverse between the pages. Previous, Next, Page Numbers .. turns out though this is something that users have really gotten used to. 
As a developer too, &nbsp;such a pagination scheme is very easy to implement as it loads limited data .

<strong>How will you react<strong> if I improve user's&nbsp; experience by changing  <strong>multiple pages to a single page,&nbsp;<strong> user does not need to click between pages because all the records are being shown in single page now &amp; I guess that makes him happy! 
At the same time you don't need to return entire data set at once which means you can still send same chunk of data records as you were sending earlier, but  <strong>bonus point <strong> here is that you need to send data again which you sent earlier, i.e. if you have already sent records 11-20 and user wants to see those again, request will not come to server, client will handle it internally. 
<h2>Let's do the magic</h2>
 Let's first discuss our design approach to achieve such functionality where we can show paginated records but in same page. Please refer following diagram: 
<img class="aligncenter size-full wp-image-418" src="https://static.bluepiit.com/blog/wp-content/uploads/sites/2/2014/12/design.png" alt="Design Approach" width="" height="" /> 
In above diagram you can refer first column where browser displays only few records i.e. first page as in older pagination approach. We will observe scroll down event by the user and when we find out that user has reached bottom of record list then we will initiate an AJAX request to get next page record, do not replace current page's record but append to current record list. Now user will have a experience that he is scrolling down same page, but you are sending data in chunks with the help of AJAX request. 
<blockquote> I am going to implement this design in <a title="AngularJS" href="https://www.bluepiit.com/blog/nodejs-vs-angular/">AngularJS</a>, but you can implement this as per your framework as well. I will take an example of Courses where application is showing list of courses. </blockquote>
<h2>Back-end Service Contract</h2>
 You need to define service method which can provide you data accordingly. We need 2 method as follows: 

- getCourseCount() and it will get me total no. of courses exists in system so that application can stop loading more once it reaches count limit. 
url: <em><span style="text-decoration: underline;"><span style="color: #0000ff;">/v1/courses?count</span></span></em>
- getCourses(offset:Number, limit:Number) and it return list of records start from offset and upto limit records. 
Url: <em><span style="text-decoration: underline; color: #0000ff;">/v1/courses/offset/:offset/limit/:limit</span></em>

## Directive to Load Records on Scroll Down
 Now application needs a directive which you can reuse throughout the application for all the pagination. This directive should be generic enough and should take a callback method as parameter so that each page can call its specific logic to load next chunk of records. 
<pre class="lang:javascript decode:1 ">angular.module('app.directives.pvScroll', [])
.directive('pvScrolled', function() {
return function(scope, elm, attr) {
var raw = elm[0];
elm.bind('scroll', function() {
if (raw.scrollTop + raw.offsetHeight >= raw.scrollHeight) {
scope.$apply(attr.pvScrolled);
}
});
};
});
</pre>
 Above directive will bind an event 'scroll' to current element and as soon it reaches bottom of current element, it will invoke function passed in as parameter while applying this directive on an element. 

## Template to Render List
 Use above coded directive in your view template so that it bind 'scroll' event with your container. Container could be anything either your full browser window or just a fraction of page e.g. a div showing list of records, in this case you need to define a height of container so that whenever scroll reaches that height end it should fire an event and load more records. Apply following CSS to your container. 
<pre class="lang:css decode:1 ">.courses-list{
position : relative;
width&nbsp;&nbsp;&nbsp; : 100%;
height&nbsp;&nbsp; : 500px;
overflow : hidden;
}
</pre>
 Assign above defined  <strong>CSS <strong> class to container and bind  <strong>pvScrolled <strong> directive to it as well as follows: 
<pre class="lang:html decode:1 "><div>
<div>
Showing {{resultList.length}} out of {{total}} records
</div>
<div>
<div class="courses-list"&nbsp; pv-scrolled="loadMoreCourses()">
<div ng-class-odd="'course-box'" ng-class-even="'course-box-bgcolor'" ng-repeat="item in resultList">
<div>
<!-- render each course row here -->
</div>
</div>
<!-- This div will be showed whenever ajax request is active to bring more records -->
<div ng-show="loadingResult" class="span9 loading-inline alert alert-info">
</div>
<!-- if server does not has more records to load then following div will inform the user that it is end of records -->
<div ng-show="!loadingResult &amp;&amp; (resultList.length == total)" class="span9 pv-message">
<legend>
No more results to display.
</legend>
</div>
<!-- if no records found then following div will be showed -->
<div ng-show="!loadingResult &amp;&amp; resultList.length == 0" class="span9 pv-message">
<legend>
No record found!!!
</legend>
</div>
</div>
</div>
</pre>
<h2>Controller to Load Records on scroll down</h2>
 In Controller we need to 
<pre class="lang:javascript decode:1 ">angular.module('app.search.courses', [
'ui.state',
'app.services.course.courseService'
])
.config(['$stateProvider', function (stateProvider) {
stateProvider
.state('courses', {
url: '/courses',
views: {
'headerView@': {
templateUrl: 'templates/header.tpl.html'
},
'': {
templateUrl: 'courses/templates/courses.tpl.html',
controller: 'CourseCtrl'
},
'footerView@': {
templateUrl: 'templates/footer.tpl.html'
}
}
});
}])
.controller('CourseCtrl', ['$scope', 'CourseService',
function (scope, CourseService) {
scope.pagination = {
noOfPages: 1,
currentPage: 0,
pageSize: 10
};
scope.resultList = [];
scope.loadMoreCourses = function () {
if (scope.loadingResult) {
return;
}
if (scope.pagination.currentPage >= scope.pagination.noOfPages) {
return;
}
scope.pagination.currentPage = scope.pagination.currentPage + 1;
scope.offset = (scope.pagination.currentPage - 1) * scope.pagination.pageSize;
scope.limit = scope.pagination.pageSize;
scope.loadingResult = true;
scope.resultList = CourseService.courses.list({offset:scope.offset, limit:scope.limit});
scope.loadingResult = false;
};
scope.initializeResultList = function () {
CourseService.courses.count({}, function (count) {
scope.total = count;
scope.pagination.noOfPages = Math.ceil(count / scope.pagination.pageSize);
scope.loadMoreCourses();
});
}
scope.initializeResultList();
}]);
</pre>
 In the controller, we have declared a  <strong>scope.pagination </strong> which captures  <strong>pageSize </strong> i.e. limit or chuck size we are loading for every request,  <strong>noOfPages </strong> i.e. total no. of requests required to traverse whole list and last is  <strong>currentPage <strong> i.e. last accessed page so that if new request comes in to load more it will calculate which next chunk required to be loaded. 
There are 2 methods defined too,  <strong>loadMoreCourses() </strong> which will be called every time scroll reached bottom of container or when page loaded first time.This method has check that if method has already initiated load more AJAXrequest, it will not initiate next one. 
Other is  <strong>initializeResultList() </strong>, which will called one time at the time loading of controller and it will set total no of records and loads first chunk of records. 
In <em> <strong>html </strong></em> code, we have declared 3 different divs other than result list: 

- Loading div: it will be shown whenever a AJAX request to load more records is in-progress. 
<img class="aligncenter size-full wp-image-434" src="https://static.bluepiit.com/blog/wp-content/uploads/sites/2/2014/12/loadingMore.png" alt="loadingMore" width="896" height="43" />

- No More Records to load: it will be shown whenever user has reached end of all the records available in the system. It means application will not load more records. 
<img class="aligncenter size-full wp-image-431" src="https://static.bluepiit.com/blog/wp-content/uploads/sites/2/2014/12/noMoreRecords.png" alt="noMoreRecords" width="895" height="45" />

- No Record found: If there is no record to show at all, then it will be show. 
<img class="aligncenter size-full wp-image-432" src="https://static.bluepiit.com/blog/wp-content/uploads/sites/2/2014/12/noRecord.png" alt="noRecord" width="894" height="45" /></li>

 Please refer the similar implementation like we discussed above 
<img class="aligncenter size-full wp-image-433" src="https://static.bluepiit.com/blog/wp-content/uploads/sites/2/2014/12/Courses.png" alt="Proversity - All Courses" width="" height="" /> 

## Conclusion
 By now you should be able to use this function in any of your AngularJS application or you can implement this design in your specific framework as well, if you have any additional suggestions or questions regarding this blog, feel free to leave a comment. Would love to share any ideas with you guys. 
