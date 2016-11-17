var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var port = 3000;
var ipaddr = 'localhost';

app.use(bodyParser.json()); //for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); //for parsin

app.use("/src",express.static(__dirname + '/src'));
app.use("/bower_components", express.static(__dirname + '/bower_components'));

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html');
});

app.listen(port, function() {
    console.log("listening on port " + port);
});