const path = require('path');
const express = require('express');
const webpackDevServer = require('./utilities/webpack_dev_server');
const config = require('./config/config');

const isDeveloping = process.env.NODE_ENV !== 'production';
const serverPort = isDeveloping ? config.SERVER_PORT : process.env.PORT;
const app = express();

//  Express App
//
//
app.listen(serverPort, () => {
  console.log('Server: listening on port 3000');
});


// Webpack Dev Server
//
//
webpackDevServer.listen(config.DEV_WEBPACK_PORT, 'localhost', (err) => {
  if (err) {
    return console.log(err);
  }
  return console.log('Webpack Port Server: Listening at http://localhost:3001/');
});
