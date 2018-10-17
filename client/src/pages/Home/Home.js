import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
import Nav from "../../components/Nav";
import PollyAudio from "../../components/polly";
import ReadTextCard from "../../components/ReadTextCard";
import ReadPhotoCard from "../../components/ReadPhotoCard";
import Footer from "../../components/Footer";



class Home extends Component {
  render() {
    return (
      <div>
        <Nav />
        <Jumbotron />
        
        <h1>Home Page</h1>
        <p>
          Select which option you would prefer. Upload a photo to be read. Or
          you can upload or input text to be read.
        </p>
        <ReadTextCard/>
        <ReadPhotoCard/>
        <PollyAudio/>

        <Footer/>
      </div>
    );
  }
}

export default Home;
