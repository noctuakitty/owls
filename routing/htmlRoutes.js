var path = require("path");

module.exports = function(app) {
    app.get("/", function(req, res) {
       res.sendFile(path.join(__dirname, "/../public/owl.html")); 
    });
    app.get("/images", function(req, res) {
        res.sendFile(path.join(__dirname, "/../public/images.html")); 
     });
     app.get("/facts", function(req, res) {
        res.sendFile(path.join(__dirname, "/../public/facts.html")); 
     });
     app.get("/gifs", function(req, res) {
        res.sendFile(path.join(__dirname, "/../public/gifs.html")); 
     });
}