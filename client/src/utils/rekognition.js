import React from 'react';
import AWS from 'aws-sdk';
import API from "./API";
import SaveButton from "../components/SaveButton";

AWS.config.logger = console;

AWS.config = new AWS.Config({
    accessKeyId: process.env.REACT_APP_AWS_ACCESS_KEY_ID,
    region: "us-west-2",
    secretAccessKey: process.env.REACT_APP_AWS_SECRET_ACCESS_KEY
});

class RekognitionContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Bytes: ""
        }
        this.handleChange = this.handleChange.bind(this);
    };

    Rekognition = () => {
        return new AWS.Rekognition({ apiVersion: '2016-06-27' })

    };

    handleChange(event) {
        //let ua;

        const reader = new FileReader();
        let file = event.target.files[0];

        reader.onload = (event) => {
            let arrayBuffer = event.target.result;
            console.log(event.target.result);
            //  const array = new Uint8Array(arrayBuffer);
            //  console.log(array);
            // const binaryString = String.fromCharCode.apply(null, array);

            // console.log(binaryString);
            this.setState({ Bytes: arrayBuffer });
            // this.setState({
            //     Bytes: 
            // })
            //return (event) => {
            //     let img = document.createElement('img');
            //     let image = null;
            //     img.src = event.target.result;
            //     console.log(event.target.result);
            //     let jpg = true;
            //     try {
            //         image = atob(event.target.result.split("data:image/jpeg;base64,")[1]);
            //     } catch (event) {
            //         jpg = false;
            //     }
            //     if (jpg === false) {
            //         try {
            //             image = atob(event.target.result.split("data:image/png;base64,")[1]);
            //         } catch (event) {
            //             alert("Not an image file Rekognition can process");
            //             return;
            //         }
            //     }
            //     console.log(event);
            //     const length = image.length;
            //     const imageBytes = new ArrayBuffer(length);
            //     ua = new Uint8Array(imageBytes);
            //     for (let i = 0; i < length; i++) {
            //         ua[i] = image.charCodeAt(i);
            //     }
            //};
        };
        console.log(file);
        reader.readAsDataURL(file);
    };

    handlePictureToText = () => {
        //const { Bytes } = this.state;
        console.log(this.state);
        const rekognition = new AWS.Rekognition({ apiVersion: '2016-06-27' })
        rekognition.detectText({ Image: { Bytes: this.state } }, (error, data) => {
            console.log(this.state);
            if (error) {
                console.log(error.code, error.stack, error)
            }
            console.log("This is your data " + data);
            this.setState({ data });
            // let getImage = document.getElementById("inputGroupFile04");
            // return getImage;
        });
    };

    render() {
        return (
            <div>
                <div className="input-group">
                    <div className="custom-file">
                        <input type="file" onChange={this.handleChange} className="custom-file-input" id="inputGroupFile04" aria-describedby="inputGroupFileAddon04" />
                        <label className="custom-file-label" htmlFor="inputGroupFile04">Choose an Image</label>
                    </div>
                    <div className="input-group-append">
                        <button className="btn btn-dark" type="submit" id="inputGroupFileAddon04" onClick={this.handlePictureToText} >Upload</button>
                    </div>
                </div>
            </div>)
    };
};

export default RekognitionContainer;

