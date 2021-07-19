//component
import MovieHero from "../components/Movie Hero/MovieHero.component";
import Cast from "../components/Cast/Cast.component";
import PosterSlider from "../components/PosterSlider/posterSlider.component";

//config
import PremierImages from "../config/TempPosters.config";


import { SiApplepay, SiGooglepay } from "react-icons/si";
const MoviePage = () => {

  // settings for movie carousal
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

  
  return (
    <>
      <MovieHero />
      <div className="container lg:ml-24 px-4 my-5 lg:w-2/3">
        <div className="flex flex-col items-start gap-3">
          <h2 className="font-bold text-2xl mt-5">About the Movie</h2>
          <p>
            Bruce Wayne and Diana Prince try to bring the metahumans of Earth
            together after the death of Clark Kent. Meanwhile, Darkseid sends
            Steppenwolf to Earth with an army to subjugate humans.
          </p>
        </div>

        <div className="my-10">
          <hr />
        </div>

        <div className="my-10">
          <h3 className="font-semibold text-2xl mb-5">Applicable Offers</h3>
          <div className="flex flex-col gap-4 lg:flex-row">
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

        <div>
        <h3 className="font-semibold text-2xl mb-5">Cast</h3>
          <div className="flex flex-wrap gap-6">
           <Cast
              image="https://in.bmscdn.com/iedb/artist/images/website/poster/large/ben-affleck-292-12-09-2017-05-12-16.jpg"
              castName="Ben Affleck"
              role="Batman"
            />
            <Cast
              image="https://in.bmscdn.com/iedb/artist/images/website/poster/large/henry-cavill-23964-04-05-2020-04-25-14.jpg"
              castName="Henry Cavil"
              role="Superman"
            />
            <Cast
              image="https://in.bmscdn.com/iedb/artist/images/website/poster/large/gal-gadot-11088-17-10-2017-11-45-36.jpg"
              castName="Gal Gadot"
              role="Wonder Woman"
            />
          </div>
        </div>

        <div className="my-10">
          <hr />
        </div>


        <div>
        <PosterSlider
          config={settings}
          images={PremierImages}
          title="You Might Also Like"
          isDark={false}
        />
      </div>
      </div>
    </>
  );
};

export default MoviePage;
