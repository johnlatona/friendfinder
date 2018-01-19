var friends = require("../app/data/friends.js");

module.exports = function(app) {

	app.get("/api/friends", function(req, res) {
		res.json(friends);
	});

	app.post("/api/friends", function(req, res) {
		var newFriend = req.body;
		var newFriendScoresInt = [];

		for(var i = 0; i < newFriend.scores.length; i++) {
			newFriendScoresInt.push(parseInt(newFriend.scores[i]));
		};
		newFriend.scores = newFriendScoresInt;

		var totalDifferencesArr = [];
		var totalDifference = 0;

		for(var i = 0; i < friends.length; i++) {
			totalDifference = 0;
			var friendsScores = friends[i].scores;
			for(var j = 0; j < friendsScores.length; j++) {
				var newFriendScores = newFriend.scores;
				var difference = parseInt(friendsScores[j]) - parseInt(newFriendScores[j]);
				totalDifference += Math.abs(difference);
			}
			totalDifferencesArr.push(totalDifference);
		}
		var bestScoreMatch = Math.min(...totalDifferencesArr);
		var compatibleIndex = totalDifferencesArr.indexOf(bestScoreMatch);
		var match = friends[compatibleIndex];

		console.log(match);
		friends.push(newFriend);
		console.log(friends)
		res.json(match);
	});
};