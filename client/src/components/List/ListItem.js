import React from "react";
import {BtnListItem} from "../Buttons"

export const ListItem = props => (
    <div className="card book-item">
        <div className="card-header">
            {props.title}
            <BtnListItem action={props.btnSave}>Save</BtnListItem>
            <BtnListItem action={props.btnView}>View</BtnListItem>
        </div>
        <div className="card-block">
            <div className="container">
                <div className="row card-block-top-spacing">
                    <div className="col-sm-12">
                        {props.author}
                    </div>
                </div>
                <div className="row card-block-top-spacing card-block-bottom-spacing">
                    <div className="col-md-2">
                        <img className="img-fluid" src={props.imgURL} alt={props.title}></img>
                    </div>
                    <div className="col-md-10">
                        {props.description}
                    </div>
                </div>
            </div>
        </div>

    </div>
);

