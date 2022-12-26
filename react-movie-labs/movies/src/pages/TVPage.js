import React from "react";
import { getTV } from "../api/tmdb-api";
import PageTemplate from '../components/templateTVListPage';
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';



const TVPage = (props) => {

  const {  data, error, isLoading, isError }  = useQuery('TV', getTV)

  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }  
  const TV = data.results;

  // Redundant, but necessary to avoid app crashing.
  
  //const addToFavorites = (movieId) => true 

  return (
    <PageTemplate
      title="Discover TV"
      TVs={TV}
     
    />
);

};
export default TVPage;