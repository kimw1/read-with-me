import React from "react";
import "./Jumbotron.css";

const Jumbotron = (props) => {

  const jumbotronStyle = {
    "backgroundImage": `url(${props.src})`
  }

  return (
    <div className="jumbotron text-center" style={jumbotronStyle}>
      <h1>{props.title}</h1>
      <p>{props.children}</p>
    </div>
  )

}
export default Jumbotron;
