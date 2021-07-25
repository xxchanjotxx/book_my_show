import React, { useContext } from "react";
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

// context
import { MovieContext } from "../../context/movie.context";

//for small
const NavSm = () => {
  //using the movie context data
  const { movie } = useContext(MovieContext);
  return (
    <>
      <div className="text-white flex items-center justify-between">
        <div>
          <h3 className="text-2xl font-bold">{movie.original_title}</h3>
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

const Nav2Lg = () => {
  return (
    <>
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center justify-between w-3/5 gap-5">
          {/* Left list */}
          <div className="flex items-center gap-3 text-gray-300 text-sm">
            <ul className="flex items-center gap-5 ">
              <li className="hover:text-white">Movies</li>
              <li className="hover:text-white">Stream</li>
              <li className="hover:text-white">
                {" "}
                <a href="/events">Events </a>{" "}
              </li>
              <li className="hover:text-white">
                {" "}
                <a href="/plays">Plays</a>{" "}
              </li>
              <li className="hover:text-white">
                {" "}
                <a href="/sports">Sports</a>{" "}
              </li>
              <li className="hover:text-white">
                {" "}
                <a href="/activities">Activities</a>{" "}
              </li>
              <li className="hover:text-white">Buzz</li>
            </ul>
          </div>
        </div>
        {/* Right list */}
        <div className="flex items-center flex-end gap-3 text-gray-300 text-sm">
          <ul className="flex items-center gap-5 ">
            <li className="hover:text-white">ListYourShow</li>
            <li className="hover:text-white">Corporates</li>
            <li className="hover:text-white">Offers</li>
            <li className="hover:text-white">Gift Cards</li>
          </ul>
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

      <nav
        className="py-4 px-4 hidden lg:block"
        style={{ backgroundColor: " #232639" }}
      >
        <div className="hidden lg:flex">
          <Nav2Lg />
        </div>
      </nav>
    </>
  );
};

export default MovieNavbar;
