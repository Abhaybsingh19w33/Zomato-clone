// HOC
import HomeLayoutHOC from "./HOC/Home.Hoc";

// Component
import Temp from "./Components/temp";
import Master from "./Components/master";
import { Fragment } from "react";

function App() {
  return (
    <Fragment>
      <HomeLayoutHOC path="/" exact component={Temp} />
      {/* type is an url parameter */}
      {/* here we will pass the Master component, it will look for type parameter, depending on this type parameter it will render this component */}
      <HomeLayoutHOC path="/:type" exact component={Master} />
    </Fragment>
  );
}

export default App;