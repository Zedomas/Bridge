let express = require('express');
let bballHoops = express.Router();
let bballController = require('./nba');

bballHoops.route('/updates').get(bballController);
module.exports = bballHoops;