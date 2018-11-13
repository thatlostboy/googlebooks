import React from "react";
import {BtnListItem} from "../Buttons"



export const ListItem = props => (
    <div className="card book-item">
        <div className="card-header">
            {props.title}
            <button className="btn btn-primary btn-sm btn-spacing float-right" onClick={ () => props.btnSave ({
                title: props.title,
                description: props.description,
                authors: props.authors,
                infoLink: props.infoLink,
                thumbnail: props.thumbnail,
                etag: props.etag
            })}>Save</button>
            <a href={props.infoLink} target="_blank"><BtnListItem>View</BtnListItem></a>
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

