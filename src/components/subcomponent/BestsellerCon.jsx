import React from "react";

function BestsellerCon({
  pict,
  title,
  desc,
  tem,
  day,
  icondetails,
  catagory,
  date,
}) {
  return (
    
    <div className="flex justify-center items-center">
      <div className="container flex flex-col justify-start items-start sm:px-8 px-5 py-4 mx-3 my-1 max-w-5xl sm:hover:translate-x-4 duration-500 shadow bg-white rounded-md">
        <p className="text-red-500 font-bold mr-2 flex flex-row text-sm uppercase mt-2">
          {catagory} |{" "}
          <p className="text-gray-700 font-semibold text-sm ml-2 lowercase">
            {date}
          </p>
        </p>
        <p className=" text-lg font-sans text-gray-700 font-semibold mb-3 mt-2 ">{title}</p>
        <p className="w-full text-justify text-sm sm:text-md text-gray-700 leading-snug ">
          {desc}
        </p>
        
        <button className="shadow-md bg-green-600 hover:bg-red-600 sm:hover:translate-x-4 duration-500 px-3 py-4 rounded text-sm font-semibold text-gray-100 mt-7 mb-6 flex flex-row items-center justify-center">
          SEE DETAILS & DOWNLOAD SCREENPLAY
          {/* <img
            src={icondetails}
            alt=">"
            className="w-[18px] pl-2 invert ml-1"
          /> */}
        </button>
      </div>
    </div>
  );
}
export default BestsellerCon;
