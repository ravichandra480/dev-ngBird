var express = require('express');
var app = express();
app.use(express.static(__dirname, '/js'));

app.get('/', function(req, res){
    res.sendFile(__dirname +'/app/index.html');
});

app.listen(80);
