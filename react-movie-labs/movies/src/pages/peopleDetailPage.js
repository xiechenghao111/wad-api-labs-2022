import React from "react";
import { useParams } from 'react-router-dom';
import PeopleDetails from "../components/peopleDetails/";
import PageTemplate from "../components/templatePeoplePage";
//import useMovie from "../hooks/useMovie";
import {  getPeopledetail } from '../api/tmdb-api'
import { useQuery } from "react-query";
import Spinner from '../components/spinner'
const PeopleDetailPage = (props) => {
  const { id } = useParams();
  const { data: people, error, isLoading, isError } = useQuery(
    ["people", { id: id }],
    getPeopledetail
  );

  console.log(people)

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }
  return (
    <>
      {people ? (
        <>
          <PageTemplate 
            title="People Biography"
          people={people}>
            <PeopleDetails people={people} />
          </PageTemplate>
        </>
      ) : (
        <p>Waiting for movie details</p>
      )}
    </>
  );
};

export default PeopleDetailPage;