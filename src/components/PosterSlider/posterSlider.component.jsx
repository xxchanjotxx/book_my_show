import React from "react";
import Slider from "react-slick";

//components
import Poster from "../Poster/poster.component";
//configs
import PosterCarouselSettings from "../../config/posterCarousel.config";

const PosterSlider = (props) => {
  return (
    <>
      <div className="flex flex-col items-start pl-3">
        <h1
          className={`text-2xl font-bold my-3${
            props.isDark ? "text-white" : "text-gray-700"
          }`}
        >
          {props.title}
        </h1>
        
        <h3
          className={`text-sm pb-3 ${
            props.isDark ? "text-white" : "text-gray-700"
          }`}
        >
          {props.subtitle}
        </h3>
      </div>

      <Slider {...PosterCarouselSettings}>
        {props.images.map((image) => (
          <Poster {...image} isDark={props.isDark} />
        ))}
      </Slider>
    </>
  );
};

export default PosterSlider;
