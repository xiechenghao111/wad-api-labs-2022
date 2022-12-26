import React from "react";
import Header from "../headerPeopleList";
import PeopleList from "../peopleList";
import Grid from "@mui/material/Grid";
import AddPagination from "../pagination";

function PeopleListPageTemplate({ persons, title, action }) {
  

  let displayedPeople = persons
  

  

  return (
    <Grid container sx={{ padding: '20px' }}>
      <Grid item xs={12}>
        <Header title={title} />
      </Grid>
      <Grid item container spacing={5}>
    
          
          
        <PeopleList action={action} persons={displayedPeople}></PeopleList>
      </Grid>
      <AddPagination  />
    </Grid>
    
    
  );
}
export default PeopleListPageTemplate;