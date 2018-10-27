import React from 'react';
import AWS from 'aws-sdk';
import API from "./API";
import SaveButton from "../components/SaveButton"


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
                item: {},
                OutputFormat: "mp3",
                Text: "",
                TextType: "text",
                VoiceId: "",
                url: null
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    loadLibrary = () => {
        API.getLibrary()
            .then(res => this.setState({
                text: this.res.data
            }))
            .catch(err => console.log(err));
    };

    // componentDidMount() {
    //     API.getItem(this.props.match.params.id)
    //       .then(res => this.setState({ item: res.data }))
    //       .catch(err => console.log(err));
    //   }

    Polly = () => {
        return new AWS.Polly({ apiVersion: '2016-06-10' })

    }

    handleChange(event) {
        const {name, value} = event.target
        this.setState({
            [name]: value
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        
        if (this.state.Text !== "") {
            this.setState({
              OutputFormat: "mp3",
                TextType: "text",
                Text: this.state.Text,
                VoiceId: this.state.VoiceId
            }, this.handleTextToVoice )
            console.log(this.state);

                // .then(API.saveItem({ Text: this.state.Text }))
                // .then(this.setState({ Text: "" }));
        };
    };

    // handleVoices = (props) => {

    //     AWS.polly.describeVoices(this.state, (err, data) => {
    //         if (err) {
    //             console.log(err, err.stack);
    //         }
    //         else console.log(data);


    //     });
    // }

    handleTextToVoice = () => {
        const {url, ...params} = this.state;
        console.log(this.state);
        const polly = new AWS.Polly.Presigner();
        polly.getSynthesizeSpeechUrl(params, [60*60*24*7], (error, url) => {
            console.log(this.state);
            if (error) {
                console.log(error.code, error.stack, error)
            }
            console.log("This is your data " + url);
            this.setState({url: url});
            let pollyPlayer = document.getElementById("polly-audio");
            pollyPlayer.load();
        });
    };



    render() {
        return (
            <div>
                <form>
                    <label>Please input text you would like spoken.
                    <textarea name="Text" defaultValue={this.state.Text} onChange={this.handleChange} className="form-control" />
                    </label>
                    <input type="submit" disabled={this.state.Text === ''} onClick={this.handleSubmit} value="Submit" className="btn btn-info" />
                </form>
                <SaveButton/>
                <div>
                    <audio controls id="polly-audio">
                        <source src={this.state.url} type="audio/mp3" />
                        {/* <p>Your browser doesn't support HTML5 audio. Here is a <a href={url}>link to the audio</a> instead.</p> */}
                    </audio>
                    <div>Please choose a language.</div>
                        <select onChange={this.handleChange} name="VoiceId">
                        <option>---</option>
                        <option className="english"  value="Joanna">US English</option>
                        <option className="french"  value="Celine">French</option>
                    </select>
                </div>
            </div>)
    };
};

export default PollyContainer;