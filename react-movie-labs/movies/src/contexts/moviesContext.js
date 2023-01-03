import React, { useState ,  useContext} from "react";
import { AuthContext } from "../authContext";
import { getFavorites, addFavorite, deleteFavorite } from "../api/movie-api";
export const MoviesContext = React.createContext(null);

const MoviesContextProvider = (props) => {
  const userContext = useContext(AuthContext)
  const username = userContext.userName
  const [favorites, setFavorites] = useState( [] )

  const getUserFavorites = (username) =>{
      getFavorites(username).then((response =>{
        if (response) setFavorites (response);
      }))
  }

  const addToFavorites = (movie) => {
    let newFavorites = [];
    if (!favorites.includes(movie.id)){
    newFavorites = [...favorites, movie.id];
    console.log(userContext.userName);
      addFavorite(userContext.userName, movie.id);
    
    }
    else{
      newFavorites = [...favorites];
    }
    
    setFavorites(newFavorites)
    }
   

  const [myReviews, setMyReviews] = useState( {} ) 

  // We will use this function in a later section
  const removeFavorite = (username, movie) => {
    let newFavorites = [];
    deleteFavorite(username, movie);
    newFavorites = getFavorites(username, movie)
    setFavorites(newFavorites)
  };
  
  const removeFromFavorites = (movie) => {
    setFavorites( favorites.filter(
      (mId) => mId !== movie.id
    ) )
  };

  const addReview = (movie, review) => {
    setMyReviews( {...myReviews, [movie.id]: review } )
  };
  return (
    <MoviesContext.Provider
      value={{
        favorites,
        getUserFavorites,
        addToFavorites,
        removeFavorite,
        removeFromFavorites,
        addReview,

      }}
    >
      {props.children}
    </MoviesContext.Provider>
  );
};

export default MoviesContextProvider;