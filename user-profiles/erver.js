var app = express();

// REQUIRE //
var express = require('express');
var bodyParser = require('body-parser');
var expressSession = require('express-session');
var cors = require('cors');
var config = require('./config');

// CONTROLLERS //
var userCtrl = require('./controllers/userCtrl');
var profileCtrl = require('./controllers/profileCtrl');

// USE //
app.use(bodyParser.json());
app.use(expressSession({ secret: config.sessionSecret, saveUninitialized: false, resave: false }));
app.use(cors(corsOptions));
app.use(express.static(__dirname + '/public'));

// GET //
app.get('/api/profiles', profileCtrl.getProfiles);
app.get('/cors', cors(), function (req, res, next) {
    //This route is CORS enabled across all origins
});

// POST //
app.post('/api/login', userCtrl.login);

// PORT //
var port = 3000;
var corsOptions = {
    origin: 'http://localhost:3000'
};
app.listen(port, function () {
    console.log('Listening on port ' + port)
});