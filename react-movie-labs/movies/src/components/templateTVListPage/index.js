import React, {  useState } from "react";
import Header from "../headerTVList";
import TVList from "../TVList";
import Grid from "@mui/material/Grid";
import AddPagination from "../pagination";
import FilterTVCard from "../filterTVCard";
function TVListPageTemplate({ TVs, title, action }) {
    const [nameFilter, setNameFilter] = useState("");
    const [genreFilter, setGenreFilter] = useState("0");
    const genreId = Number(genreFilter);
    

  let displayedTV = TVs
  .filter((t) => {
    return t.name.toLowerCase().search(nameFilter.toLowerCase()) !== -1;
  })
  .filter((t) => {
    return genreId > 0 ? t.genre_ids.includes(genreId) : true;
  });

const handleChange = (type, value) => {
  if (type === "name") setNameFilter(value);
  else setGenreFilter(value);
};


  return (
    <Grid container sx={{ padding: '20px' }}>
      <Grid item xs={12}>
        <Header title={title} />
      </Grid>
      <Grid item container spacing={5}>
      <Grid key="find" item xs={12} sm={6} md={4} lg={3} xl={2}>
          <FilterTVCard
            onUserInput={handleChange}
            nameFilter={nameFilter}
            genreFilter={genreFilter}
          />
        </Grid>
        <TVList action={action} TVs={displayedTV}></TVList>
      </Grid>
      <AddPagination  />
    </Grid>
    
    
  );
}
export default TVListPageTemplate;