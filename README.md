# friendfinder

##Summary

FriendFinder is a friend-matching app that takes a user's survey answers and matches them to another user with the least differences in their answers. It mimicks most dating apps in functionality. 

The app opens to the home page and the user is prompted to take a survey. Once the user clicks the survey button, the user is taken to a survey page that prompts them to enter their name, a link to a photo of themselves, and to answer 10 questions. The 10 questions follow the basic premise of most personality quizzes. Once the user hits the "Find Your Friend" button, a modal pop-up appears that displays the name and photo of their best match based on their responses.

##Logic

The app is coded using HTML, CSS and Javascript. It utilizes Node.js and Express.js for the backend server logic. When the user hits Find My Friend, their responses are sent via a post request to the server, which then parses apart the data and compares their question responses with other users responses by looping over each array and subtracting the differences from each corresponding response. Differences are tallied using absolute value, and once the total difference is calculated, that amount is pushed to a totalDifferences array that stores the total difference in responses for each of the current users. Then the program finds the lowest value in the totalDifferences array (signifying the most similar responses) and selects that user from the friends array at that index and sends the JSON object back to the client. The client then parses apart the object to display the name and photo of the match in the modal pop-up. 

There are 4 different JS files used in the server make-up, utilizing module.exports to make code accessible in other JS files as needed. 