import React from "react"

function Footer({ github, twitter, gmail, portfolio }) {
    return(
        <div className=" flex sm:flex-row flex-col justify-center items-center text-gray-800 text-sm py-8 rounded-t-xl">
            <div className="flex flex-col items-center justify-center">
                <p className="text-xl font-philo flex items-center justify-center">Sp.SCREENPLAY <a href="/" className="ml-4"> <img src={github} alt="github" className=" w-8 hover:scale-110 duration-200"/></a></p>
                <p className="text-sm">2024 © Suman Paik</p>

            </div>
            {/* <div className="text-xs mb-6">
                <p className="mb-2">Futher Information</p>
                <p className="mb-2">Terms & Conditions</p>
                <p className="mb-2">Pricacy Policy</p>
            </div>
            <div className="text-xs mb-6">
                <p className="mb-2">bestsellers</p>
                <p className="mb-2">about</p>
            </div>
            <div className="text-xs mb-6">
                <p className="mb-2">collection</p>
                <p className="mb-2">gallery</p>
            </div>
            <div>
                <p className="text-xs mb-2">Follow us</p>
                <div className="flex">
                    <a href="/" className="mr-4"> <img src={github} alt="github" className="invert w-8 hover:scale-110 duration-200"/></a>
                    <a href="/" className="mr-4"> <img src={twitter} alt="twitter" className="invert w-8 hover:scale-110 duration-200"/></a>
                    <a href="/" className="mr-4"> <img src={gmail} alt="gmail" className="invert w-8 hover:scale-110 duration-200"/></a>
                    <a href="/" className="mr-4"> <img src={portfolio} alt="portweb" className="invert w-8 hover:scale-110 duration-200"/></a>
                </div>
            </div> */}
        </div>
    )
}
export default Footer;