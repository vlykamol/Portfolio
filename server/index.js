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

app.get('/api', (req, res) =>{
  res.send('hey')
})


app.get('/*', (req, res) => res.sendFile(path.join(__dirname, './dist/index.html')))

server.listen(PORT, () =>{
  console.log(`'server running on http://localhost:${PORT}`);
})