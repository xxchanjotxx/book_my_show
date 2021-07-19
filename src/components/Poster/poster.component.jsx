import React from "react";

const Poster = (props) => {
  return (
    <>
      <div className="flex flex-col items-start gap-2 px-2">
        <div className={`h-40 md:h-80 ${ props.premiere ? "h-80" : "h-20" }`}>
          <img
            src={props.src}
            alt={props.title}
            className="w-full h-full rounded-md md:rounded-xl"
          />
        </div>
        {/* TEMPELATE LITERAL TO MAKE TEXT WHITE IF BACKGORUND DARK, saying if dark then white else gray 700*/}
        <h3
          className={`text-lg font-bold ${
            props.isDark ? "text-white" : "text-gray-700 "
          }`}
        >
          {props.title}
        </h3>
        <p
          className={`text-sm ${
            props.isDark ? "text-white" : "text-gray-700 "
          }`}
        >
          {props.subtitle}
        </p>
      </div>
    </>
  );
};

export default Poster;
