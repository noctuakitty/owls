var express = require("express");
var bodyParser = require("body-parser");

var app = express();

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

var html = require("./routing/htmlRoutes");
html(app);

var PORT = 5200;

app.listen(PORT, function() {
    console.log("APP LISTENING ON PORT: " + PORT);
});
