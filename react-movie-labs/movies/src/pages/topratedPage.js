import React from "react";
import PageTemplate from '../components/templateMovieListPage';
import { useQuery } from 'react-query';
import AddToFavoritesIcon from '../components/cardIcons/addToFavorites'
import { gettopratedMovie } from "../api/tmdb-api";
import Spinner from '../components/spinner';

const TopratedPage = (props) => {
  const {  data, error, isLoading, isError }  = useQuery('toprated', gettopratedMovie)
  console.log(data)
  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }  
  const movies = data.results;
  const favorites = movies.filter(m => m.favorite)
  localStorage.setItem('favorites', JSON.stringify(favorites))
 // const addToFavorites = (movieId) => true 
  
  
  return (
    <PageTemplate
      title="Toprated Movies"
      movies={movies}
      action={(movie) => {
        return <AddToFavoritesIcon movie={movie} />
      }}
    />
);
};
export default TopratedPage;