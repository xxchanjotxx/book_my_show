import React from "react";
import Slider from "react-slick";

//components
import Poster from "../Poster/poster.component";
//configs
import PosterCarouselSettings from "../../config/posterCarousel.config";

const PosterSlider = (props) => {

  // checking if settings are being passed, and using them if they are else using default
  const sliderConfig = props.config ? props.config : PosterCarouselSettings;
  return (
    <>

    {/* checking dark background and using the title of the section */}
      <div className="flex flex-col items-start pl-3">
        <h1
          className={`text-2xl font-bold my-3 ${
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

        {/* Using Slider */}
      <Slider {...sliderConfig}>
        {props.images.map((image) => (
          // Renders a poster by passing an image
          <Poster {...image} isDark={props.isDark} premiere={props.premiere}/>
        ))}
      </Slider>
    </>
  );
};

export default PosterSlider;
