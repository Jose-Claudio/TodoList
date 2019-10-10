const port = 3003

const bodyParser = require('body-parser')
const express = require('express')
const server = express()
const mongoose = require('mongoose')
const cors = require('cors')

mongoose.connect('mongodb+srv://todo:jcla0031@cluster0-d1ztz.mongodb.net/todo?retryWrites=true&w=majority',
{ useNewUrlParser: true , useUnifiedTopology: true})
server.use(bodyParser.urlencoded({extended: true}))
server.use(bodyParser.json())
server.use(cors())

server.listen(port, function(){
    console.log(`Running on ${port}`)
})

module.exports = server
