
const AWS = require('aws-sdk');
AWS.config.update({region: 'us-west-2'});
const fs = require('fs');
require('dotenv').config();

let keys = require("../../keys.js");

const polly = new AWS.Polly(keys.aws);
//console.log(AWS.config.credentials.constructor);

const params = {
    OutputFormat: "mp3",
    Text: "This project is awesome!!",
    TextType: "text",
    VoiceId: "Ivy"
};

let cb = (err, data) => {
    if (err) {
        console.log(err, err.stack);
    } else {
        fs.writeFile("quote5.mp3", data.AudioStream, (err) => {})
        if (err) {
            console.log('Error saving file', err);
        }
        console.log('Saved speech!')
    }
}

polly.synthesizeSpeech(params, cb);

let enVoice = { "LanguageCode": 'en-US'}
//let frVoice = { "LanguageCode": 'fr-FR' }
polly.describeVoices(enVoice, (err, data) => {
    if (err) console.log(err, err.stack); // an error occurred
    else console.log(data.Voices);           // successful response
});