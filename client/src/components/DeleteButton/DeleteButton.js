import React from "react";
import "./DeleteButton.css";


const DeleteButton = props => (
    <button type="button" className="btn btn-outline-danger delete-btn" {...props}> ✗ </button>
);
export default DeleteButton;
