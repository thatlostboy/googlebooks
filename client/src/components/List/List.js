import React from "react";

const List = () => (
  <div className="container">
    <div className="card">
      <div className="card-header">List of Items</div>
      <div className="card-body">
        <div className="card">
          <div className="card-header">Card 1<button className="btn btn-sm btn-primary float-right">View</button> <button className="btn btn-sm btn-primary float-right">Save</button></div>
          <div className="card-body">Card 1 Stuff</div>
        </div>



        <div className="card">
          <div className="card-header">Card 2
          </div>
          <div className="card-block">
            <div className="container-fluid">
              <div className="row">
                <div className="col-sm-6">
                  I am in my own column 1
                </div>
                <div className="col-sm-6">
                  I am in my own column 2
                </div>
              </div>
            </div>
          </div>
        </div>



        <div className="card">
          <div className="card-block">


          </div>
          <div className="card-block">
            <div className="container">
              <div className="row">
                <div className="col-sm-12">
                  Card 3: book title
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
      </div>

    </div >
  </div >
);

export default List;