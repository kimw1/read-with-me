const express = require('express');
const AWS = require('aws-sdk');
const dotenv = require('dotenv');
require('dotenv').config();
let keys = require("../../../keys");

AWS.config.update({region:'us-west-2'})

const polly = new AWS.Polly(keys.aws);

// const params = {
//     OutputFormat: "mp3",
//     Text: "",
//     TextType: "text",
//     VoiceId: ""
// };

// polly.synthesizeSpeech(params, (err, data) => {
//     if(err) {
//         console.log(err, err.stack);
//     } else {

//     }
// })
//let enVoice = { "LanguageCode": 'en-US'}
let frVoice = { "LanguageCode": 'fr-FR'}
polly.describeVoices(frVoice, (err, data) =>  {
    if (err) console.log(err, err.stack); // an error occurred
    else console.log(data.Voices);           // successful response
});