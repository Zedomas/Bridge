const express = require('express')
const movie = express.Router()
const Movies = require('../models/movies.js')

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


// Add a movie
movie.post('/add', async (req, res) => {
  console.log(req.body)
  Movies.create(req.body, (err, createdUser) => {
    if (err) {
        res.status(400).json({error: error.message})
    }
        res.status(200).send(createdUser)
  })
})

module.exports = movie