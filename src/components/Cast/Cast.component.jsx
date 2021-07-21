import React from "react";

const Cast = (props) => {
  return (
    <div>
      <div className="flex flex-col items-center">
        {/* making pic circle */}
        <div className="w-28 h-28">
          <img
            src={props.image}
            alt="actor"
            className="w-full h-full rounded-full"
          />
        </div>
        <h1 className="text-xl font-normal">{props.castName}</h1>
        <h5 className="text-gray-700 text-sm font-medium"> as {props.role}</h5>
      </div>
    </div>
  );
};

export default Cast;
