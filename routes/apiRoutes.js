const axios = require("axios");
const router = require("express").Router();
const db = require("../models")


router.get("/books", (req, res) => {
  const search = req.query.search
  const params = { q: search , key: process.env.GOOGLE_BOOKS_APIKEY}
  const urlReq = "https://www.googleapis.com/books/v1/volumes"
  // console.log("Testing.  a whole bunch of lines lines lines. .")
  // console.log(urlReq)
  axios
    .get(urlReq, { params })
    .then(({data: { items }})=> {
      // console.log(items)
      let newList = items.map(book => {
        const { title , authors, description, imageLinks, infoLink } = book['volumeInfo']
        const { thumbnail } = imageLinks
        return { title , authors, description, thumbnail, infoLink }
      })
      return res.json(newList)
    })
    .catch(err => res.status(422).json(err))
});

router.post("/books", (req, res) => {
  console.log("API just got called with body: ", req.body)
  db.Books.create(req.body)
    .then(result => {console.log(result)})
  
});

router.get("/books/:id", (req, res) => {
  let idInfo = req.params.id
  console.log("API just got called requesting id ",idInfo)
});



module.exports = router;
