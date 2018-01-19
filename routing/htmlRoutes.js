var path = require("path");


module.exports =  function(app) {

	app.get("/survey", function(req, res) {
		res.sendFile(path.join(__dirname, "../public/survey.html"));
	});

	app.get("/", function(req,res) {
		res.sendFile(path.join(__dirname, "../public/home.html"));
	});

	app.get("/:extension?", function(req,res) {
		var chosen = req.params.extension;

		if(chosen) {
			res.sendFile(path.join(__dirname, "../public/home.html"));				
		}
		res.sendFile(path.join(__dirname, "../public/home.html"));
	});
};

