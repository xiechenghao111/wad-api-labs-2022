# Assignment 1 - ReactJS app.

Name: chenghao xie

## Overview.

The content of this repository is a react movie app, this app have movie page, people page and TV page. And the movie page contains upcoming movie page and high score movie page. App can query movies in the filter card and view movies by category. In the moviecard, you can check the detailed information of the movie and put the movie into favorites. Favorite movies can also be deleted or commented on. You can also view reviews on the detailed information page. At the head of page, there is an arrow sign, click to go to the previous page and return. The page aer also paginated, and there are more than 500 pages in total. The filter card on the movie page can query the language filter. On the TV detail page, since there are almost no posters for get TV image, replace it with similar TV shows. Finally, I add the third-part authentication, use Auth0 to authenticate the login.

### Features.

+ Feature 1  Add new page- Toprated movie page
+ Feature 2  Add new page- Peope page
+ Feature 3  Add new page- People detail page
+ Feature 4  Add new page- TV page
+ Feature 5  Add new page- TV detail page
+ Feature 6  Add the review on the TV detail page
+ Feature 7  Add a new filter function 
+ Feature 8  Add the pagination of page
+ Feature 9  Add the third-party authentication

## Setup requirements.
You need to install npm install @auth0/auth0-react, the SDK exposes methods and variables that help you integrate Auth0 with your React application idiomatically using React Hooks or Higher-Order Components. 

## API endpoints.
+ Toprated movie page - /movie/top_rated
+ Famous people - /person/popular
+ People detail - /person/:id
+ People image -/person/:id/images
+ Discover TV - /discover/tv
+ TV detail  - /tv/:id
+ Get TV genres - /genre/tv/list
+ Get similar TV shows - /tv/:id/similar
+ Get TV Reviews - tv/:id/reviews

## Routing.

+ /movies/toprated - displays the Toprated page.
+ /movies/people - displays people page.
+ /movies/tv - displays tv page.
+ /people/:id- displays PeopleDetailPage.
+ /TV/:id- displays TVDetailPage and can query review.
+ /login- dispaly the login button to the Auth0
+ /:page - displays the pagename page of the movielist by the pagination.
+ /1 and / *- because the homepage is the first page of the all the pages, so change the homepage adderss to /1 and any error address back to the homepage.

