import React, { useContext } from "react";

//component
import MovieInfo from "./MovieInfo.component";

// context
import { MovieContext } from "../../context/movie.context";

const MovieHero = () => {
  const { movie } = useContext(MovieContext);
  return (
    <>
      {/* Mobile */}
      <div
        className="relative md:hidden w-full"
        style={{ height: "calc(180vw)" }}
      >
        <div className="absolute z-30 bottom-6 left-4">
          <MovieInfo />
        </div>

        {/* ADDING BLACK COLOR AT BOTTOM */}
        <div className="w-full h-56 bg-opacity-60 absolute bottom-0 bg-black z-10 "></div>

        {/* Background poster */}
        <div className="h-full">
          <img
            src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
            alt="poster"
            className="w-full h-full"
          />
        </div>
      </div>

      {/* Tablet */}
      <div
        className="relative hidden md:block lg:hidden h-full"
        style={{ height: "calc(85vw)" }}
      >
        <div className="absolute z-30 bottom-4 ">
          <MovieInfo />
        </div>

        {/* ADDING BLACK COLOR AT BOTTOM */}
        <div className="w-full h-48 bg-opacity-95 absolute bottom-0 bg-black z-10 "></div>

        {/* Background poster */}
        <img
          src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
          alt="poster"
          className="w-full h-full"
        />
      </div>

      {/* Lappy */}
      <div
        className="relative lg:block hidden w-full"
        style={{ height: "30rem" }}
      >
        {/* gradient for bg */}
        <div
          className="absolute h-full z-10 w-full"
          style={{
            backgroundImage:
              "linear-gradient(90deg, rgb(34, 34, 34) 24.97%, rgb(34, 34, 34) 38.3%, rgba(34, 34, 34, 0.04) 97.47%, rgb(34, 34, 34) 100%)",
          }}
        />

        {/* Poster */}
        <div className="z-30 left-28 top-12 absolute flex items-center ">
          <div className="w-64 h-96 mr-8">
            <img
              src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
              alt="poster"
              className="w-full h-full rounded-2xl"
            />
          </div>

          {/* movie info */}
          <div className=" z-30">
            <MovieInfo />
          </div>
        </div>

        {/*  background */}
        <img
          src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
          alt="poster"
          className="w-full h-full"
        />
      </div>
    </>
  );
};

export default MovieHero;
