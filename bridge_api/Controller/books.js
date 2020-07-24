const express = require('express')
const book = express.Router()
const Books = require('../models/books.js')

// // SHOW ROUTE for new users //
// movie.post('/login', (req, res) => {

//   console.log(req.body)
  
//   User.findOne({ username: req.body.username}, (err, foundUser) => {
//     console.log(foundUser)
//     if (!foundUser) {
//         res.status(400).json({error: message})
//         // need to send back a no found user
//     } else {
//         if (bcrypt.compareSync(req.body.password, foundUser.password)) {
//             res.status(200).json(foundUser) 
//         } else {
//            //needs to say failed password match
//         }
//     }
//   })

// })


// Add a book
book.post('/add', async (req, res) => {
  console.log(req.body)
  Books.create(req.body, (err, createdBook) => {
    if (err) {
        res.status(400).json({error: error.message})
    }
        res.status(200).send(createdBook)
  })
})

module.exports = book