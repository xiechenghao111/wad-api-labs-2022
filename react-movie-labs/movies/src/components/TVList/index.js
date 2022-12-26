import React from "react";
import TV from "../TVCard";
import Grid from "@mui/material/Grid";

const TVList = ( {TVs, action }) => {
  let TVCard = TVs.map((t) => (
    <Grid key={t.id} item xs={12} sm={6} md={4} lg={3} xl={2}>
      <TV key={t.id} TV={t} action={action} />
    </Grid>
  ));
  return TVCard;
};

export default TVList;