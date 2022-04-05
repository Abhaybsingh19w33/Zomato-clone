import React, { Fragment } from "react";

// Components
import Navbar from "../Components/Navbar";


const HomeLayout = (props) => {
  return (
    <Fragment>
      <Navbar />

      {/* here css is applied in small device to medium devices then large devices */}
      {/* container - the parent elements of other components in a React app */}
      {/* mx-auto - To center a container, use the mx-auto */}
      {/* here middium device is not specified right now so px-4 is considered for small and medium screen size devices and also for large screen devices */}
      {/* px-4 - padding of 4 from left and right */}

      {/* then lg - is used to add css for large screen devices */}
      {/* px-20 - is defined for larger screen sizes */}
      {/* <div className="container mx-auto px-4 lg:px-20 ">{props.children}</div>       */}

      {/* this css is not for navbar, but the content in main   */}
      <div className="container mx-auto px-4 lg:px-20 ">{props.children}</div>      
    </Fragment>
  );
};

export default HomeLayout;