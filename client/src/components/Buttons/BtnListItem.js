import React from "react";
import "./BtnListItem.css"

export const BtnListItem = props => {
  return (
        <button className="btn btn-primary btn-sm btn-spacing float-right">{props.children}</button>
  )
};

