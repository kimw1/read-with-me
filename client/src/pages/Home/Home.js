import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
import Nav from "../../components/Nav";
import ReadTextCard from "../../components/ReadTextCard";
import ReadPhotoCard from "../../components/ReadPhotoCard";
import Footer from "../../components/Footer";
import Carousel from "../../components/Carousel";

import signs from "../../utils/images/tokyo1trans.png";



class Home extends Component {
  render() {
    return (
      <div>
        <Nav />
        <Jumbotron title="ELUCIDATE YOUR SURROUNDINGS." src={signs}>More comfortable listening than reading? Our cutting-edge app supports image-to-voice conversion and even translation between languages.
        </ Jumbotron>
        <h1>Home Page</h1>
        <p>
          Select which option you would prefer. Upload a photo to be read. Or
          you can upload or input text to be read.
        </p>
        <ReadTextCard/>
        <ReadPhotoCard/>
        <Footer/>
      </div>
    );
  }
}

export default Home;
