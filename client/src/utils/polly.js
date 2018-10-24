import React from 'react';
import AWS from 'aws-sdk';

AWS.config = new AWS.Config({
    credentials: {
        id: process.env.REACT_APP_AWS_ACCESS_KEY_ID,
        region: process.env.REACT_APP_AWS_REGION,
        secret: process.env.REACT_APP_AWS_SECRET_ACCESS_KEY
    }
});

class PollyContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
            // OutputFormat: "mp3",
            // Text: "",
            // TextType: "text",
            // VoicesId: "",
            // LanguageCode: "",
            // IncludeAdditionalLanguageCodes: true,
            // msg: "Please choose a language.",
            // value: "select"
        }
        
    }

    Polly = () => {
        return new AWS.Polly({ apiVersion: '2016-06-10' })

    }

    handleChange(event) {

        if (this.state.value === "english")
            this.setState({
                VoicesId: "Joanna",
                LanguageCode: "en-US",
                value: "en-US"
            }); else if (this.state.value === "french")
            this.setState({
                VoicesId: "Celine",
                LanguageCode: "fr-FR",
                value: "fr-FR"
            }); else {
            return (
                this.state.msg
            )
        }
    }

    handleVoices = (props) => {

        AWS.polly.describeVoices(this.state, (err, data) => {
            if (err) {
                console.log(err, err.stack);
            }
            else console.log(data);

           
        });
    }

    handleTextToVoice = (props) => {

        AWS.polly.SynthesizeSpeech(this.state, (error, data) => {
            if (error) {
                console.log(error.code)
            }
            this.setState({ 
                OutputFormat: "mp3",
                text: "Very unhappy with AWS Polly.",
                TextType: "text",
             });
        });
    };

    render() {
        return (
            <div>
                <audio controls>
                    <source src={this.state.OutputFormat} type="audio/mp3" />
                    <p>Your browser doesn't support HTML5 audio. Here is a <a href="quote4.mp3">link to the audio</a> instead.</p>
                </audio>
                <div>Please choose a language.</div>
                <select>
                    <option className="english" value="en-US">US English</option>
                    <option className="french" value="fr-FR">French</option>
                </select>
            </div>)
    };
};

export default PollyContainer;