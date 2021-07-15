import { Route } from "react-router-dom";
//importing HOC

import DefaultHOC from "./HOC/default.hoc";

//importing temp from componennt
import Temp from "./components/temp";
function App() {
  return (
    <>
      <DefaultHOC path="/" exact component={Temp} />
    </>
  );
}

export default App;
