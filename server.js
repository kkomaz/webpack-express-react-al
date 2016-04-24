// Global exports
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// Local exports
const config = require('./config/config');
const webpackDevServer = require('./utilities/webpack_dev_server');
const isDeveloping = process.env.NODE_ENV !== 'production';
const serverPort = isDeveloping ? config.SERVER_PORT : process.env.PORT;
const app = express();

// =====================================================================//
// mongoose connection
// =====================================================================//
const dbName = 'movieDB';
const connectionString='mongodb://127.0.0.1:27017/'+ dbName;
mongoose.connect(connectionString);

// =====================================================================//
// API routes
// =====================================================================//
const movies = require('./src/server/routes/movies');

// =====================================================================//
// Body Parser
// =====================================================================//
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/api', [movies]);


// =====================================================================//
//  Express App
// =====================================================================//
app.listen(serverPort, () => {
  console.log('Server: listening on port 3000');
});

// =====================================================================//
//  Webpack Dev Server
// =====================================================================//
webpackDevServer.listen(config.DEV_WEBPACK_PORT, 'localhost', (err) => {
  if (err) {
    return console.log(err);
  }
  return console.log('Webpack Port Server: Listening at http://localhost:3001/');
});
