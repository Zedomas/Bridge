const express = require('express')
const comments = express.Router()

const Comment = require('../models/comment.js')


// INDEX ROUTE
comments.get('/comments', (req, res) => {
    Comment.find({}, (err, foundComments) => {
    if (err) {
        res.status(400).json({ error: err.message })
    }
        res.status(200).json(foundComments)
    })
})

  // CREATE ROUTE
comments.post('/comments', (req, res) => {
    console.log(req.body)
    Comment.create(req.body, (error, createdComment) => {
    if (error) {
        res.status(400).json({ error: error.message })
    }
        res.status(200).send(createdComment) 
    })
})


module.exports = Comment