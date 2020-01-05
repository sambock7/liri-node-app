require("dotenv").config();
var axios = require("axios");
var Spotify = require('node-spotify-api');

var keys = require("./keys.js");
var spotify = new Spotify(keys.spotify);

var appInput = process.argv[2];
var mediaInput = process.argv[3];

function readApplication() {
    switch(application) {
        case "concert-this":
            bandsInTown();
            break;

        case "spotify-this-song":
            spotifyThis();
            break;

        case "movie-this":
            movieThis();
            break;

        case "do-what-it-says":
            readRandom();
            break;
    }
};
readApplication();