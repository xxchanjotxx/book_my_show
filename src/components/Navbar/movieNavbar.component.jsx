import React from "react";
//importing react icons
import {
  BiChevronDown,
  BiChevronRight,
  BiSearch,
  BiMenu,
  BiChevronsDown,
  BiChevronLeft,
  BiShareAlt,
} from "react-icons/bi";

//for small
const NavSm = () => {
  return (
    <>
      <div className="text-white flex items-center justify-between">
        <div>
          <h3 className="text-2xl font-bold">It All Starts Here!</h3>
        </div>
        <div className="w-6 h-6">
          <BiShareAlt className="w-full h-full" />
        </div>
      </div>
    </>
  );
};
//for large
const NavLg = () => {
  return (
    <>
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center w-3/5 gap-5">
          <div className="w-12 h-12">
            <img
              src="https://i.ibb.co/zPBYW3H/imgbin-bookmyshow-office-android-ticket-png.png"
              alt="logo"
              className="w-full h-full"
            />
          </div>

          <div className="w-full flex items-center gap-4 bg-white p-2 rounded-md">
            <BiSearch className="w-5 h-5" />
            <input
              type="search"
              className="w-full py-2 bg-transparent border-none focus:outline-none"
              placeholder="Search for Movies, Events, Plays, Sports and Activities"
            />
          </div>
        </div>

        <div className="flex items-center justify-evenly gap-6">
          <span className="text-gray-200 text-xs flex items-center hover:text-white cursor-pointer">
            Mumbai <BiChevronDown />
          </span>

          <button className="bg-red-600 text-white px-2 py-1 text-sm rounded">
            Sign in
          </button>
          <div className="w-8 h-8 ">
            <BiMenu className="w-full h-full text-white" />
          </div>
        </div>
      </div>
    </>
  );
};

const MovieNavbar = () => {
  return (
    <>
      <nav className="absolute inset-x-0 z-30 bg-opacity-10 backdrop-filter backdrop-blur-lg lg:relative lg:bg-navbar_color-700 px-4 py-5">
        {/* Hides everything from medium and above. for mobile */}
        <div className="md:hidden">
          {/*Rendering here*/}
          <NavSm />
        </div>
        {/*for medium */}
        <div className="hidden md:block lg:hidden">
          <NavSm />
        </div>
        {/*large screen*/}
        <div className="hidden lg:flex">
          <NavLg />
        </div>
      </nav>
    </>
  );
};

export default MovieNavbar;
