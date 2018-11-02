import React from 'react';
import AWS from 'aws-sdk';
import API from "./API";

const btn = {
    float: 'right',
    margin: '3px',
};

AWS.config.logger = console;

AWS.config = new AWS.Config({
    accessKeyId: process.env.REACT_APP_AWS_ACCESS_KEY_ID,
    region: "us-west-2",
    secretAccessKey: process.env.REACT_APP_AWS_SECRET_ACCESS_KEY
});


class PollyContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            OutputFormat: "mp3",
            Text: "",
            TextType: "text",
            VoiceId: "",
            url: null
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleSave = this.handleSave.bind(this);
    };

    loadLibrary = () => {
        API.getLibrary()
            .then(res => this.setState({
                text: res.data
            }))
            .catch(err => console.log(err));
    };

    Polly = () => {
        return new AWS.Polly({ apiVersion: '2016-06-10' })

    }

    handleChange(event) {
        const { name, value } = event.target
        this.setState({
            [name]: value
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        this.selectSpeaker();
        if (this.state.Text !== "") {
            this.setState({
                OutputFormat: "mp3",
                TextType: "text",
                Text: this.state.Text,
                VoiceId: this.state.VoiceId
            }, this.handleTextToVoice);
            console.log(this.state);
            //.then(API.saveItem({ Text: this.state.Text }))
            //this.setState({ Text: "", VoiceId: "" });
        };
    };

    handleTextToVoice = () => {
        const { url, ...params } = this.state;
        console.log(this.state);
        const polly = new AWS.Polly.Presigner();
        polly.getSynthesizeSpeechUrl(params, [6000], (error, url) => {
            console.log(this.state);
            if (error) {
                console.log(error.code, error.stack, error)
            }
            console.log("This is your data " + url);
            this.setState({ url });
            let pollyPlayer = document.getElementById("polly-audio");
            pollyPlayer.load();
        });
    };

    handleSave(event) {
        event.preventDefault();

        if (this.state.Text !== "") {
            API.saveItem({
                Text: this.state.Text,
                url: this.state.url
            })
                .then(console.log(`saved ${this.state.Text} & ${this.state.url}`))
                .catch(err => console.log(err))
        };
    };

    selectSpeaker = () => {
        const value = this.state.VoiceId;
        if (value === "") {
            alert("Please select a language.");
        };
    };

    clearForm = () => {
        this.setState({
            OutputFormat: "mp3",
            Text: "",
            TextType: "text",
            VoiceId: "",
            url: null
        })
    }

    render() {
        return (
            <div>
                <form name="Input-text-to-read" id="clear">
                    <div className="form-group">
                        <label><h5>Please input text you would like spoken.</h5></label>
                        <textarea name="Text" defaultValue={this.state.Text} onChange={this.handleChange} className="form-control" />

                        <input type="submit" disabled={this.state.Text === ''} onClick={this.handleSubmit} value="Submit" className="btn btn-dark" style={btn} />
                        <input type="submit" disabled={this.state.Text === ''} onClick={this.clearForm} value="Clear" className="btn btn-dark" style={btn} />
                        <input type="save" disabled={this.state.url === null} onClick={this.handleSave} value="Save" className="btn btn-info" style={btn} />

                    </div>
                    <div>
                        <audio controls id="polly-audio">
                            <source src={this.state.url} type="audio/mp3" />
                            <p>Your browser doesn't support HTML5 audio. Here is a <a href={this.state.url}>link to the audio</a> instead.</p>
                        </audio>
                        <div>Please choose a language.</div>
                        <select onChange={this.handleChange} name="VoiceId">
                            <option value="">---</option>
                            <option className="english" value="Joanna">US English</option>
                            <option className="french" value="Celine">French</option>
                        </select>
                    </div>
                </form>
            </div>)
    };
};

export default PollyContainer;