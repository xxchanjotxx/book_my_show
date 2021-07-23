import axios from "axios";
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
import SportsPage from "./Pages/Sports.page";
import EventsPage from "./Pages/Events.page";
import ActivitiesPage from "./Pages/Activities.page";

//axios default settings
axios.defaults.baseURL = "https://api.themoviedb.org/3";

// creating empty object for params to work
axios.defaults.params = {};
axios.defaults.params["api_key"] = process.env.REACT_APP_API_KEY;

function App() {
  return (
    <>
      <DefaultHOC path="/" exact component={HomePage} />
      <MovieHOC path="/movie/:id" exact component={MoviePage} />
      <DefaultHOC path="/plays" exact component={PlaysPage} />
      <DefaultHOC path="/sports" exact component={SportsPage} />
      <DefaultHOC path="/events" exact component={EventsPage} />
      <DefaultHOC path="/activities" exact component={ActivitiesPage} />
    </>
  );
}

export default App;
