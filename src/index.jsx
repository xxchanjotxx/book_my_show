import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";

// importing context provider
import MovieProvider from "./context/movie.context";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      {/* Getting the Movie provider from the context to provide API to everyone */}
      <MovieProvider>
        <App />
      </MovieProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
