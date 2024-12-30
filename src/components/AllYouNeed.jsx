import React from "react";
import AllNeed from "./subcomponent/AllNeed";

import allone from "../images/all1.jpg";
import alltwo from "../images/all2.jpg";
import allthree from "../images/all3.jpg";
// import allfour from "../images/all4.jpg"

function AllYouNeed() {
  return (
    <div className=" pt-6 ">
      <p className="sm:text-2xl text-xl font-philo text-center sm:mb-2 ">
        UPCOMING SCREENPLAYS
      </p>

      <div className="flex overflow-x-auto sm:justify-center no-scrollbar snap-x sm:pt-6 ">
        {/* no-scrollbar */}
        <AllNeed
          count={"I"}
          allimage={allone}
          title={"healthy"}
          desc={
            "Fresh and moist air is essential for healthy sleep and life.Take care of yourself."
          }
        />
        <AllNeed
          count={"II"}
          allimage={alltwo}
          title={"stylishly"}
          desc={
            "Plant as an elegant addition to your interior. Treat yourself or your loved ones with cute gift."
          }
        />
        <AllNeed
          count={"III"}
          allimage={allthree}
          title={"especial"}
          desc={
            "We have a large selection of plants for every taste and budget. Find your special plant."
          }
        />
      </div>
      <p className="sm:text-2xl text-xl sm:pt-8 sm:pb-8 pb-6 font-philo text-center">
        SCREENPLAY : MOVIES | WEB SERIES
      </p>
      
    </div>
  );
}
export default AllYouNeed;
