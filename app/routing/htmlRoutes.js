// REQUIRE PATH TO CONNECT TO THE PROPER HTML FILE
var path = require("path");

module.exports = function(app) {

  // INDEX
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
  });

  // SURVEY
  app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "/../public/survey.html"));
  });

  // RESULTS
  app.get("/results", function(req, res) {
    res.sendFile(path.join(__dirname, "/../public/results.html"));
  });

  // ABOUT
  app.get("/about", function(req, res) {
    res.sendFile(path.join(__dirname, "/../public/about.html"));
  });

  // 404, ERROR
  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "/../public/error.html"));
  });

};