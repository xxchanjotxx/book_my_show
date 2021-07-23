import axios from "axios";
import React, { useState, useEffect } from "react";
import HeroSlider from "react-slick";

//importing arrows
import { NextArrow, PrevArrow } from "./arrows.components";

const HeroCarousel = (props) => {
  //creating a state for images. Empty array so that it makes API call only once
  const [images, setImages] = useState([]);

  //calling the data from the api in a function. It is called side-effect in react
  useEffect(() => {
    // async call. This is a race condition. If async was used in useEffect, the even chain will be messed up because something else will be executed
    const requestNowPlaying = async () => {
      const getImages = await axios.get("/movie/now_playing");
      setImages(getImages.data.results);
    };

    //requesting it later after the response is recieved
    requestNowPlaying();
  }, []);

  // Settings for LG
  const settingsLG = {
    arrows: true,
    autoplay: true,
    centerMode: true,
    centerPadding: "300px",
    slidesToShow: 1,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  // Settings
  const settings = {
    arrows: true,
    centerPadding: "300px",
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <>
      {/* Slider for mobile */}
      <div className="lg:hidden overflow-x-hidden ">
        <HeroSlider {...settings}>
          {images.map((image) => (
            <div className="w-full h-56 md:h-80 py-3 ">
              {/* Using template literal for API poster */}
              <img
                src={`https://image.tmdb.org/t/p/original${image.backdrop_path}`}
                alt="demo"
                className="w-full h-full rounded"
              />
            </div>
          ))}
        </HeroSlider>
      </div>

      {/* Slider for Lg */}
      <div className="hidden lg:block overflow-x-hidden">
        <HeroSlider {...settingsLG}>
          {images.map((image) => (
            <div className="w-full h-96 py-3 px-2 m-0">
              <img
                src={`https://image.tmdb.org/t/p/original${image.backdrop_path}`}
                alt="demo"
                className="w-full h-full rounded"
              />
            </div>
          ))}
        </HeroSlider>
      </div>
    </>
  );
};

export default HeroCarousel;
