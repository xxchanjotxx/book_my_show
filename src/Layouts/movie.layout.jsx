import React, { useEffect, useContext } from "react";

import MovieNavbar from "../components/Navbar/movieNavbar.component";

// hook
import { useParams } from "react-router-dom";

// context
import { MovieContext } from "../context/movie.context";

// importing axios
import axios from "axios";

const MovieLayout = (props) => {
  //getting the id from the url /movie/:id
  const { id } = useParams();

  const { movie, setMovie } = useContext(MovieContext);

  // getting the data, setting the data and updating movie
  useEffect(() => {
    const requestMovie = async () => {
      const getMovie = await axios.get(`/movie/${id}`);

      setMovie(getMovie.data);
    };

    requestMovie();
  }, []);

  return (
    <>
      <MovieNavbar />
      {props.children}
    </>
  );
};

export default MovieLayout;
