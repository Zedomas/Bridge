let express = require('express')
let app = express()
let PORT = 3003
let cors = require('cors')
let mongoose = require('mongoose')
let bodyParser = require('body-parser');

mongoose.connection.on('error', err => console.log(err.message + ' is Mongod Ready and Running Baby?'))
mongoose.connection.on('disconnected', () => console.log('mongo disconnected'))

mongoose.connect('mongodb://localhost:27017/bridge', { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true})
mongoose.connection.once('open', ()=>{
    console.log('connected to Big Goose...')
})


//middleware 
app.use(express.json())
const whitelist = ['http://localhost:3000', 'https://fathomless-sierra-68956.herokuapp.com']
const corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
}

app.use(cors(corsOptions))

//Bridge CONTROLLER
let bridgeController=require('./Controller/bridge.js')
app.use('/bridge', bridgeController)

//User CONTROLLER
let userController=require('./Controller/users_controller.js')
app.use('/users', userController)

//NBA Controller
app.use(bodyParser.json());
let bballHoops = require('./Controller/nbarouter');

app.get('/', (req, res) => {
  res.status(200).json('NBA Teams')
});
app.use('/api/v1/lastdance', bballHoops);



app.listen(PORT, () => {
  console.log('listening on port:', PORT)
})
