import { Fragment } from "react";
import { Route, Redirect } from "react-router-dom";

// HOC
import HomeLayoutHOC from "./HOC/Home.Hoc";
import RestaurantLayoutHOC from "./HOC/Restaurant.HOC";

// Component
import Temp from "./Components/Temp";

// pages
import Home from "./Page/Home";

function App() {
  return (
    <Fragment>
      <Route path="/" exact>
        <Redirect to="/delivery" />
      </Route>
      {/* type is an url parameter */}
      {/* here we will pass the Master component, it will look for type parameter, depending on this type parameter it will render this component */}
      <HomeLayoutHOC path="/:type" exact component={Home} />
      <RestaurantLayoutHOC path="/restaurant/:id" exact component={Temp} />
    </Fragment>
  );
}

export default App;