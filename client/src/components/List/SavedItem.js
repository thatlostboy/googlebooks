import React from "react";
import {BtnListItem} from "../Buttons"

export const SavedItem = props => (
    <div className="card book-item">
        <div className="card-header">
            {props.title}
            <BtnListItem action={props.btnDelete} id={props.id}>Delete</BtnListItem>
            <a href={props.infoLink} action="" target="_blank"><button className="btn btn-primary btn-sm btn-spacing float-right">View</button></a>
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
                        <img className="img-fluid" src={props.thumbnail} alt={props.title}></img>
                    </div>
                    <div className="col-md-10">
                        {props.description}
                    </div>
                </div>
            </div>
        </div>

    </div>
);

