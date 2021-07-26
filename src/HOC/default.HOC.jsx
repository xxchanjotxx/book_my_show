import React from "react";
import { Route } from "react-router-dom";

import DefaultLayout from "../Layouts/default.layout";

//passing props as demo so that there is no name clash
const DefaultHOC = ({ component: Component, ...demo }) => {
  //const Component = component; same as component: Component
  // here component is "homepage" and demo is "exact" and "path"
  return (
    <>
      {/* Routing and using path and exact */}
      <Route
        {...demo}
        component={(props) => {
          return (
            <DefaultLayout>
              {/* Renders the homepage as the component */}
              <Component {...props} />
            </DefaultLayout>
          );
        }}
      />
    </>
  );
};

export default DefaultHOC;
