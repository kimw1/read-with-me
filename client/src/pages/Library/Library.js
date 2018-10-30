import React, { Component } from "react";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import API from "../../utils/API";
import DeleteButton from "../../components/DeleteButton";
import { Link } from "react-router-dom";
import { LibraryList, LibraryListItem } from "../../components/List"

class Library extends Component {
    state = {
        libraries: [],
        text: "",
        url: ""
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
                <h1>Your Library</h1>
                {this.state.libraries.length ? (
                    <LibraryList>
                        {this.state.libraries.map(libraries => (
                            <LibraryListItem key={libraries._id}>
                                <Link to={"/text/" + libraries._id}>
                                {libraries.Text} 
                                </Link>
                                <DeleteButton onClick={() => this.deleteItem(libraries._id)} />
                            </LibraryListItem>
                        ))}
                    </LibraryList>
                ) : (
                        <h3>Nothing in your Library</h3>
                    )}
                <Footer />
            </div>
        )    
    }
};

export default Library;