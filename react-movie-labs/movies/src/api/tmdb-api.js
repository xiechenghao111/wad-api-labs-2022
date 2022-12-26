export const getMovies = (args) => {
  const[,pages] = args.queryKey;
  const{page} = pages;
  return fetch(
    `https://api.themoviedb.org/3/discover/movie?api_key=cd337e2cdf6450aa6801acff1fa9bee5&language=en-US&include_adult=false&include_video=false&page=${page}`
  ).then((response) => {
    if (!response.ok) {
      throw new Error(response.json().message);
    }
    return response.json();
  })
  .catch((error) => {
     throw error
  });
};
  
export const getMovie = (args) => {
  // console.log(args)
  const [, idPart] = args.queryKey;
  const { id } = idPart;
  return fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=cd337e2cdf6450aa6801acff1fa9bee5`
  ).then((response) => {
    if (!response.ok) {
      throw new Error(response.json().message);
    }
    return response.json();
  })
  .catch((error) => {
    throw error
 });
};
  export const getupcomingMovie = () => {
    return fetch(
      'https://api.themoviedb.org/3/movie/upcoming?api_key=cd337e2cdf6450aa6801acff1fa9bee5&language=en-US&page=1'
      ).then((response) => {
        if (!response.ok) {
          throw new Error(response.json().message);
        }
        return response.json();
      })
      .catch((error) => {
         throw error
      });
    };
  
    export const gettopratedMovie = () => {
      return fetch(
        `https://api.themoviedb.org/3/movie/top_rated?api_key=cd337e2cdf6450aa6801acff1fa9bee5&language=en-US&page=1`
        ).then((response) => {
          if (!response.ok) {
            throw new Error(response.json().message);
          }
          return response.json();
        })
        .catch((error) => {
           throw error
        });
      };

      export const getpeople = () => {
        return fetch(
          `https://api.themoviedb.org/3/person/popular?api_key=cd337e2cdf6450aa6801acff1fa9bee5&language=en-US&page=1`
          ).then((response) => {
            if (!response.ok) {
              throw new Error(response.json().message);
            }
            return response.json();
          })
          .catch((error) => {
             throw error
          });
        };
        
        export const getPeopledetail = (args) => {
          // console.log(args)
          const [, idPart] = args.queryKey;
          const { id } = idPart;
          return fetch(
            `https://api.themoviedb.org/3/person/${id}?api_key=cd337e2cdf6450aa6801acff1fa9bee5&language=en-US`
          ).then((response) => {
            if (!response.ok) {
              throw new Error(response.json().message);
            }
            return response.json();
          })
          .catch((error) => {
            throw error
         });
        };

        export const getPeopleImage = (args) => {
          // console.log(args)
          const [, idPart] = args.queryKey;
          const { id } = idPart;
          return fetch(
            `https://api.themoviedb.org/3/person/${id}/images?api_key=cd337e2cdf6450aa6801acff1fa9bee5`
          ).then((response) => {
            if (!response.ok) {
              throw new Error(response.json().message);
            }
            return response.json();
          })
          .catch((error) => {
            throw error
         });
        };

        export const getTV = () => {
          return fetch(
            `https://api.themoviedb.org/3/discover/tv?api_key=cd337e2cdf6450aa6801acff1fa9bee5&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&include_null_first_air_dates=false&with_watch_monetization_types=flatrate&with_status=0&with_type=0`
            ).then((response) => {
              if (!response.ok) {
                throw new Error(response.json().message);
              }
              return response.json();
            })
            .catch((error) => {
               throw error
            });
          };  

          export const getTVdetail = (args) => {
            // console.log(args)
            const [, idPart] = args.queryKey;
            const { id } = idPart;
            return fetch(
              `https://api.themoviedb.org/3/tv/${id}?api_key=cd337e2cdf6450aa6801acff1fa9bee5&language=en-US`
            ).then((response) => {
              if (!response.ok) {
                throw new Error(response.json().message);
              }
              return response.json();
            })
            .catch((error) => {
              throw error
           });
          };
        
  export const getGenres = async () => {
    return fetch(
      "https://api.themoviedb.org/3/genre/movie/list?api_key=" +
        process.env.REACT_APP_TMDB_KEY +
        "&language=en-US"
    ).then( (response) => {
      if (!response.ok) {
        throw new Error(response.json().message);
      }
      return response.json();
    })
    .catch((error) => {
      throw error
   });
  };
  export const getTVGenres = async () => {
    return fetch(
      "https://api.themoviedb.org/3/genre/tv/list?api_key=cd337e2cdf6450aa6801acff1fa9bee5&language=en-US"
    ).then( (response) => {
      if (!response.ok) {
        throw new Error(response.json().message);
      }
      return response.json();
    })
    .catch((error) => {
      throw error
   });
  };
  export const getSimilarTVshows = (args) => {
    // console.log(args)
    const [, idPart] = args.queryKey;
    const { id } = idPart;
    return fetch(
      `https://api.themoviedb.org/3/tv/${id}/similar?api_key=cd337e2cdf6450aa6801acff1fa9bee5&language=en-US&page=1`
    ).then((response) => {
      if (!response.ok) {
        throw new Error(response.json().message);
      }
      return response.json();
    })
    .catch((error) => {
      throw error
   });
  };
  export const getkeywords = (args) => {
    // console.log(args)
    const [, idPart] = args.queryKey;
    const { id } = idPart;
    return fetch(
      `https://api.themoviedb.org/3/keyword/${id}/movies?api_key=<<api_key>>&language=en-US&include_adult=false`
    ).then((response) => {
      if (!response.ok) {
        throw new Error(response.json().message);
      }
      return response.json();
    })
    .catch((error) => {
      throw error
   });
  };

  
  export const getMovieImages = ({ queryKey }) => {
    const [, idPart] = queryKey;
    const { id } = idPart;
    return fetch(
      `https://api.themoviedb.org/3/movie/${id}/images?api_key=cd337e2cdf6450aa6801acff1fa9bee5`
    ).then( (response) => {
      if (!response.ok) {
        throw new Error(response.json().message);
      }
      return response.json();
  
    })
    .catch((error) => {
      throw error
   });
  };
  export const getTVReviews = (id) => {
    return fetch(
      `https://api.themoviedb.org/3/tv/${id}/reviews?api_key=cd337e2cdf6450aa6801acff1fa9bee5&language=en-US&page=1`
    )
      .then((res) => res.json())
      .then((json) => {
        // console.log(json.results);
        return json.results;
      });
  };
  export const getMovieReviews = (id) => {
    return fetch(
      `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=cd337e2cdf6450aa6801acff1fa9bee5`
    )
      .then((res) => res.json())
      .then((json) => {
        // console.log(json.results);
        return json.results;
      });
  };
