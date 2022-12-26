import React from "react";
import PageTemplate from '../components/templateMovieListPage';
import { useQuery } from 'react-query';
import AddToFavoritesIcon from '../components/cardIcons/addToFavorites'
import { getupcomingMovie } from "../api/tmdb-api";
import Spinner from '../components/spinner';

const UpcomingPage = (props) => {
  const {  data, error, isLoading, isError }  = useQuery('upcoming', getupcomingMovie)

  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }  
  const movies = data.results;
  
 // const addToFavorites = (movieId) => true 
  
  
  return (
    <PageTemplate
      title="Upcoming Movies"
      movies={movies}
      action={(movie) => {
        return <AddToFavoritesIcon movie={movie} />
      }}
    />
);
};
export default UpcomingPage;