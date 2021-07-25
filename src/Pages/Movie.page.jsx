import React, { useContext, useEffect, useState } from "react";
//component
import MovieHero from "../components/Movie Hero/MovieHero.component";
import Cast from "../components/Cast/Cast.component";
import PosterSlider from "../components/PosterSlider/posterSlider.component";
//config
import PremierImages from "../config/TempPosters.config";
// icons
import { SiApplepay, SiGooglepay } from "react-icons/si";
// context
import { MovieContext } from "../context/movie.context";
// axios
import axios from "axios";
// useparams
import { useParams } from "react-router-dom";
// slider
import Slider from "react-slick";

const MoviePage = () => {
  // getting movie id
  const { id } = useParams();

  //getting data
  const { movie } = useContext(MovieContext);

  // setting the cast data
  const [cast, setCast] = useState([]);
  // setting the similar movies data
  const [similarMovies, setSimilarMovies] = useState([]);
  // setting the recommended movies data
  const [recommended, setRecommended] = useState([]);

  useEffect(() => {
    const requestCast = async () => {
      const getCast = await axios.get(`/movie/${id}/credits`);

      setCast(getCast.data.cast);
    };
    requestCast();
  }, [id]);

  useEffect(() => {
    const requestSimilarMovies = async () => {
      const getSimilarMovies = await axios.get(`/movie/${id}/similar
      `);

      setSimilarMovies(getSimilarMovies.data.results);
    };
    requestSimilarMovies();
  }, [id]);

  useEffect(() => {
    const requestRecommendedMovies = async () => {
      const getRecommendedMovies = await axios.get(`/movie/${id}/recommendations
      `);

      setRecommended(getRecommendedMovies.data.results);
    };

    requestRecommendedMovies();
  }, [id]);

  // settings for carousels in movie pages
  const settings = {
    infinity: false,
    speed: 500,
    slidesToShow: 3,
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
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  };
  // settings for cast carousels in movie pages
  const settingsCast = {
    infinity: false,
    speed: 500,
    slidesToShow: 6,
    autoplay: false,
    slidesToScroll: 6,
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
          slidesToShow: 4,
          slidesToScroll: 2,
          InitialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      {/* Movie hero poster */}
      <MovieHero />

      {/* Rest of the page */}

      <div className="container lg:ml-24 px-4 my-5 lg:w-2/3">
        {/* About the movie */}
        <div className="flex flex-col items-start gap-3">
          <h2 className="font-bold text-2xl mt-5">About the Movie</h2>
          <p>{movie.overview}</p>
        </div>

        <div className="my-10">
          <hr />
        </div>

        {/* Coupons */}
        <div className="my-10">
          <h3 className="font-semibold text-2xl mb-5">Applicable Offers</h3>
          <div className="flex flex-col gap-4 lg:flex-row">
            {/* one coupon with logo and content */}
            <div className="flex gap-3 bg-yellow-100 p-3 border-yellow-400 border-dashed border-2 rounded-lg ">
              <div className="w-16 h-12">
                <SiApplepay className="w-full h-full" />
              </div>
              <div className="flex items-start flex-col">
                <h3 className="font-medium">ApplePay Stream Offer</h3>
                <p className="text-sm text-gray-600">
                  Get 50% off up to INR 150 on all RuPay cards* on BookMyShow
                  Stream.
                </p>
              </div>
            </div>

            {/* one coupon with logo and content */}
            <div className="flex gap-3 bg-yellow-100 p-3 border-yellow-400 border-dashed border-2 rounded-lg ">
              <div className="w-16 h-12">
                <SiGooglepay className="w-full h-full" />
              </div>
              <div className="flex items-start flex-col">
                <h3 className="font-medium">GooglePay Stream Offer</h3>
                <p className="text-sm text-gray-600">
                  Get Rs.75* off on 3 movies you buy/rent on Stream. Buy Filmy
                  Pass @Rs.99
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="my-10">
          <hr />
        </div>

        {/* Cast */}
        <div>
          <h3 className="font-semibold text-2xl mb-5">Cast</h3>

          <Slider {...settingsCast}>
            {/* Using map for extracting each cast image */}
            {cast.map((cast) => (
              <Cast
                image={`https://image.tmdb.org/t/p/original/${cast.profile_path}`}
                castName={cast.original_name}
                role={cast.character}
              />
            ))}
          </Slider>
        </div>

        <div className="my-10">
          <hr />
        </div>

        {/* creating a poster slider with custom settings */}
        <div>
          <PosterSlider
            config={settings}
            images={similarMovies}
            title="You Might Also Like"
            isDark={false}
          />
        </div>

        <div className="my-10">
          <hr />
        </div>

        <div>
          <PosterSlider
            config={settings}
            images={recommended}
            title="BMS Exclusive"
            isDark={false}
          />
        </div>
      </div>
    </>
  );
};

export default MoviePage;
