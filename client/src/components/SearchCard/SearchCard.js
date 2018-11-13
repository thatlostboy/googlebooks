import React, { Component } from "react";
import "./SearchCard.css"

class SearchCard extends Component {

  state = {
    query: "",
  }

  handleInputChange = event => {
    // Getting the value and name of the input which triggered the change
    const { name, value } = event.target;

    // Updating the input's state
    this.setState({
      [name]: value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    console.log("Hello!")
    console.log(this.state.query)
    this.props.btnSearch(this.state.query)
  }

  render() {
    return (
      <div className="container searchcard-spacing">
        <div className="card">
          <div className="card-header">Basic Search Card</div>

          <div className="card-body">
            <form onSubmit={this.handleSubmit}>
              <div className="form-group row">
                <div className="form-group col-8">
                  <input type="text"  name = "query" value={this.state.query} onChange={this.handleInputChange} className="form-control" placeholder="Book Name" />
                </div>
                <div className="form-group col-4">
                  <button className="btn btn-primary form-group">Search</button>
                </div>
              </div>
            </form>
          </div>

        </div>
      </div>
    )
  }
};

export default SearchCard;