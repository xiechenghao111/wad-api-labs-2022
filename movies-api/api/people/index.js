import express from 'express';
import asyncHandler from 'express-async-handler';
import { getPopularPeople } from '../tmdb-api';
import { getPeopleDetail } from '../tmdb-api';
import { getPeopleMovie_credit } from '../tmdb-api';
import { getLatestPeople } from '../tmdb-api';
import { getPeopleimages } from '../tmdb-api';
const router = express.Router(); 

router.get('/tmdb/popular', asyncHandler( async(req, res) => {
    const people = await getPopularPeople();
    res.status(200).json(people);
  }));

router.get('/tmdb/people/:id', asyncHandler( async(req, res,) => {
    const PeopleDetail = await getPeopleDetail(req.params.id);
    res.status(200).json(PeopleDetail);
  }));

  router.get('/tmdb/people/:id/movie-credits', asyncHandler( async(req, res,) => {
    const PeopleMovie_credit = await getPeopleMovie_credit(req.params.id);
    res.status(200).json(PeopleMovie_credit);
  }));

  router.get('/tmdb/latest', asyncHandler( async(req, res) => {
    const latestpeople = await getLatestPeople();
    res.status(200).json(latestpeople);
  }));
  router.get('/tmdb/people/:id/images', asyncHandler( async(req, res,) => {
    const Peopleimages = await getPeopleimages(req.params.id);
    res.status(200).json(Peopleimages);
  }));
  export default router;