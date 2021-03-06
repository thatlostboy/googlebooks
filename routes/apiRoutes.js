const axios = require("axios");
const router = require("express").Router();
const db = require("../models")



router.get("/newBooks", (req, res) => {
  const search = req.query.search
  const params = { q: search, key: process.env.GOOGLE_BOOKS_APIKEY }
  const urlReq = "https://www.googleapis.com/books/v1/volumes"
  console.log("Testing.  a whole bunch of lines lines lines. .")
  // console.log(urlReq)
  axios
    .get(urlReq, { params })
    .then(response => {
      //console.log("-------before---response")
      //console.log(response.data)
      let { data } = response
      //console.log("------after response---------")
      let { items } = data
      let newList = []
      if (items.length > 0) {
        newList = items.map(book => {
          // console.log(book)
          const { etag } = book
          const authors = book['volumeInfo']['authors'] || ""
          const { title, description, imageLinks, infoLink } = book['volumeInfo']
          const { thumbnail } = imageLinks || ""
          return { title, authors, description, thumbnail, infoLink, etag }
        })
      }
      //console.log(newList)
      return res.json(newList)
    })
    .catch(err => res.status(422).json(err))
});

router.post("/books", (req, res) => {
  console.log("API just got called with body: ", req.body)
  db.Books.create(req.body)
    .then(result => res.json(result))
    .catch(err => res.status(422).json(err))

});

router.get("/books", (req, res) => {
  console.log("API just got called for all saved books")
  db.Books.find()
    .then(result => res.json(result))
    .catch(err => res.status(422).json(err))
});

// mongo ID
router.get("/books/:id", (req, res) => {
  let idInfo = req.params.id
  console.log("API just got called requesting id ", idInfo)
  db.Books.findById(idInfo)
    .then(result => res.json(result))
    .catch(err => res.status(422).json(err))
});

// googlebooks ETAG to avoid duplicate adds
router.get("/books/etag/:etag", (req, res) => {
  let idInfo = req.params.etag
  console.log("API just got called requesting etag ", idInfo)
  db.Books.find({ etag: idInfo })
    .then(result => res.json(result))
    .catch(err => res.status(422).json(err))
});

router.delete("/books/:id", (req, res) => {
  let idInfo = req.params.id
  console.log("API just got called requesting id ", idInfo)
  db.Books.findByIdAndRemove(idInfo)
    .then(result => res.json(result))
    .catch(err => res.status(422).json(err))
});


module.exports = router;
