import React from "react";
import { Container, Row, Col } from "../Grid";

export const LibraryListItem = props => (
  <li className="list-group-item">
          {props.children}
          {/* <br></br>
          <button id = {props._id } className = "btn btn-info mt-3" onClick = {() => props.handleSaveSubmit(props._id)} > Save Article </button> */}
  </li>
);