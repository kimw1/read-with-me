import React from "react";

//renders a bootstrap list item
export const LibraryList = props => (
  <div className="col-md-6 offset-md-3">
      <ul className="list-group">{props.children}</ul>
  </div>
);

// const List = () => (
//   <div className="list-group">
//     <a
//       href="#"
//       className="list-group-item list-group-item-action list-group-item-info"
//     >
//       Your files save here.
//     </a>
//     <a
//       href="#"
//       className="list-group-item list-group-item-action list-group-item-info"
//     >
//       Your files save here.
//     </a>    
//     <a
//       href="#"
//       className="list-group-item list-group-item-action list-group-item-info"
//     >
//       Your files save here.
//     </a>
 
//   </div>
// );

// export default List;
