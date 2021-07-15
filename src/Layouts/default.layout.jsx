import React from "react";
import HeroCarousel from "../components/Hero_Carousel/hero_carousel.component";

//importing navbar component
import Navbar from "../components/Navbar/navbar.component";

const DefaultLayout = (props) => {
  return (
    <>
      <Navbar />
      <HeroCarousel />
      {props.children}
    </>
  );
};

export default DefaultLayout;
