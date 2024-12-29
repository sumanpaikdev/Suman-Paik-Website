import React, { useContext, useState } from "react";
import "./header.css";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { Context } from "../Context";
import { HiOutlineShoppingBag } from "react-icons/hi";

function Header({ headerBG, bag, sp }) {
  const { exploreStatusToggle } = useContext(Context);
  const [fix, setFix] = useState(false);
  const setFixed = () => {
    window.scrollY >= 780 ? setFix(true) : setFix(false);
  };
  window.addEventListener("scroll", setFixed);

  return (
    <div className="overflow-hidden w-full h-auto sm:h-auto text-black">
      {/* <div className="w-full sm:h-[800px] h-[690px] relative text-black">
        <img
          src={headerBG}
          alt="headerBG"
          className="absolute w-full sm:h-[840px] h-[690px] object-cover sm:object-center object-top "
        />
      </div> */}
      <div
        className={
          fix
            ? "absolute top-0 text-gray-100 text-black flex items-center justify-between w-full sm:py-6 py-4 sm:px-21 px-8 🪄 🔥 special-navbar bullshit"
            : "absolute top-0 text-gray-100 text-black flex items-center justify-between w-full sm:py-6 py-4 sm:px-21 px-8 🪄 special-navbar"
        }
      >
        <div className="text-3xl">
          <p className="font-philo text-sm font-medium">
            Sp.SCREENPLAY
            {/* <img src={sp} alt="img" className="w-10 rounded-full"/> */}
          </p>
        </div>
        <div>
          <ul className="flex items-center">
            {/* <li className="text-md mr-12 md:block hidden hover:scale-110 duration-200"><AnchorLink href="/">ABOUT</AnchorLink></li> */}
            <li className="text-md mr-12 md:block hidden hover:scale-110 duration-200">
              <AnchorLink href="#bestseller">BESTSELLER</AnchorLink>
            </li>
            <li className="text-md mr-12 md:block hidden hover:scale-110 duration-200">
              <AnchorLink href="#collection">COLLECTION</AnchorLink>
            </li>
            <li>
            <img src={sp} alt="img" className="w-10 rounded-full"/>

              {/* <button onClick={exploreStatusToggle}>
                <HiOutlineShoppingBag className="w-11 hover:scale-110 duration-200 shopping-bag" />
              </button> */}
            </li>
          </ul>
        </div>
      </div>
      {/* <div className="absolute sm:40 top-40 sm:w-[700px] w-[280px] flex sm:items-center items-start sm:pt-32 sm:px-24 px-8 pt-20 "> */}
      <div className="static flex flex-col justify-center items-center sm:40 top-40 sm:pt-32 sm:px-24 px-8 pt-20 ">
        <div className=" text-black flex flex-col justify-center items-center">
          <p className="font-philo sm:text-6xl text-4xl sm:pt-0 pt-4">
            Sp.SCREENPLAY
          </p>
          <p className="sm:w-80 w-60 sm:text-lg text-xs mt-6 flex justify-center text-black">
            MOVIES | WEB SERIES
          </p>
          <div className="flex sm:flex-row flex-col justify-center mt-10">
            <button
              onClick={exploreStatusToggle}
              className="px-7 sm:mb-0 mb-6 py-3 text-sm font-semibold bg-green-600 rounded hover:bg-red-600 shadow-lg text-white"
            >
              Explore Shop
            </button>
            {/* <a href="javascript:void(0)" className="px-7 py-3 text-sm font-semibold border-2 border-gray-200 rounded backdrop-blur-md shadow-lg">LEARN MORE</a> */}
          </div>
        </div>
      </div>
    </div>
  );
}
export default Header;
