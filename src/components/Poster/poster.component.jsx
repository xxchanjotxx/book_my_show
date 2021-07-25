import React from "react";

// CREATING POSTER AS A LINK WHICH WILL LEAD TO ITS OWN PAGE WRT ID
import { Link } from "react-router-dom";

const Poster = (props) => {
  return (
    // will redirect to movie/id wrt to id
    <Link to={`/movie/${props.id}`}>
      {/* Rendering a poster and adjusting if its a premiere for mobile */}
      <div className="flex flex-col items-start gap-2 px-2">
        {/* making an image */}
        <div className={`h-40 md:h-80 ${props.premiere ? "h-80" : "h-20"}`}>
          <img
            // using the baseurl of the API
            src={`https://image.tmdb.org/t/p/original${props.poster_path}`}
            alt={props.original_title}
            className="w-full h-full rounded-md md:rounded-xl"
          />
        </div>
        {/* TEMPELATE LITERAL TO MAKE TEXT WHITE IF BACKGORUND DARK, saying if dark then white else gray 700*/}

        {/* Title for movie */}
        <h3
          className={`text-lg font-bold ${
            props.isDark ? "text-white" : "text-gray-700 "
          }`}
        >
          {props.original_title}
        </h3>

        {/* Location if any */}
        <h3
          className={`text-sm font-semibold ${
            props.isDark ? "text-white" : "text-gray-700 "
          }`}
        >
          {props.location}
        </h3>

        {/* Subtitle for movie */}
        <p
          className={`text-xs ${
            props.isDark ? "text-white" : "text-gray-700 "
          }`}
        >
          {props.subtite}
        </p>
      </div>
    </Link>
  );
};

export default Poster;
