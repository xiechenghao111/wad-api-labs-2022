import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CardHeader from "@mui/material/CardHeader";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import StarRateIcon from "@mui/icons-material/StarRate";

import Grid from "@mui/material/Grid";
import img from '../../images/film-poster-placeholder.png'
import { Link } from "react-router-dom";



export default function PeopleCard({ people }) {
  
  // const handleAddToFavorite = (e) => {
  //   e.preventDefault();
  //   addToFavorites(movie);
  // };
  return (
    <Card sx={{ maxWidth: 345 }}>
        <CardHeader
        title={
          <Typography variant="h5" component="p">
            {people.name}{" "}
          </Typography>
        }
      />
      <CardMedia
        sx={{ height: 500 }}
        image={
          people.profile_path
            ? `https://image.tmdb.org/t/p/w500/${people.profile_path}`
            : img
        }
      />
      <CardContent>
        <Grid container>
        <Grid item xs={6}>
            <Typography variant="h6" component="p">
             
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="h6" component="p">
            <StarRateIcon fontSize="small" />
            {people.popularity}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
      <CardActions disableSpacing>
        <Link to={`/people/${people.id}`}>
          <Button variant="outlined" size="medium" color="primary">
            More Info ...
          </Button>
        </Link>
      </CardActions>
    </Card>
    
  );
}