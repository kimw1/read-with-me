import React, { Component } from "react";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import API from "../../utils/API";
import DeleteButton from "../../components/DeleteButton";
import { Link } from "react-router-dom";
import { LibraryList, LibraryListItem } from "../../components/List"    

class Library extends Component {
    state = {
        libraries: {},
        text: "",
        url: ""
    };

    componentDidMount() {
        this.loadLibrary();
    }

    // componentDidMount() {
    //     API.getItem(this.props.match.params.id)
    //       .then(res => this.setState({ libraries: res.data }))
    //       .catch(err => console.log(err));
    //   };

    deleteItem = id => {
        API.deleteItem(id)
            .then(res => this.loadLibrary())
            .catch(err => console.log(err));
    };

    loadLibrary = () => {
        API.getLibrary()
            .then(res =>
                this.setState({ libraries: res.data })
            )
            .catch(err => console.log(err));
    };

    loadItem = () => {
        API.getItem(this.props.match.params.id)
            .then(res => this.setState({ libraries: res.data }),
            )
            .catch(err => console.log(err));
    }

    render() {
        console.log(this.state.libraries.url)
        return (
            <div>
                <Nav />
                <h1>Your Library</h1>
                {this.state.libraries.length ? (
                    <LibraryList>
                        {this.state.libraries.map(libraries => (
                            <LibraryListItem key={libraries._id}>
                                <Link
                                    to={"/library/" + libraries._id}
                                    onClick={this.loadItem()}
                                >
                                    {libraries.Text}
                                </Link>
                                <DeleteButton onClick={() => this.deleteItem(libraries._id)} />
                            </LibraryListItem>
                        ))}
                    </LibraryList>
                ) : (
                        <h3>Nothing Here</h3>
                    )}
                <div className="card border-success mt-3">
                    <div className="card-header">Now reading</div>
                    <div className="card-body text-success">
                        <p className="card-text">{this.state.libraries.Text} 
                        <br></br>
                        {this.state.libraries.url}</p>
                    </div>
                    <audio controls>
                        <source src={this.state.libraries.url} type="audio/mp3" />
                        <p>Your browser doesn't support HTML5 audio. Here is a <a href={this.state.libraries.url}>link to the audio</a> instead.</p>
                    </audio>
                </div>;
                <Footer />
            </div>
        )
    }
};

export default Library;