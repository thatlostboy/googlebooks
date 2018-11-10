import React from "react";

export const ListItem = props => (
    <div className="card">
        <div className="card-block">


        </div>
        <div className="card-block">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                       {props.title}
                  </div>
                </div>

                <div className="row">
                    <div className="col-sm-12">
                        author
                </div>
                </div>
                <div className="row">
                    <div className="col-sm-2">
                        <img className="img-fluid" src="https://via.placeholder.com/150"></img>
                    </div>
                    <div className="col-sm-6">
                        description
                </div>
                </div>
            </div>
        </div>
    </div>
);

