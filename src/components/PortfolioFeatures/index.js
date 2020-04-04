import React from "react";

function PortfolioFeatures({ StarPic, PickPic }) {

    return (
        <div className="img-container row">
            <div className="img-3 col-lg-6 col-md-6 col-sm-12">
                {/* <img class="stargazer-port" src="assets/images/stargazer.png" alt="stargazer" width="100%" height="325px"/> */}
                <img 
                className="stargazer-port2" 
                src={StarPic} 
                alt="stargazer" 
                width="100%"
                height="325px"
                />
                <button class="inspect" href="https://github.com/jhamilton20/projectone"><i
                        class="fas fa-search"></i></button>
                <button class="link" href="https://jhamilton20.github.io/projectone/"><i
                        class="fas fa-link"></i></button>
            </div>
            <div class="img-3 col-lg-6 col-md-6 col-sm-12">
                {/* <img class="pickem-port" src="assets/images/pickem_logo.jpg" alt="pickem" width="100%" height="325px"/> */}
                <img 
                className="pickem-port2" 
                src={PickPic}
                alt="pickem" 
                width="100%"
                height="325px"
                />
                <button class="inspect" href="https://github.com/moullier/XFL-pickem"><i
                        class="fas fa-search"></i></button>
                <button class="link" href="https://morning-dawn-76670.herokuapp.com/"><i
                        class="fas fa-link"></i></button>
            </div>
        </div>
    );
}

export default PortfolioFeatures;