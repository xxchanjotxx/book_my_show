import React from "react";

//components
import EntertainmentCardSlider from "../components/Entertainment/entertaimentCard.component";
import PosterSlider from "../components/PosterSlider/posterSlider.component";

//config
import PremierImages from "../config/TempPosters.config";

const HomePage = () => {
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
          <PosterSlider
            premiere={true}
            config={settings}
            images={PremierImages}
            title="Premiers"
            subtitle="Brand new releases every Friday"
            isDark={true}
          />
        </div>
      </div>

      <div className="container mx-auto px-4 py-3 m-14">
        <PosterSlider
          images={PremierImages}
          title="Online Streaming Events"
          isDark={false}
        />
      </div>

      <div className="container mx-auto px-4 py-3 m-14">
        <PosterSlider
          images={PremierImages}
          title="Outdoor Events"
          isDark={false}
        />
      </div>
    </>
  );
};

export default HomePage;
