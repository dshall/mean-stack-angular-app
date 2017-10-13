const express = require('express');
const mongoose = require('mongoose');
const config = require('./config/database');
const path = require('path');
const app = express()

mongoose.Promise = global.Promise;
mongoose.createConnection(config.db,  (err) => {
  if(err){
    console.log('Could not connect to database',err);
  }
  else{
    console.log('Secret:' + config.secret);
    console.log('Connected to database', config.db);
  }
});

app.use(express.static(__dirname + '/client/dist'));
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/client/dist/index.html') );
})

app.listen(8080, () => {
  console.log('Example app listening on port 8080!')
})