const express=require('express')
const mongoose=require('mongoose')
const bodyParser=require('body-parser')
const dotenv = require('dotenv')

const app=express()
const port=3000

// Load environment variables
dotenv.config()

app.use(bodyParser.json())

// Connect to MongoDB(Additional parameters are for configuration)
mongoose.connect(process.env.MONGODB_CONNECTION_URL,{useNewUrlParser:true, useUnifiedTopology:true})

const db=mongoose.connection
db.on('error',console.error.bind(console,'Connection error:'))
db.once('open',()=>{
    console.log('Connected to MongoDB')
})

// Routes(Prefixing a path before the requests paths)
app.use('/api',require('./routes/api'))

app.listen(port,()=>{
    console.log(`Connected to Port:${port}`)
})