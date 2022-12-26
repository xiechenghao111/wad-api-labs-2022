import React from "react";
import { getpeople } from "../api/tmdb-api";
import PageTemplate from '../components/templatePeopleListPage';
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';



const PeoplePage = (props) => {

  const {  data, error, isLoading, isError }  = useQuery('people', getpeople)

  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }  
  const people = data.results;

  // Redundant, but necessary to avoid app crashing.
  
  //const addToFavorites = (movieId) => true 

  return (
    <PageTemplate
      title="Famous People"
      persons={people}
     
    />
);

};
export default PeoplePage;