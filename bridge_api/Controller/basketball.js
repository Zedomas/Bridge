let express = require('express');
let hoops = express.Router();
let NBAController = require('./NBA');
let Hoops = require('../models/favgames.js')

hoops.route('/updates').get(NBAController);

hoops.post('/add', async (req, res) => {
    console.log(req.body)
    Hoops.create(req.body, (err, createdHoops) => {
      if (err) {
          res.status(400).json({error: error.message})
      }
          res.status(200).send(createdHoops)
    })
  })
module.exports = hoops;