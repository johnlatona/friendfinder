var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var apiRoutes = require("./routing/apiRoutes.js");
var htmlRoutes = require("./routing/htmlRoutes.js");
var friends = require("./app/data/friends.js");

var app = express();
var PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "public")));

//HTML Routes
htmlRoutes(app);

//API Routes
apiRoutes(app);

app.listen(PORT, function() {
	console.log("App listening on PORT " + PORT);
});

