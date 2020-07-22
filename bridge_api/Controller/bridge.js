let express = require('express')
let bridge = express.Router()
let Bridge = require('../models/bridge.js')

bridge.get('/', (req, res) => {
    Bridge.find({}, (err, foundBridge) => {
      if (err) {
        res.status(400).json({ error: err.message })
      }
      res.status(200).json(foundBridge)
    })
  })


bridge.post('/', async (req, res) => {
    Bridge.create(req.body, (error, createdBridge) => {
      if (error) {
        res.status(400).json({ error: error.message })
      }
      res.status(200).send(createdBridge) 
    })
  })

  bridge.put('/:id', (req, res) => {
    Bridge.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedBridge) => {
      if (err) {
        res.status(400).json({ error: err.message })
      }
      res.status(200).json(updatedBridge)
    })
  })

  bridge.delete('/:id', (req, res) => {
    Bridge.findByIdAndRemove(req.params.id, (err, deletedBridge) => {
      if (err) {
        res.status(400).json({ error: err.message })
      }
      res.status(200).json(deletedBridge)
    })
  })

module.exports = bridge