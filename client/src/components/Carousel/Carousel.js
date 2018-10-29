import React from "react";
import "./Carousel.css";

import morning from "../../utils/images/morning-1.png";
import menu from "../../utils/images/menu-1.png";

const jumbotronOneStyle = {
    "backgroundImage": `url(${menu})`,
}

const jumbotronTwoStyle = {
    "backgroundImage": `url(${morning})`,
}

const Carousel = () => (

    <div id="carouselExampleSlidesOnly" className="carousel slide carousel-fade" data-ride="carousel" data-interval='6000'>
        <div className="carousel-inner">

            <div className="carousel-item active jumbotron text-center" id="slide1" style={jumbotronOneStyle} >
                <h1>INTERACT MORE RICHLY WITH YOUR WORLD.</h1>
                <p>Street signs and handwritten letters all become accessible at the push of a smartphone's camera button.</p>
            </div>

            <div className="carousel-item jumbotron text-center" id="slide2" style={jumbotronTwoStyle} >
                <h1>BRIGHTEN UP YOUR MORNING COMMUTE.</h1>
                <p>Rise above the traffic by bringing your favorite book or work-related document to life.</p>
            </div>

        </div>
    </div>
)


export default Carousel;