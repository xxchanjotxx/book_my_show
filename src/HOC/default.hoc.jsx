import React from "react";
import { Route } from "react-router-dom";

import DefaultLayout from "../Layouts/default.layout";

//passing props as demo so that there is no name clash 
const DefaultHOC = ({ component: Component, ...demo }) => {
  //const Component = component; same as component: Component 
  return (
    <>
      <Route
        {...demo}
        component={(props) => (
          <DefaultLayout>
            <Component {...props}/>
          </DefaultLayout>
        )}
      />
    </>
  );
};

export default DefaultHOC;
