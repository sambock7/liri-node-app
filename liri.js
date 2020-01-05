require("dotenv").config();
var axios = require("axios");
var Spotify = require('node-spotify-api');

var app = process.argv[2];
var content = process.argv.splice(3).join(" ")

var keys = require("./keys.js");
var spotify = new Spotify(keys.spotify);

var appInput = process.argv[2];
var mediaInput = process.argv[3];

function readApp() {
    switch(app) {
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
readApp();

function bandsInTown() {
    
}