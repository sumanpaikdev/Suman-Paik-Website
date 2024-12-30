import React, {useContext} from "react"
import './App.css';
import { Context } from "./Context";

import Explore from "./components/Explore";

// images
import bag from "./images/bag.png"
import headerBG from "./images/header-background.jpg"
import github from "./images/social1.png"
import twitter from "./images/social2.png"
import gmail from "./images/social3.png"
import portfolio from "./images/social4.png"
import arrival from "./images/arrivals.jpg"

// sp 
import spimg from "./images/sp.jpg"
import gmicon from "./images/communication.png"


//components
import Header from "./components/Header"
import BestPlant from './components/BestPlant';
import AllYouNeed from './components/AllYouNeed';
// import OurCollection from "./components/OurCollection";
import NewArrivals from './components/NewArrivals';
import Footer from './components/Footer';

function App() {

  const {exploreStatus} = useContext(Context)


    return (
      <div className="App bg-white bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#ffacac] via-[#a1a1aa]to-[#e4e4e7]">
        { exploreStatus && <Header sp={spimg} bag={bag} headerBG={headerBG} gmailicon={gmicon}/>}
        { exploreStatus && <AllYouNeed />}
        { exploreStatus && <BestPlant pict={arrival}/>}
       
        {/* { exploreStatus && <OurCollection/>} */}
        { exploreStatus && <NewArrivals picture={arrival}/>}
        { exploreStatus && <Footer github={github} twitter={twitter} gmail={gmail} portfolio={portfolio}/>}
        { exploreStatus === false && <Explore/>}
      </div>
    );

}

export default App;



// <TheShop theshop={theshop}/>
// import TheShop from './components/TheShop';
// import theshop from "./images/the-shop.jpg"

