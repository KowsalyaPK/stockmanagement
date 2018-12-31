// Get dependencies
var express         = require('express'),
    path            = require('path'),
    http            = require('http'),
    bodyParser      = require('body-parser'),
    config          = require('config'),
    compression     = require('compression'),
    cookieParser    = require('cookie-parser');

var expressWinston = require('./utils/winstonLogger').expressWinstonLogger;
// var mongoDB = require('./utils/mongoDB');

var app = express();
app.use(compression());

// Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(expressWinston);
app.use(cookieParser());

// Point static path to dist
app.use(express.static(path.join(__dirname, '../build'), { maxAge: 86400000 * 30 }));

// Catch all other routes and return the index file
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../', 'build/index.html'));
  return res;
});

module.exports = app;


// Get port from environment and store in Express
const port = config.server.port || '8080';
app.set('port', port);

// Create HTTP server
const server = http.createServer(app);
// console.log("Received environment variables ", process.env,  config);

// Listen on provided port
server.listen(port, () => console.log(`API running on localhost:${port}`));