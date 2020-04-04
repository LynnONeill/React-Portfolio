import React from 'react';
import Navbar from "../src/components/Navbar";
import Bio from "../src/components/Bio";
import Portfolio from "../src/components/Portfolio";
import Contact from "../src/components/Contact";
import Footer from "../src/components/Footer";
import BioPic from "../src/images/me.jpg";
import StarPic from "../src/images/stargazer2.png";
import PickPic from "../src/images/pickem_screenshot.PNG";
import PlannerPic from "../src/images/planner2.png";
import WeatherPic from "../src/images/weatherdashboard2.png";
import BurgerPic from "../src/images/burger2.png";
import NotePic from "../src/images/note_taker_screenshot.PNG";


function App( ) {
  return (
   <div>
     <Navbar />
     <Bio 
     BioPic={BioPic}
     />
     <Portfolio
     StarPic={StarPic}
     PickPic={PickPic}
     PlannerPic={PlannerPic}
     WeatherPic={WeatherPic}
     BurgerPic={BurgerPic}
     NotePic = {NotePic}
     />
     <Contact />
    <Footer />
    
   </div>
  );
}

export default App;
