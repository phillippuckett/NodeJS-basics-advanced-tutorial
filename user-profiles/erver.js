var express = require('express');
var bodyParser = require('body-parser');
var expressSession = require('express-session');
var cors = require('cors');

// PORT //
var port = 3000;
var corsOptions = {
    origin: 'http://localhost:3000'
};

// CONTROLLERS //
var userCtrl = require('./controllers/userCtrl');
var profileCtrl = require('./controllers/profileCtrl');

var app = express();

app.use(bodyParser.json());
// app.use(expressSession({ secret: config.sessionSecret }));
app.use(cors(corsOptions));

app.get('/cors', cors(), function( req, res, next ) {
    //This route is CORS enabled across all origins
});

app.post('/api/login', userCtrl.login);

app.get('/api/profiles', profileCtrl.getProfiles);

app.listen(port, function() {
    console.log('Listening on port ' + port)
});