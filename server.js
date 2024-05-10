const express = require('express')
const app = express()

const PORT = process.env.PORT || 3030
const server = app.listen(PORT, () => console.log(`Listening on ${PORT}\n`))

const messages = [
  {
    channel: "1",
    account: "0xcA8Fa8f0b631EcdB18Cda619C4Fc9d197c8aFfCa",
    text: "Welcome to our project!"
  },
  {
    channel: "1",
    account: "0x1b3cB81E51011b549d78bf720b0d924ac763A7C2",
    text: "This is a place to connect with friends and share crypto!"
  },
  
]

const { Server } = require("socket.io");
const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000"
  }
})

io.on('connection', (socket) => {
  console.log('a user connected')

  socket.on('get messages', () => {
    io.emit('get messages', messages)
  })

  socket.on('new message', (msg) => {
    messages.push(msg)
    io.emit('new message', messages)
  })
})