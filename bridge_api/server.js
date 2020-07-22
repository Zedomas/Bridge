let express = require('express')
let app = express()
let PORT = 3003
let cors= require('cors')
let mongoose= require('mongoose')

mongoose.connection.on('error', err => console.log(err.message + ' is Mongod Ready and Running Baby?'))
mongoose.connection.on('disconnected', () => console.log('mongo disconnected'))

mongoose.connect('mongodb://localhost:27017/bridge', { useNewUrlParser: true })
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

//CONTROLLER
let bridgeController=require('./Controller/bridge.js')
app.use('/bridge', bridgeController)

