import React from "react";

function NewArrivals({ picture }) {
    return(
        <div className="p-2  my-6 flex justify-center items-center bg-transparent">
            <div className="flex sm:flex-row flex-col justify-between max-w-5xl bg-white overflow-hidden rounded-md">
                <img src={picture} alt="arrival" className=" w-[310px] h-[310px]"/>
                <div className="flex flex-col justify-center items-center w-auto">
                    <p className=" font-philo text-2xl mb-4 mt-6">New Arrivals</p>
                    <p className="w-[310px] text-center mb-6 text-sm text-gray-500">Please, leave your email to be updated on our new arrivals screenplays.</p>
                    <input type="text" placeholder="example@gmail.com" className="shadow rounded border-2 border-gray-300 text-md focus:outline-none px-4 py-1 focus:ring ring-rose-600"/>
                    <button className="shadow-md bg-black px-8 py-3 rounded text-sm duration-200 active:bg-rose-600 font-semibold text-gray-100 mt-4 mb-6">Subscribe</button>
                </div>
            </div>
        </div>
    )
}
export default NewArrivals