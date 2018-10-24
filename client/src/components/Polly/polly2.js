import React from "react";
import "./polly";

const PollyAudio = props => (
<div {...props}>
    <audio controls>
        <source src="quote4.mp3" type="audio/mp3" />
        <p>Your browser doesn't support HTML5 audio. Here is a <a href="quote4.mp3">link to the audio</a> instead.</p>
    </audio>
</div>)
        
export default PollyAudio;
