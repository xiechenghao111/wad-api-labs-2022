import React from "react";
import { useParams } from 'react-router-dom';
import TVDetails from "../components/TVDetails/";
import PageTemplate from "../components/templateTVPage";
import { getTVdetail } from '../api/tmdb-api'
import { useQuery } from "react-query";
import Spinner from '../components/spinner'
const TVDetailPage = (props) => {
  const { id } = useParams();
  const { data: TV, error, isLoading, isError } = useQuery(
    ["TV", { id: id }],
    getTVdetail
  );

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }
  return (
    <>
      {TV ? (
        <>
          <PageTemplate TV={TV}>
            <TVDetails TV={TV} />
          </PageTemplate>
        </>
      ) : (
        <p>Waiting for TV details</p>
      )}
    </>
  );
};

export default TVDetailPage;