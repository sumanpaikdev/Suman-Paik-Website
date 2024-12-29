import React from "react";
// import Weather from "../Weather";


function BestsellerCon({ pict, title, desc, tem, day, icondetails }) {
  return (


    <div className="flex justify-center items-center bg-white">

        <div className="container flex flex-col justify-start items-start text-md sm:px-8 px-5 py-4 m-3 max-w-5xl sm:hover:translate-x-4 duration-500 shadow bg-gray-100">
          <p className="uppercase text-xl mb-4 mt-4">
            {title} 
          </p>
          <p className="w-full text-left text-md text-gray-500">{desc}</p>

          <button className="shadow-md bg-emerald-600 hover:bg-emerald-500 px-6 py-3 rounded text-sm font-semibold text-gray-100 mt-7 mb-6 flex flex-row items-center justify-center">
            SEE DETAILS  
            <img src={icondetails} alt=">" className="w-[18px] pl-2 invert ml-1" />
          </button>
         
        </div>

    </div>
  );
}
export default BestsellerCon;
