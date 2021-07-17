import React from "react";
import { Route } from "react-router-dom";
import MovieLayout from "../Layouts/movie.layout";


//passing props as demo so that there is no name clash 
const MovieHOC = ({ component: Component, ...demo }) => {
  //const Component = component; same as component: Component 
  return (
    <>
      <Route
        {...demo}
        component={(props) => (
          <MovieLayout>
            <Component {...props}/>
          </MovieLayout>
        )}
      />
    </>
  );
};

export default MovieHOC;
