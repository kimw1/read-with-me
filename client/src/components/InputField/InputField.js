import API from "../../utils/API";
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

  handleOnChange = event => {
    const { name, value } = event.target;
    this.setState({ 
      [name]: value 
    });
  };

  handleSubmission(event) {
    event.preventDefault();
    if (this.state.text !== '') {
      API.saveItem({
        text: this.state.text
      })
        .then(console.log("saved " + this.state.text))
        .then(this.setState({
          text: ''
        }))
        .catch(err => console.log(err))
    }
  };

  render() {
    return (
      <form>
        <label>
          Input Text:
          <input name="text" value={this.state.text} onChange={this.handleOnChange} className="form-control " />
        </label>
        <input type="submit" disabled={this.state.text === ''} onClick={this.handleSubmission} value="Submit" className="btn btn-info" />
      </form>
    );
  }
}
export default InputField;