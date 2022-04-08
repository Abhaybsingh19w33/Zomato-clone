import React, { Fragment, useState } from "react";
import { FaUserAlt } from "react-icons/fa";
import { HiLocationMarker } from "react-icons/hi";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import { RiSearch2Line } from "react-icons/ri";
import { useSelector, useDispatch } from "react-redux";
import gravatar from "gravatar";

// components
import SignIn from "../Auth/SignIn";
import SignUp from "../Auth/SignUp";

// redux actions
import { signOut } from "../../Redux/Reducer/Auth/Auth.action";

const MobileNav = ({ SignIn, SignUp }) => {
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);

  const dispatch = useDispatch();

  const reduxState = useSelector((global) => global.user.user);

  const signOutHandler = () => dispatch(signOut());

  return (

    // flex - it will help organize the logo and buttons

    // w-full - width to full
    // items-center
    // justify-between - adding spaces between the items

    // for large screen
    // hide this nav for large devices
    <div className="flex w-full items-center justify-between lg:hidden">
      {/* w-28 reducing width size of entire div */}
      <div className="w-28">
        <img
          src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"
          alt="logo"
          // h-full - height full
          // w-full - width full
          className="w-full h-full"
        />
      </div>
      {/* flex need to be added iin both parent and child nodes */}

      {/* flex - it is used to organize the widgets here it is used to align the logo and buttons */}
      {/* gap-3 - add gap in between both buttons */}
      <div className="flex items-center gap-3 relative">
        {/* text-white - setting text color to white */}
        {/* py-2 setting padding from top and bottom by 2 */}
        {/* px-3 - padding to left and right by 3 */}
        {/* rounded-full - to round the edges */}
        <button className="bg-zomato-400 text-white py-2 px-3 rounded-full">
          Use App
        </button>
        {/* border - adding border */}
        {/* p-2 - padding of 2 from all sides */}
        {/* border-gray-300 - adding border of gray color */}
        {/* text-zomato-400 -changing color of the icon */}
        {/* rounded-full - rounding the edges */}
        {reduxState?.user?.fullname ? (
          <Fragment>
            {" "}
            <div
              onClick={() => setIsDropDownOpen((prev) => !prev)}
              className="border p-2 border-gray-300 text-zomato-400 w-20 h-20 rounded-full"
            >
              <img
                src={gravatar.url(reduxState?.user?.email)}
                alt={reduxState?.user?.email}
                className="w-full h-full rounded-full object-cover"
              />
            </div>
            {isDropDownOpen && (
              <div className="absolute shadow-lg py-3 -bottom-20 -right-4 w-full bg-white z-20 flex flex-col gap-2">
                <button onClick={signOutHandler}>Sign Out</button>
              </div>
            )}
          </Fragment>
        ) : (
          <Fragment>
            <span
              onClick={() => setIsDropDownOpen((prev) => !prev)}
              className="border p-2 border-gray-300 text-zomato-400 rounded-full"
            >
              <FaUserAlt />
            </span>
            {isDropDownOpen && (
              <div className="absolute shadow-lg py-3 -bottom-20 -right-4 w-full bg-white z-20 flex flex-col gap-2">
                <button onClick={SignIn}>Sign In</button>
                <button onClick={SignUp}>Sign Up</button>
              </div>
            )}
          </Fragment>
        )}
      </div>
    </div>
  );
};

const LargeNav = ({ SignIn, SignUp }) => {

  const [isDropDownOpen, setIsDropDownOpen] = useState(false);
  const dispatch = useDispatch();
  const reduxState = useSelector((global) => global.user.user);
  const signOutHandler = () => dispatch(signOut());

  return (
    <Fragment>
      {/* hidden - hidden for small and medium screen size */}

      {/* for large scrren */}
      {/* inline setting them to inline */}
      {/* container */}
      {/* px-20 - adding padding of 20 from left and right */}
      {/* mx-auto - to center the elements in container */}
      <div className="hidden lg:inline container px-20 mx-auto">
        {/* flex - to facilitate children nodes to access flex without ant issue*/}
        {/* gap-4 - gap of 4 between logo and search bar */}
        {/* justify-around - adding proper space all element to fill the container properly */}
        <div className="hidden gap-4 w-full items-center justify-around lg:flex ">
          <div className="w-28">
            <img
              src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"
              alt="logo"
              className="w-full h-full"
            />
          </div>
          {/* w-3/4 - width too be 3/4 of remaining size */}
          {/* bg-white  */}
          {/* shadow-md - adding medium shadow*/}
          {/* p-3 - adding padding of 3 to all sides */}

          {/* flex - to allign the items */}
          {/* items-center */}
          {/* gap-3 */}
          {/* rounded - round the edge */}
          <div className=" w-3/4 bg-white shadow-md p-3 flex items-center gap-3 border border-gray-200 rounded">
            {/* flex - to align all three widgets */}
            {/* items-center - aligning them to center */}
            {/* gap-2 adding gap of 2 */}
            {/* border-r-2 - adding border of 2px on right side */}
            {/* pr-2 - padding to right of 2 */}
            <div className="flex items-center gap-2 border-r-2 border-gray-300 pr-2">
              {/* adding location icon */}
              <span className="text-zomato-400">
                <HiLocationMarker />
              </span>

              {/* adding input textbox */}
              <input
                type="text"
                placeholder="Vapi"
                className=" focus:outline-none"
              />

              {/* adding dropd down arrow */}
              <IoMdArrowDropdown />
            </div>


            {/* now adding text to location and searxh text  */}
            {/* items-center */}
            {/* gap-2 */}
            <div className="flex w-full items-center gap-2">

              {/* adding search line */}
              <RiSearch2Line />
              {/* adding search text on search line */}
              <input
                type="search"
                placeholder="Search for restaurant, cuisine or a dish"
                className="w-full focus:outline-none"
              />
            </div>
          </div>

          {/* ml-28 - margin of 28 to left  */}
          {/* flex - to align widgets */}
          {/* gap-4 - adding gap in between*/}
          {/* <div className="ml-28 flex gap-4"> */}

          {/* text-xl - xl size of text */}
          {/* hover:text-gray-800 - on hover change color of text to gray-800*/}
          {reduxState?.user?.fullname ? (
            <div className="relative w-20">
              {" "}
              <div
                onClick={() => setIsDropDownOpen((prev) => !prev)}
                className="border p-2 border-gray-300 text-zomato-400 w-full h-20 rounded-full"
              >
                <img
                  src={gravatar.url(reduxState?.user?.email)}
                  alt={reduxState?.user?.email}
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
              {isDropDownOpen && (
                <div className="absolute shadow-lg py-3  -right-4 w-full bg-white z-30 flex flex-col gap-2">
                  <button onClick={signOutHandler}>Sign Out</button>
                </div>
              )}
            </div>
          ) : (
            <div className="ml-28 flex gap-4 ">
              <button
                onClick={SignIn}
                className="text-gray-500 text-xl hover:text-gray-800"
              >
                Login
              </button>
              <button
                onClick={SignUp}
                className="text-gray-500 text-xl hover:text-gray-800"
              >
                Signup
              </button>
            </div>
          )}
        </div>
      </div>
    </Fragment>
  );
};

const Navbar = () => {
  const [openSignin, setOpenSignin] = useState(false);
  const [openSignup, setOpenSignup] = useState(false);

  const openSignInmodal = () => setOpenSignin(true);
  const openSignUpmodal = () => setOpenSignup(true);
  return (
    <Fragment>
      {/* p-4 adding padding of 4 from all sides */}
      {/* flex- to align items */}
      {/* bg-white - setting background to white */}
      {/* shadow-md - adding medium size shadow to navbar */}

      {/* for large screen devices */}
      {/* lg:shadow-none - removing shadow from large screen devices */}
      {/* w-full width to full for large screen size */}
      {/* items-center - alligning items to center */}
      <SignIn isOpen={openSignin} setIsOpen={setOpenSignin} />
      <SignUp isOpen={openSignup} setIsOpen={setOpenSignup} />

      <nav className="p-4 flex bg-white shadow-md lg:shadow-none w-full items-center">
        <MobileNav SignIn={openSignInmodal} SignUp={openSignUpmodal} />
        <LargeNav SignIn={openSignInmodal} SignUp={openSignUpmodal} />
      </nav>
    </Fragment>
  );
};

export default Navbar;