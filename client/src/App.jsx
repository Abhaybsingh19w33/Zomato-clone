// HOC
import HomeLayoutHOC from "./HOC/Home.Hoc";

// Component
import Temp from "./Components/temp";
import { Fragment } from "react";

function App() {
  return (
    <Fragment>
      <HomeLayoutHOC path="/" exact component={Temp} />
    </Fragment>
  );
}

export default App;