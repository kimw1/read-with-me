

import React, { Component } from "react";



class InputField extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: ""
    };
    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleSubmission = this.handleSubmission.bind(this);    
  }
  handleOnChange(event){
    const {value: text} = event.target;

    this.setState({ text });
}
handleSubmission(event) {
    event.preventDefault();
    const {text} = this.state;
       if(text !== '') {
        //This is the next step in process
        console.log('Here si what we would submit to our bacend', text);
    }
}
  render() {
      console.log(this.state.text);
    return (
      <form>
        <label>
          Input Text:
          <input type="text" value={this.state.text} onChange={this.handleOnChange} class="form-control " />
        </label>
        <input type="submit" disabled={this.state.text === ''} onClick={this.handleSubmission} value="Submit" class="btn btn-info" />
      </form>
    );
  }
}
export default InputField;
