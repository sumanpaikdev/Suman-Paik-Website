import React from "react";

//icons

import seeDetails from "../icons/right-arrow.png";

// import bestone from "../images/best1.jpg";
// import besttwo from "../images/best2.jpg";
// import bestthree from "../images/best3.jpg";
import arrivalpic from "../images/arrivals.jpg";

import ButtonMore from "./subcomponent/ButtonMore";
import BestsellerCon from "./subcomponent/BestsellerCon";

function BestPlant() {
  return (
    <div
      className="bg-gray-100 flex flex-col items-center overflow-hidden"
      id="bestseller"
    >
      <p className="font-philo text-3xl my-12">BESTSELLERS</p>
      <BestsellerCon
        pict={arrivalpic}
        title={"THE LAKE FROM THE MIRROR WORLD : 29/12/2024"}
        desc={
          "LEV, a mysterious man with a dark past, becomes the guardian of an orphaned girl, LEELA. When he saves MIRA, a lady detective, from dangerous criminals, she uncovers his deadly secret while investigating a murder—and unexpectedly becomes the mother LEELA needs."
        }
        tem={"15-29 Deg"}
        day={"5 Days"}
        icondetails={seeDetails}
      />

<BestsellerCon
        pict={arrivalpic}
        title={"THE LAKE FROM THE MIRROR WORLD : 29/12/2024"}
        desc={
          "A mysterious boy who lives in a lake saves a little girl's life, causing him to lose his true identity. Twenty years later, as adults, the two are drawn back together by a crime event, and the boy saves the girl’s life again, unlocking his lost memories. and returning to the lake that is his true home. loremwho lives in a lake saves a little girl's life, causing him to lose his true identity. Twenty years later, as adults, the two are drawn back together by a crime event, and the boy saves the girl’s life again, unlocking his lost memories. and returning to the lake that is his true home. lorem "
        }
        tem={"15-29 Deg"}
        day={"5 Days"}
        icondetails={seeDetails}
      />
      {/* <BestsellerCon
        // pict={arrivalpic}
        title={""}
        desc={"A delicate spring flower will give tenderness to your home."}
        // tem={"15-29 Deg"}
        // day={"5 Days"}
      />
      <BestsellerCon
        pict={arrivalpic}
        title={"helleborus"}
        desc={"A delicate spring flower will give tenderness to your home."}
        tem={"15-29 Deg"}
        day={"5 Days"}
      /> */}
      <ButtonMore name={"SEE MORE"} />
    </div>
  );
}
export default BestPlant;
