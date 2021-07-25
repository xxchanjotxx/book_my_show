import React, { useState, useEffect } from "react";

// axios
import axios from "axios";
//components
import EntertainmentCardSlider from "../components/Entertainment/entertaimentCard.component";
import PosterSlider from "../components/PosterSlider/posterSlider.component";

//config
import PremierImages from "../config/TempPosters.config";

const HomePage = () => {
  // Movies for the premier page
  const [popularMovies, setPopularMovies] = useState([]);
  // Movies for Top Rated Movies
  const [topRatedMovies, setTopRatedMovies] = useState([]);
  // Movies for Upcoming Movies
  const [upcomingMovies, setUpcomingMovies] = useState([]);

  // FOR PREMIER MOVIES
  useEffect(() => {
    const requestPopularMovies = async () => {
      const getPopularMovies = await axios.get("/movie/popular");
      setPopularMovies(getPopularMovies.data.results);
    };

    requestPopularMovies();
  }, []);

  // FOR TOP RATED MOVIES
  useEffect(() => {
    const requestTopRatedMovies = async () => {
      const getTopRatedMovies = await axios.get("/movie/top_rated");
      setTopRatedMovies(getTopRatedMovies.data.results);
    };

    requestTopRatedMovies();
  }, []);

  // FOR UPCOMING MOVIES
  useEffect(() => {
    const requestUpcomingMovies = async () => {
      const getUpcomingMovies = await axios.get("/movie/upcoming");
      setUpcomingMovies(getUpcomingMovies.data.results);
    };

    requestUpcomingMovies();
  }, []);

  // setttings for premiere 1 and rest 3
  const settings = {
    infinity: false,
    speed: 500,
    slidesToShow: 5,
    autoplay: false,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          InitialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      {/* Entertainment Section */}
      <div className="container mx-auto px-4 mt-20">
        <h1 className="text-2xl font-bold text-grey-700 my-3">
          {" "}
          The best of Entertainment
        </h1>
        <EntertainmentCardSlider />
      </div>

      <div className="bg-premiere-800 w-full mt-20 pb-8">
        <div className="container mx-auto px-4 py-3">
          {/* HIDING FOR MOBILE AND DISPLAYING FOR MEDIUM AND HIGHER */}
          <div className="hidden flex items-center justify-between mb-8 md:flex">
            <div>
              <img
                src="https://in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120/premiere-rupay-banner-web-collection-202104230555.png"
                alt="Preview"
                className="w-full h-full"
              />
            </div>
          </div>

          {/* Making premiere posters here by passing the movie poster from API and then go to Poster 
          and refer to the changes */}
          <PosterSlider
            premiere={true}
            config={settings}
            images={popularMovies}
            title="Premiers"
            subtitle="Brand new releases every Friday"
            isDark={true}
          />
        </div>
      </div>

      <div className="container mx-auto px-4 py-3 m-14">
        <PosterSlider
          images={topRatedMovies}
          title="Top Rated Movies"
          isDark={false}
        />
      </div>

      <div className="container mx-auto px-4 py-3 m-14">
        <PosterSlider
          images={upcomingMovies}
          title="Upcoming Movies"
          isDark={false}
        />
      </div>
    </>
  );
};

export default HomePage;
