import React, { useState } from "react";

export const TVContext = React.createContext(null);

const TVContextProvider = (props) => {

 
  
  const [myReviews, setMyReviews] = useState( {} ) 

  // We will use this function in a later section
  
  const addReview = (TV, review) => {
    setMyReviews( {...myReviews, [TV.id]: review } )
  };
  return (
    <TVContext.Provider
      value={{
       
        
        addReview,
      }}
    >
      {props.children}
    </TVContext.Provider>
  );
};

export default TVContextProvider;