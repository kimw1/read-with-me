import React from "react";
import "./Card.css";

import img1 from "../../utils/images/card-img-1.png";
import img2 from "../../utils/images/card-img-2.png";
import img3 from "../../utils/images/card-img-3.png";

const Card = () => (
    <div className="card-deck">
        <div className="card">
            <img className="card-img-top" src={img1} alt="Book icon" />
            <div className="card-body">
                <h3 className="card-title">Image-to-voice</h3>
                <p className="card-text">Designed with the visually impaired in mind. Simply take a picture of your surroundings and our app will narrate whatever text is present.</p>
            </div>
        </div>
        <div className="card">
            <img className="card-img-top" src={img2} alt="Icon of pdf file" />
            <div className="card-body">
                <h3 className="card-title">Text-to-voice</h3>
                <p className="card-text">Make your morning commute more productive. RWM will accept a document in one of the supported text formats and read it to you.</p>
            </div>
        </div>
        {/*
        <div className="card">
            <img className="card-img-top" src={img3} alt="Card image cap" />
            <div className="card-body">
                <h3 className="card-title">Language-to-language</h3>
                <p className="card-text">Need an on-demand translator? Upload an image or document containing text in a foreign language and RWM will take care of the rest.</p>
            </div>
        </div>
        */}
    </div>
);

export default Card;
