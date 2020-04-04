import React from "react";
import PortfolioHeader from "../PortfolioHeader";
import PortfolioTitleLine1 from "../PortfolioTitleLine1";
import PortfolioFeatures from "../PortfolioFeatures";
import PortfolioTitleLine2 from "../PortfolioTitleLine2";
import PortfolioExamples from "../PortfolioExamples";


function Portfolio( { StarPic, PickPic, PlannerPic, WeatherPic, BurgerPic, NotePic }) {
    return (
        <div>
            <PortfolioHeader />
            <PortfolioTitleLine1 />
            <PortfolioFeatures
                 StarPic={StarPic}
                 PickPic={PickPic}
            />
            <PortfolioTitleLine2 />
            <PortfolioExamples 
                PlannerPic={PlannerPic}
                WeatherPic={WeatherPic}
                BurgerPic={BurgerPic}
                NotePic={NotePic}
            />
        </div>
        
    );
}

export default Portfolio;