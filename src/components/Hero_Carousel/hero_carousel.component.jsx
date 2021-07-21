import axios from "axios";
import React from "react";
import HeroSlider from "react-slick";


//importing arrows
import { NextArrow, PrevArrow } from "./arrows.components";

const HeroCarousel = (props) => {
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

  // images for the hero carousel
  const images = [
    "https://in.bmscdn.com/promotions/cms/creatives/1625110474952_streammoviepage.jpg",
    "https://in.bmscdn.com/promotions/cms/creatives/1626372121139_bsm_1280x500_romcom_1.jpg",
  ];

  return (
    <>
      {/* Slider for mobile */}
      <div className="lg:hidden overflow-x-hidden ">
        <HeroSlider {...settings}>
          {images.map((image) => (
            <div className="w-full h-56 md:h-80 py-3 ">
              <img src={image} alt="demo" className="w-full h-full rounded" />
            </div>
          ))}
        </HeroSlider>
      </div>

      {/* Slider for Lg */}
      <div className="hidden lg:block overflow-x-hidden">
        <HeroSlider {...settingsLG}>
          {images.map((image) => (
            <div className="w-full h-96 py-3 px-2 m-0">
              <img src={image} alt="demo" className="w-full h-full rounded" />
            </div>
          ))}
        </HeroSlider>
      </div>
    </>
  );
};

export default HeroCarousel;
