var express = require('express');
var bodyParser = require('body-parser');
var expressSession = require('express-session');
var cors = require('cors');

var port = 3000;

var corsOptions = {
    origin: 'http://localhost:3000'
};

var app = express();
app.use(bodyParser.json());
// app.use(expressSession({ secret: config.sessionSecret }));
app.use(cors(corsOptions));

app.get('/cors', cors(), function( req, res, next ) {
    //This route is CORS enabled across all origins
});

app.listen(port, function() {
    console.log('Listening on port ' + port)
});