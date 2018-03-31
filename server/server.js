var express = require('express');

var app = express();

const { Ardulino } = require('./ardulino');

const { Raspilino } = require('./raspilino');

const Board1 = new Ardulino();

const { Equipments } = require('./firebase');

// Arduino 1 from sitio
Equipments.init(Board1);

const A1 = Equipments.A1;

// Add headers
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

app.get('/', function (req, res) {
    res.render('client/dist/index.html');
});

app.get('/toggle/:pin', function (req, res) {
    
    const pin = req.params.pin;
    
    Board1.toggle(pin);
    
    res.end();

});

app.get('/boardStatus', function (req, res) {
    const status = Board1.boardStatus(8);
    res.send(status);
});

app.get('/run/:command/:arg1*?/:arg2*?', function (req, res) {

    const command = req.params.command;

    const arg1 = req.params.arg1;

    const arg2 = req.params.arg2;

    const result = Board1[command](arg1, arg2);

    res.send(result);

});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});


