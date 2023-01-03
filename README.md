# Assignment 2 - Web API.

Name: chenghao

## Features.

 + Mores new API routes, including  parameterised URL
 + Object referencing in Mongo.
 + Basic Authentication and protected routes
 + Additional validation using Mongoose or regular expressions
 + Good use of express middleware (e.g. error handling).
 + Substantial React App integration.
 + API documentation 
 + Improved error logging



## API Configuration

______________________
NODE_ENV=development
PORT=8080
HOST=localhost
mongoDB=YourMongoURL
seedDb=true
secret=YourJWTSecret
REACT_APP_TMDB_KEY=YourReactMovieKey
______________________

## API Design
Give an overview of your web API design, perhaps similar to the following: 

+ GET api/movies/tmdb/popular - Get 20 popular movies.
+ GET api/movies/tmdb/movies/:id - get the details of the movies.
+ GET api/movies/tmdb/movies/:id/images - get the images of the movies.
+ GET api/movies/tmdb/nowplaying - get the 20 nowplaying movies.
+ GET api/movies/tmdb/toprated - get the 20 toprated movies.
+ GET api/users/:userName/favorites - get the movie's id in favorites of one user
+ POST api/users/userName/favorites - add a movie id to the favorites of one user
+ GET api/genres - get 4 genres of the movies
+ POST api/genres - add one genre of the movie
+ PUT api/genres - change one genre of the movie
+ GET api/people/tmdb/popular - get 20 poopular people
+ GET api/people/tmdb/people/:id - get the details of the people
+ GET api/people/tmdb/people/:id/images - get the images of the people
+ GET api/people/tmdb/:id/movie-credits - get  the movie-credits of the people
+ GET api/TV/tmdb/popular - get the 20 popular TVs
+ GET api/TV/tmdb/TV/:id - get the details of the TV
+ GET api/TV/tmdb/TV/:id/similar - get the similar TV images of the TV
+ GET api/TV/tmdb/TV/:id/reviews - get the TV reviews of the TV
+ GET api/TV/tmdb/TV/:id/genres - get the genres of the TV
 [Swaggerhub](https://app.swaggerhub.com/apis/xiechenghao111/movies-api/1.0.0#/)).

## Security and Authentication
I use the passport authentication to project '/api/people'. let the homepage, upcoming page, toprated page, people page and the TV page to be authentication verify that it is a valid validation. After that you can get these pages.
## Integrating with React App

+ GET api/movies/tmdb/popular - the homepage movielist
+ GET api/movies/tmdb/movies/:id - the movie details in moviedetail page
+ GET api/movies/tmdb/movies/:id/images - get the posters of the movies in moviedetail page.
+ GET api/movies/tmdb/nowplaying - the nowplaying movielist.
+ GET api/movies/tmdb/toprated - the toprated movielist.
+ GET api/users/:userName/favorites - get the movie's id in favorites of one user
+ POST api/users/userName/favorites - add a movie id to the favorites of one user
+ GET api/genres - get the genres of the movies
+ POST api/genres - add one genre of the movie
+ PUT api/genres - change one genre of the movie
+ GET api/people/tmdb/popular - the People page list
+ GET api/people/tmdb/people/:id - get the details of the people in people detail page
+ GET api/people/tmdb/people/:id/images - get the images of the people in people page
+ GET api/people/tmdb/:id/movie-credits - get  the movie-credits of the people in people page
+ GET api/TV/tmdb/popular - get the TV page list
+ GET api/TV/tmdb/TV/:id - get the details of the TV in TV detail page
+ GET api/TV/tmdb/TV/:id/similar - get the similar TV images of the TV in TV detail page
+ GET api/TV/tmdb/TV/:id/reviews - get the TV reviews of the TV in TV detail page
+ GET api/TV/tmdb/TV/:id/genres - get the genres of the TV

When you are not logged in, all clicks on the protected interface will be the login interface, and the information that you have not logged in will be displayed in the header.
There are more detailed requirements for login and registration, different input errors have different responses.
After logging in, the header shows that a certain user is welcome, and there is a sign out button. After signing out, you will log in again
After the user logs in, each interface can be accessed, and when adding a favorite movie, the backend can get the favorite movie id.