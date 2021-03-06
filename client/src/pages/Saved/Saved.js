import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
import { List, SavedItem } from "../../components/List"
import API from "../../utils/API";


class Saved extends Component {
  state = {
    books: [],
    loading: false
  }

  getSavedBooks = () => {
    API.getBooks()
      .then(res => {
        console.log("clicked on list all saved books")
        console.log(res.data)
        let newList = res.data.map(book => {
            const { _id, title, authors, description, thumbnail, infoLink } = book
            let authorListString = authors.join(", ")
            return { _id, title, authorListString, description, thumbnail, infoLink }          
        })
        console.log("got data")
        console.log(newList)
        this.setState({
          books: newList
        }, () => console.log("new State: ", this.state))
      })
      .catch(err => console.log(err))
  }


  componentDidMount(){
    this.getSavedBooks()
  }


  deleteBook = (bookID) => {
    console.log("clicked on delete book ", bookID)
    API.deleteBook(bookID)
      .then(
        this.getSavedBooks()
      )
      .catch(
        err => console.log(err)
      )
  }

  render() {
    return (
      <div>
        <Jumbotron />
        <List name="Saved Books">
          {this.state.books.map(book => {
            return (
              <SavedItem
                key = {book._id}
                buttons="view delete"
                btnDelete={this.deleteBook}
                id = {book._id}
                infoLink={book.infoLink}
                title={book.title}
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


export default Saved;

