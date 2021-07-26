import React from "react";

//importing component
import Navbar from "../components/Navbar/navbar.component";
import HeroCarousel from "../components/Hero_Carousel/hero_carousel.component";

const DefaultLayout = (props) => {
  return (
    <>
      <Navbar />
      <HeroCarousel />
      {/* Rendering homepage here */}
      {props.children}
    </>
  );
};

export default DefaultLayout;
