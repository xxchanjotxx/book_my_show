import React from "react";

//component
import MovieInfo from "./MovieInfo.component";

const MovieHero = () => {
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

        <div className="h-full">
          <img
            src="https://in.bmscdn.com/iedb/movies/images/extra/vertical_logo/mobile/thumbnail/xxlarge/zack-snyder-s-justice-league-et00047164-10-04-2021-03-22-49.jpg"
            alt="poster"
            className="w-full h-full"
          />
        </div>
      </div>

      {/* Tablet */}
      <div
        className="relative hidden md:block lg:hidden h-full"
        style={{ height: "calc(100vw)" }}
      >
        {/* ADDING BLACK COLOR AT BOTTOM */}
        <div className="w-full h-56 bg-opacity-60 absolute bottom-0 bg-black z-10 "></div>

        <img
          src="https://in.bmscdn.com/iedb/movies/images/extra/vertical_logo/mobile/thumbnail/xxlarge/zack-snyder-s-justice-league-et00047164-10-04-2021-03-22-49.jpg"
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

        <div className="z-30 left-28 top-12 absolute flex items-center ">
          <div className="w-64 h-96 mr-8">
            <img
              src="https://in.bmscdn.com/iedb/movies/images/extra/vertical_logo/mobile/thumbnail/xxlarge/zack-snyder-s-justice-league-et00047164-10-04-2021-03-22-49.jpg"
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
          src="https://in.bmscdn.com/iedb/movies/images/extra/horizontal_no_logo/mobile/listing/xxlarge/zack-snyder-s-justice-league-et00047164-10-04-2021-03-22-49.jpg"
          alt="poster"
          className="w-full h-full"
        />
      </div>
    </>
  );
};

export default MovieHero;
