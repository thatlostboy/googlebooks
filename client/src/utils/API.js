import axios from "axios";

export default {
  // Gets all books
  getBooks: function () {
    return axios.get("/api/books");
  },

  // Search for new books
  getNewBooks: function (query) {
    const params = { search: query }
    return axios.get("/api/newBooks", { params })
  },
  // Gets the book with the given id
  getBook: function (id) {
    return axios.get("/api/books/" + id);
  },
  // Deletes the book with the given id
  deleteBook: function (id) {
    return axios.delete("/api/books/" + id);
  },
  // Gets the book with the given etag
  getBookEtag: function (etag) {
    return axios.get("/api/books/etag/" + etag);
  },
  // Saves a book to the database
  saveBook: function (bookData) {
    return axios.post("/api/books", bookData);
  }
};
