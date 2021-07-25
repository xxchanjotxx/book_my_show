import React, { useContext } from "react";

// context
import { MovieContext } from "../../context/movie.context";

const MovieInfo = () => {
  const { movie } = useContext(MovieContext);

  // for genres, its an array.

  /* Using optional chaining. It will first be checked if movies.genres is available, 
  if yes we will map and extract all the name to an array
  and remove the array and join them as a single string with , */

  const genres = movie.genres?.map(({ name }) => name).join(", ");
  const language = movie.spoken_languages?.map(({ name }) => name).join(", ");
  
  return (
    <>
      <div>
        {/* Premier line */}
        <div className="pb-4 flex items-center gap-3 mb-3 md:px-4 md:py-2">
          <div className="w-24 h-6">
            <img
              src="https://in.bmscdn.com/moviemode/tvod/premiere-tag.png"
              alt="Premier"
              className="h-full w-full"
            />
          </div>
          <span className="text-white rounded-2xl bg-navbar_color-50 p-1 text-sm">
            Streaming Now
          </span>
        </div>

        {/* title */}
        <h1 className="text-white lg:text-4xl font-semibold lg:mb-7 hidden lg:block px-4">
          {movie.original_title}
        </h1>

        {/* TO REVERSE IN MD AND SM AND NORMAL IN LARGE */}
        <div className="flex flex-col-reverse lg:flex-col ">
          {/* extra info */}
          <div className="md:px-4">
            <h4 className="text-gray-400 lg:mb-5 mb-4 ">
              {language} &bull; Languages:{" "}
              <span style={{ color: "#E5415E" }}>Audio(1), Subtitles(1)</span>{" "}
            </h4>
            <h4 className="text-gray-200 text-xs lg:text-base lg:mb-12">
              {(movie.runtime / 60).toFixed(2)} hrs &bull; {genres} &bull; 16+
              &bull; {movie.release_date}
            </h4>
          </div>

          {/* buttons */}
          <div className="flex item-center gap-3 mb-6 md:w-screen lg:w-full md:px-4 ">
            <button
              className="text-white lg:px-24 rounded-lg lg:py-3 px-11 py-2 md:w-full"
              style={{ backgroundColor: "#ED4163" }}
            >
              Rent ₹159
            </button>
            <button
              className="text-white lg:px-24 rounded-lg lg:py-3 px-11 py-2 md:w-full"
              style={{ backgroundColor: "#ED4163" }}
            >
              Buy ₹689
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieInfo;
