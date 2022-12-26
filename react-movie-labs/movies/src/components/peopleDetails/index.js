import React from "react";
import Paper from "@mui/material/Paper";



import Typography from "@mui/material/Typography";



const root = {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    listStyle: "none",
    padding: 1.5,
    margin: 0,
};


const PeopleDetails = ({ people }) => {  // Don't miss this!
 

  return (
    <>
      <Typography variant="h5" component="h3">
        Biography
      </Typography>

      <Typography variant="h6" component="p">
        {people.biography}
      </Typography>

      <Paper 
        component="ul" 
        sx={{...root}}
      >
        
      
      </Paper>
      <Paper component="ul" sx={{...root}}>
        
      </Paper>
     
     
      </>
  );
};
export default PeopleDetails ;