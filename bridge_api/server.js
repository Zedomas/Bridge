//----------------->
// Dependencies
let express = require('express')
let app = express()
let PORT = process.env.PORT || 3003
let cors = require('cors')
let mongoose = require('mongoose')
//------------------>

//Database
//------------------->
// Connection Info and error handling
mongoose.connection.on('error', err => console.log(err.message + ' is Mongod Ready and Running Baby?'))
mongoose.connection.on('disconnected', () => console.log('mongo disconnected'))
// database connection variable
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/bridge'
// database connection
mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true})
mongoose.connection.once('open', ()=>{
    console.log('connected to Big Goose...')
})
//-------------------->

//middleware 
app.use(express.json())
const whitelist = ['http://localhost:3000', ]
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

//Movies CONTROLLER
let moviesController=require('./Controller/movies.js')
app.use('/movies', moviesController)


app.listen(PORT, () => {
  console.log('listening on port:', PORT)
})
