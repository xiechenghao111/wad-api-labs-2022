import express from 'express';
import { movies, movieReviews, movieDetails } from './moviesData';
import uniqid from 'uniqid'
import movieModel from './movieModel';
import asyncHandler from 'express-async-handler';
import { getUpcomingMovies } from '../tmdb-api';
import { getTopratedMovies } from '../tmdb-api';
import { getNowPlayingMovies } from '../tmdb-api';
import { getLatestMovies } from '../tmdb-api';
import { getMovieImages } from '../tmdb-api';
import { getMovies } from '../tmdb-api';
import { getMovieDetail } from '../tmdb-api';
import { getMovieReviews } from '../tmdb-api';
const router = express.Router(); 

router.get('/', asyncHandler(async (req, res) => {
    const movies = await movieModel.find();
    res.status(200).json(movies);
}));
// Get movie details
router.get('/:id', asyncHandler(async (req, res) => {
    const id = parseInt(req.params.id);
    const movie = await movieModel.findByMovieDBId(id);
    if (movie) {
        res.status(200).json(movie);
    } else {
        res.status(404).json({message: 'The resource you requested could not be found.', status_code: 404});
    }
}));
// Get movie reviews
router.get('/:id/reviews', (req, res) => {
    const id = parseInt(req.params.id);
    // find reviews in list
    if (movieReviews.id == id) {
        res.status(200).json(movieReviews);
    } else {
        res.status(404).json({
            message: 'The resource you requested could not be found.',
            status_code: 404
        });
    }
});

//Post a movie review
router.post('/:id/reviews', (req, res) => {
    const id = parseInt(req.params.id);

    if (movieReviews.id == id) {
        req.body.created_at = new Date();
        req.body.updated_at = new Date();
        req.body.id = uniqid();
        movieReviews.results.push(req.body); //push the new review onto the list
        res.status(201).json(req.body);
    } else {
        res.status(404).json({
            message: 'The resource you requested could not be found.',
            status_code: 404
        });
    }
});

router.get('/tmdb/popular', asyncHandler( async(req, res) => {
    const Movies = await getMovies();
    res.status(200).json(Movies);
  }));

  router.get('/tmdb/movies/:id', asyncHandler( async(req, res) => {
    const id =  parseInt(req.params.id);
    const Movies = await getMovies();
    const MovieDetail = await getMovieDetail(req.params.id);
    console.log(MovieDetail)
    if (Movies.id === id){
    res.status(200).json(MovieDetail);}
    else{
      res.status(404).json({
        message: 'The resource you requested could not be found.',
        status_code: 404
    });
    }
  }));
  router.get('/tmdb/movies/:id/images', asyncHandler( async(req, res,) => {
    const MovieImages = await getMovieImages(req.params.id);
    res.status(200).json(MovieImages);
  }));

  router.get('/tmdb/movies/:id/reviews', asyncHandler( async(req, res,) => {
    const MovieReviews = await getMovieReviews(req.params.id);
    res.status(200).json(MovieReviews);
  }));

router.get('/tmdb/upcoming', asyncHandler( async(req, res) => {
    const upcomingMovies = await getUpcomingMovies();
    res.status(200).json(upcomingMovies);
  }));

  router.get('/tmdb/toprated', asyncHandler( async(req, res) => {
    const topratedMovies = await getTopratedMovies();
    res.status(200).json(topratedMovies);
  }));

  router.get('/tmdb/nowplaying', asyncHandler( async(req, res) => {
    const nowplayingMovies = await getNowPlayingMovies();
    res.status(200).json(nowplayingMovies);
  }));
  router.get('/tmdb/latest', asyncHandler( async(req, res) => {
    const latestMovies = await getLatestMovies();
    res.status(200).json(latestMovies);
  }));

 
  
export default router;

