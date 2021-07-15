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

      <div className="container mx-auto px-4 py-3">
        <h1 className="text-2xl font-bold text-grey-700 my-3">Premiers</h1>
        <h3 className="text-sm pb-3">Brand new releases every Friday</h3>
        <Premier />
      </div>
    </>
  );
};

export default HomePage;
