const express = require('express')
const path = require('path')
const app = require('express')()
// const http = require('http').Server(app);
// const io = require('socket.io')(http);

app.use(express.static(path.join(__dirname, 'live-feed-client/build')))
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/live-feed-client/src/index.js'));
});

module.exports = app
