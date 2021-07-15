import { Route } from "react-router-dom";
//importing HOC

import DefaultHOC from "./HOC/default.hoc";

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


//importing Home from componennt
import HomePage from "./Pages/Home.page";

function App() {
  return (
    <>
      <DefaultHOC path="/" exact component={HomePage} />
    </>
  );
}

export default App;
