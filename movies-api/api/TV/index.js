import express from 'express';
import asyncHandler from 'express-async-handler';
import { getTV } from '../tmdb-api';
import { getTVDetail } from '../tmdb-api';
import { getSimilarTVshows } from '../tmdb-api';
import { getTVReviews } from '../tmdb-api';
import { getTVGenres } from '../tmdb-api';
const router = express.Router(); 

router.get('/tmdb/popular', asyncHandler( async(req, res) => {
    const people = await getTV();
    res.status(200).json(people);
  }));

  router.get('/tmdb/TV/:id', asyncHandler( async(req, res,) => {
    const TVDetail = await getTVDetail(req.params.id);
    res.status(200).json(TVDetail);
  }));
  router.get('/tmdb/TV/:id/similar', asyncHandler( async(req, res,) => {
    const SimilarTVshows = await getSimilarTVshows(req.params.id);
    res.status(200).json(SimilarTVshows);
  }));

  router.get('/tmdb/TV/:id/reviews', asyncHandler( async(req, res,) => {
    const TVReviews = await getTVReviews(req.params.id);
    res.status(200).json(TVReviews);
  }));

  router.get('/tmdb/TV/:id/genres', asyncHandler( async(req, res,) => {
    const TVGenres = await getTVGenres(req.params.id);
    res.status(200).json(TVGenres);
  }));

  export default router;