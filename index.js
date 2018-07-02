// REQUIRE DEPENENCIES
var express = require("express");
var bodyParser = require("body-parser");

// CREATE AND CONFIGURE EXPRESS
var app = express();
var PORT = process.env.PORT || 8080;

// DIRECTS EXPRESS TO HANDLE PARSING AND SERVE STATIC FILES
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('./app/public'));

// CREATE AND CONIFIGURE ROUTING OF DATA
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

// START THE SERVER AND LISTEN FOR CHANGES
app.listen(PORT, function() {
  console.log("Kwiri is running on http://localhost/:" + PORT + " and watching ... \n");
});