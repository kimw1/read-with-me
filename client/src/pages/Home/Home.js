import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
import Nav from "../../components/Nav";
import ReadTextCard from "../../components/ReadTextCard";
import ReadPhotoCard from "../../components/ReadPhotoCard";
import Footer from "../../components/Footer";
<<<<<<< HEAD
import Carousel from "../../components/Carousel";
import { LibraryList, LibraryListItem } from "../../components/List"
import API from "../../utils/API";
import { Link } from "react-router-dom";
=======
//import Carousel from "../../components/Carousel";
>>>>>>> master

import signs from "../../utils/images/tokyo1trans.png";
import DeleteButton from "../../components/DeleteButton";



class Home extends Component {
  state = {
    libraries: [],
    text: ""
  };

  componentDidMount() {
    this.loadLibrary();
  }

  deleteItem = id => {
    API.deleteItem(id)
      .then(res => this.loadLibrary())
      .catch(err => console.log(err));
  };

  loadLibrary = () => {
    API.getLibrary()
      .then(res => 
        this.setState({ libraries: res.data, text: "" })
        )
        .catch(err => console.log(err));
  };


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
<<<<<<< HEAD
        {this.state.libraries.length ? (
        <LibraryList>
        {this.state.libraries.map(libraries => (
          <LibraryListItem key={libraries._id}>
            <Link to={"/text/" + libraries._id}>
              {libraries.text}
            </Link>
            <DeleteButton onClick={() => this.deleteItem(libraries._id)} /> 
          </LibraryListItem>
        ))}
        </LibraryList>
        ) : (
          <h3>Nothing in your Library</h3>
        )}
=======
>>>>>>> master
        <Footer/>
      </div>
    );
  }
}

export default Home;
