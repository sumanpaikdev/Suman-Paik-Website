import "./header.css";
import AnchorLink from "react-anchor-link-smooth-scroll";

function Header({ sp }) {
  return (

    <div className="overflow-hidden w-full h-auto sm:h-auto text-white  ">

      <div className="absolute top-0 flex items-center justify-between w-full sm:py-6 py-4 sm:px-21 px-8 🪄 special-navbar">
        
        <div className="text-3xl">
          <p className="font-philo text-sm font-medium">Sp.SCREENPLAY</p>
        </div>
        <div>
          <ul className="flex items-center">
            <li className="text-md mr-12 md:block hidden hover:scale-110 duration-200">
              <AnchorLink href="#bestseller">BESTSELLER</AnchorLink>
            </li>
            <li className="text-md mr-12 md:block hidden hover:scale-110 duration-200">
              <AnchorLink href="#collection">COLLECTION</AnchorLink>
            </li>
            <li>
              <img src={sp} alt="img" className="w-10 rounded-full" />
            </li>
          </ul>
        </div>
      </div>
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
              onClick=""
              className="px-7 sm:mb-0 mb-6 py-3 text-sm font-semibold bg-green-600 rounded hover:bg-red-600 shadow-lg text-white"
            >
              Explore Shop
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Header;
