import React from "react";

import EntertainmentCardSlider from "../components/Entertainment/entertaimentCard.component";
import Premier from "../components/Premier/premier.component";

const HomePage = () => {
  return (
    <>
      <div className="container mx-auto px-4">
        <h1 className="text-2xl font-bold text-grey-700 my-3">
          {" "}
          The best of Entertainment
        </h1>
        <EntertainmentCardSlider />
      </div>
      <Premier />
    </>
  );
};

export default HomePage;
