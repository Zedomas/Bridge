const bcrypt = require('bcrypt')
const express = require('express')
const users = express.Router()
const User = require('../models/user.js')
const jwt = require('jsonwebtoken');


// LOGIN ROUTE
users.post('/login', (req, res) => {
  console.log(req.body);
    User.findOne({username:req.body.username}, (err, foundUser) => {
      if (err) {
        res.status(400).json({ error: err.message })
      }
      console.log("success")
      console.log(req.body.password)
      console.log(foundUser.password)
      if (bcrypt.compareSync(req.body.password, foundUser.password)) {
        console.log(process.env.SECRET)
        let token = jwt.sign(
          { userId: foundUser.id, username: foundUser.username},
          'letsgo',
          { expiresIn: '1h' });
          console.log(foundUser);
        res.status(200).json({
          username: foundUser.username,
          password:foundUser.password,
          token: token,
        });

    } else {
        res.status(401).json({message:"Invalid Username/Password"});
    }
     
    })
  })

  // CREATE ROUTE
users.post('/signup', (req, res) => {
  req.body.password = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10));
    User.create(req.body, (error, createdUser) => {
      if (error) {
        res.status(400).json({ error: error.message })
      }
      res.status(200).send(createdUser)
      console.log(createdUser)
    })
  })




module.exports = users
