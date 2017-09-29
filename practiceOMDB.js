// INSTRUCTIONS:
// ---------------------------------------------------------------------------------------------------------
// Level 1:
// Take any movie with a word title (ex: Cinderella) as a Node argument and retrieve the year it was created

// Level 2 (More Challenging):
// Take a move with multiple words (ex: Forrest Gump) as a Node argument and retrieve the year it was created.
// ---------------------------------------------------------------------------------------------------------

// Include the request npm package (Don't forget to run "npm install request" in this folder first!)
// ...

var request = require("request");
var Spotify = require('node-spotify-api');
//or assemble the movie name and store it in a variable called "movieName"
var movieName = process.argv[2];
// ...npm


var Spotify = require('node-spotify-api');

var spotify = new Spotify({
    id: <0370572b8a744018976353784d3a959c>,
    secret: <fc4f581b5b3549b98f58aea2aa0712e5>
});

spotify.search({ type: 'track', query: 'All the Small Things' }, function(err, data) {
    if (err) {
        return console.log('Error occurred: ' + err);
    }

    console.log(data);
});
// Grab
// Then run a request to the OMDB API with the movie specified
var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=40e9cece";


// This line is just to help us debug against the actual URL.
console.log(queryUrl);

request(queryUrl, function (error, response, body) {
   if(!error && response.statusCode == 200){


       console.log("Release Year: " + JSON.parse(body).Year)
   }
});
// Then create a request to the queryUrl
// ...


// If the request is successful
// ...

// Then log the Release Year for the movie
// ...