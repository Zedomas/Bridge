const express = require('express')
const music = express.Router()
const Songs = require('../models/music.js')

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


// Add a song
music.post('/add', async (req, res) => {
  console.log(req.body)
  Songs.create(req.body, (err, createdSong) => {
    if (err) {
        res.status(400).json({error: error.message})
    }
        res.status(200).send(createdSong)
  })
})

module.exports = music