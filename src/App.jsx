import { Route } from "react-router-dom";

//importing HOC
import MovieHOC from "./HOC/movie.HOC";
import DefaultHOC from "./HOC/default.HOC";

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

//importing pages
import HomePage from "./Pages/Home.page";
import MoviePage from "./Pages/Movie.page";
import PlaysPage from "./Pages/Plays.page";

function App() {
  return (
    <>
      <DefaultHOC path="/" exact component={HomePage} />
      <MovieHOC path="/movie/:id" exact component={MoviePage} />
      <DefaultHOC path="/plays" exact component={PlaysPage} />
    </>
  );
}

export default App;
