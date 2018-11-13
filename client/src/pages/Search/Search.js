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
            const { etag, title, authors, description, thumbnail, infoLink } = book
            let authorListString = ""
            if (authors) { 
              authorListString = authors.join(", ") 
            }
            return { etag, title, authors, authorListString, description, thumbnail, infoLink }
          })
          this.setState({
            loading: false,
            books: newList
          }, () => console.log("new State: ", this.state))
        } else {
          this.setState({
            loading: false,
          })
          console.log("No Data")
        }
      })
      .catch(err => {
        this.setState({
          loading: false,
        })
        console.log(err)

      })
  }

  loadingState = (state) => {
    this.setState({
      loading: state
    })
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
    console.log("clicked on Save book: ", book)
    API.getBookEtag(book['etag'])
      .then( res => {
        if (res.data.length > 0) {
          console.log("Already saved!  ")
        } else {
          console.log("okay.  This is new. Let's add it!")
          API.saveBook(book)
          .then(res => {
            console.log("Book was saved!")
          })
          .catch(err => {
            console.log("Book saving failed")
            console.log(err)
          })
        }
      })

  }




  render() {
    return (
      <div>
        <Jumbotron />
        <SearchCard loading={this.state.loading} changeloading={this.loadingState} btnSearch={this.searchBook} />
        <List name="Book Search Results">
          {this.state.books.map(book => {
            return (
              <ListItem
                key={book.etag}
                etag = {book.etag}
                buttons="view save"
                btnSave={this.saveBook}
                infoLink={book.infoLink}
                title={book.title}
                authors={book.authors}
                author={book.authorListString}
                thumbnail={book.thumbnail}
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

