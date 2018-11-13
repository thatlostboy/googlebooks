import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
import { List, ListItem } from "../../components/List"
import SearchCard from "../../components/SearchCard"
import API from "../../utils/API";
/*
import DeleteBtn from "../../components/DeleteBtn";

import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, TextArea, FormBtn } from "../../components/Form";

*/

class Search extends Component {
  state = {
    query: "",
    books: [],
    loading: false
  }

  searchBook = (book) => {
    console.log("clicked on search book: ", book)
    API.getNewBooks(book)
      .then(res => {
        console.log("Write this into the new state")
        // console.log(res)
        if (res.data.length > 0) {
          let newList = res.data.map(book => {
            const { title, authors, description, thumbnail, infoLink } = book
            let authorListString = authors.join(", ")
            return { title, authorListString, description, thumbnail, infoLink }
          })
          this.setState({
            books: newList
          }, () => console.log("new State: ", this.state))
        } else {
          console.log("No Data")
        }
      })
      .catch(err => console.log(err))
  }

  listBook = (book) => {
    console.log("clicked on list all saved books")
    API.getBooks()
      .then(res => {
        console.log("clicked on list all saved books")
        console.log(res.data)
      })
      .catch(err => console.log(err))
  }


  saveBook = (book) => {
    console.log("clicked on Save book")
  }

  deleteBook = (book) => {
    console.log("clicked on delete book")
  }

  render() {
    return (
      <div>
        <Jumbotron />
        <SearchCard btnSearch={this.searchBook} />
        <List name="Book Search Results">
          {this.state.books.map(book => {
            return (
              <ListItem
                key = {book.title+book.authorListString+book.thumbnail}
                buttons="view save"
                btnSave={this.saveBook}
                infoLink={book.infoLink}
                title={book.title}
                author={book.authorListString}
                imgURL={book.thumbnail}
                description={book.description}
              />
            )
          })}
        </List>
      </div>
    )
  }
}


export default Search;

