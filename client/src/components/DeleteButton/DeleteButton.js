import React from "react";
import "./DeleteButton.css";


const DeleteButton = props => (
    <button type="button" className="btn-lg btn-danger delete-btn" {...props}> ✗ </button>
);
export default DeleteButton;
