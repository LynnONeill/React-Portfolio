import React from "react";

function PortfolioExamples({PlannerPic, WeatherPic, BurgerPic, NotePic}) {

    return (
        <div className="img-container row">
            <div class="img-1 col-lg-3 col-md-3 col-sm-12">
                {/* <img id="planner-port" src="assets/images/planner.png" alt="dayplanner" width="100%" height="325px"/> */}
                <img 
                id="planner-port2" 
                src={PlannerPic} 
                alt="dayplanner" 
                width="100%" 
                height="325px"
                />
                <button class="inspect" href="https://github.com/LynnONeill/DayPlanner"><i
                        class="fas fa-search"></i></button>
                <button class="link" href="https://lynnoneill.github.io/DayPlanner/"><i
                        class="fas fa-link"></i></button>
            </div>
            <div class="img-2 col-lg-3 col-md-3 col-sm-12">
                {/* <img class="weather-port" src="../images/weatherdashboard.png" alt="weather" width="100%" height="325px"/> */}
                <img 
                    className="weather-port2" 
                    src={WeatherPic} 
                    alt="weather" 
                    width="100%"
                    height="325px"
                    />
                <button class="inspect" href="https://github.com/LynnONeill/weatherDashboard"><i
                        class="fas fa-search"></i></button>
                <button class="link" href="https://lynnoneill.github.io/weatherDashboard/"><i
                        class="fas fa-link"></i></button>
            </div>
            <div className="img-3 col-lg-3 col-md-3 col-sm-12">
                <img 
                className="burger-port" 
                src={BurgerPic} 
                alt="burger" 
                width="100%" 
                height="325px"
                />
                {/* <img class="burger-port2" src="assets/images/burger2.png" alt="burger" width="100%" height="325px"/> */}
                <button class="inspect" href="https://github.com/LynnONeill/Burger-Logger"><i
                        class="fas fa-search"></i></button>
                <button class="link" href="https://enigmatic-beach-86884.herokuapp.com/"><i
                        class="fas fa-link"></i></button>
            </div>
            <div className="img-3 col-lg-3 col-md-3 col-sm-12">
                {/* <img class="note-port" src="assets/images/note1.png" alt="notes" width="100%" height="325px"/> */}
                <img 
                className="note-port2" 
                src={NotePic}
                alt="notes" 
                width="100%" 
                height="325px"
                />
                <button class="inspect" href="https://github.com/LynnONeill/Note-Taker"><i
                        class="fas fa-search"></i></button>
                <button class="link" href="https://ancient-tundra-45098.herokuapp.com/"><i
                        class="fas fa-link"></i></button>
            </div>
        </div>

    );
}

export default PortfolioExamples;