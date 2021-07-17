import React from "react";
import Slider from "react-slick";

import Poster from "../Poster/poster.component";

//configs
import PosterCarouselSettings from "../../config/posterCarousel.config";
import PremierImages from "../../config/TempPosters.config";

const Premier = () => {
  
  return (
    <>
      <div className="flex flex-col items-start pl-3">
        <h1 className="text-2xl font-bold text-white my-3">Premiers</h1>
        <h3 className="text-sm pb-3 text-white">
          Brand new releases every Friday
        </h3>
      </div>

      <Slider {...PosterCarouselSettings}>
        {PremierImages.map((image) => (
          <Poster {...image} isDark />
        ))}
      </Slider>
    </>
  );
};

export default Premier;
