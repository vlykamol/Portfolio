const express = require('express')
const http = require('http')
const mongoose = require('mongoose')
const path = require('path')
require('dotenv').config()

const app = express()
const server = http.createServer(app)
const PORT = process.env.PORT || 8080

mongoose.connect(process.env.MONGODB_URI).then(() => {
  console.log('database connected');
}).catch(err => console.log('error while connecting database', err))

app.use(express.json())
app.use(express.static(path.join(__dirname, './dist/')))

const msgTemplate = new mongoose.Schema({
  name: {
    type: String
  },
  email: {
    type: String
  },
  msg:{
    type: String
  }
})

const msgModel = mongoose.model('msg', msgTemplate)


app.post('/api/contact', (req, res) =>{
  const msg = new msgModel({
    name: req.body.name,
    email: req.body.email,
    msg : req.body.msg
  })
  msg.save().then(data => res.json({msg:"successfull"})).catch(err => {
    res.json(err.message)})
})


app.get('/*', (req, res) => res.sendFile(path.join(__dirname, './dist/index.html')))

server.listen(PORT, () =>{
  console.log(`server running on http://localhost:${PORT}`);
})