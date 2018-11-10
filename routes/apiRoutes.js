const axios = require("axios");
const router = require("express").Router();


router.get("/books", (req, res) => {
   let urlReq = "https://www.googleapis.com/books/v1/volumes?q=harry+potter&key=" + process.env.GOOGLE_BOOKS_APIKEY
  console.log("Testing.  a whole bunch of lines lines lines. .")
  console.log(urlReq)
  axios
    .get(urlReq)
    .then(({data: { items }})=> {
      console.log(items)
      let newList = items.map(book => {
        const { title , authors, description, imageLinks, infoLink } = book['volumeInfo']
        const { thumbnail } = imageLinks
        return { title , authors, description, thumbnail, infoLink }
      })
      return res.json(newList)
    })

  
});

router.post("/books", (req, res) => {
  console.log("API just got called with body: ", req.body)
});

router.get("/books/:id", (req, res) => {
  let idInfo = req.params.id
  console.log("API just got called requesting id ",idInfo)
});



module.exports = router;
