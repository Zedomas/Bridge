const bcrypt = require('bcrypt')
const express = require('express')
const users = express.Router()
const User = require('../models/user.js')

// SHOW ROUTE for new users //
users.get('/', (req, res) => {
  User.find({}, (err, foundUser) => {
      if (err) {
          res.status(400).json({error: message})
      }
      res.status(200).json(foundUser)
  })
})


// Sign up route
users.post('/signup', async (req, res) => {
  //overwrite the user password with the hashed password, then pass that in to our database
  req.body.password = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10))
  console.log(req.body)
  User.create(req.body, (err, createdUser) => {
    if (err) {
        res.status(400).json({error: error.message})
    }
        res.status(200).send(createdUser)
  })
})

module.exports = users
