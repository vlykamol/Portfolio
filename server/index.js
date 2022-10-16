const express = require('express')
require('dotenv').config()
const mongoose = require('mongoose')
const path = require('path')
const fs = require('fs')

const app = express()
const PORT = process.env.PORT || 3000

mongoose.connect(process.env.MONGODB_URI).then(() => {
  console.log('database connected');
}).catch(err => console.log('error while connecting database', err))

app.use(express.static(path.join(__dirname, '../dist/')))

app.get('/api', (req, res) =>{
  res.send('hey')
})




app.get('/', (req, res) => res.sendFile(path.join(__dirname, '../dist/index.html')))

app.listen(3000, () =>{
  console.log('server running');
})