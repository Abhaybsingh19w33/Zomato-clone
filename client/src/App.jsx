import { Fragment } from "react";
import { Route, Redirect } from "react-router-dom";

// HOC
import HomeLayoutHOC from "./HOC/Home.Hoc";
import RestaurantLayoutHOC from "./HOC/Restaurant.HOC";

// Component
import Temp from "./Components/Temp";
import Overview from "./Page/Restaurant/Overview";

// pages
import Home from "./Page/Home";

function App() {
  return (
    <Fragment>
      <Route path="/" exact>
        <Redirect to="/delivery" />
      </Route>
      <Route path="/restaurant/:id" exact>
        <Redirect to="/restaurant/:id/overview" />
      </Route>
      {/* type is an url parameter */}
      {/* here we will pass the Master component, it will look for type parameter, depending on this type parameter it will render this component */}
      <HomeLayoutHOC path="/:type" exact component={Home} />
      {/* <RestaurantLayoutHOC path="/restaurant/:id" exact component={Temp} /> */}
      <RestaurantLayoutHOC
        path="/restaurant/:id/overview"
        exact
        component={Overview}
      />
      <RestaurantLayoutHOC
        path="/restaurant/:id/order-online"
        exact
        component={Temp}
      />
      <RestaurantLayoutHOC path="/restaurant/:id/menu" exact component={Temp} />
      <RestaurantLayoutHOC
        path="/restaurant/:id/reviews"
        exact
        component={Temp}
      />
      <RestaurantLayoutHOC
        path="/restaurant/:id/photos"
        exact
        component={Temp}
      />
    </Fragment>
  );
}

export default App;