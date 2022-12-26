import React from "react";
import People from "../peoplecard";
import Grid from "@mui/material/Grid";

const PeopleList = ( {persons, action }) => {
  let peopleCard = persons.map((p) => (
    <Grid key={p.id} item xs={12} sm={6} md={4} lg={3} xl={2}>
      <People key={p.id} people={p} action={action} />
    </Grid>
  ));
  return peopleCard;
};

export default PeopleList;