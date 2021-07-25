import React, { useState } from "react";

//creating a plain context
export const MovieContext = React.createContext();

// Function that will provide data is called provider

const MovieProvider = ({ children }) => {
  //making it default initially and fetching data from api and storing
  const [movie, setMovie] = useState({
    id: 0,
    original_title: "",   
    overview: "",
    backdrop_path: "",
    poster_path: "",
  });

  //   returning the data.    through "movie" we will be able to get and read the data, through "setMovie" we will be able to set a new movie data
  return (
    <MovieContext.Provider value={{ movie, setMovie }}>
      {children}
    </MovieContext.Provider>
  );
};

export default MovieProvider;
