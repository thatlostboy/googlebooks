import React from "react";
import "./List.css"

export const List = props => (
  <div className="container book-item">
    <div className="card">
      <div className="card-header">{props.name}</div>
      <div className="card-body">
        {props.children}
      </div>



    </div >
  </div >
);

// export default List;