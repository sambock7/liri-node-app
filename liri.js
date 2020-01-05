require("dotenv").config();
var axios = require("axios");
var Spotify = require('node-spotify-api');
var moment =require('moment');
var keys = require("./keys.js");

var spotify = new Spotify(keys.spotify);
var OMDB = keys.omdb.key
var bandsID = keys.bandsintown.id


var appInput = process.argv[2];
var mediaInput = process.argv[3];

function readApp() {
    switch(appInput) {
        case "concert-this":
            concertThis();
            break;

        case "spotify-this-song":
            spotifyThisSong();
            break;

        case "movie-this":
            movieThis();
            break;

        case "do-what-it-says":
            doWhatItSays();
            break;
    }
};
readApp();

function spotifyThisSong() {

    if(!mediaInput){
        mediaInput = "Amber"
    }

    spotify.search({ type: 'track', query: mediaInput }, function (err, data) {
        if (err) {
            return console.log('Error occurred: ' + err);
        }
        console.log("Artist: " + data.tracks.items[0].artists[0].name);
        console.log("Song Name: " + data.tracks.items[0].name);
        console.log("Preview Link: " + data.tracks.items[0].external_urls.spotify);
        console.log("Album: " + data.tracks.items[0].album.name);
    });
}

function movieThis() {
    
    if(!mediaInput){
        mediaInput = "Mr. Nobody"
    }

    axios
    axios.get("http://www.omdbapi.com/?t=" + mediaInput + "&y=&plot=short&apikey=" + OMDB).then(
        function (response) {
            console.log("Title: " + response.data.Title);
            console.log("Year of release: " + response.data.Year);
            console.log("IMDB Rating: " + response.data.Ratings[1].Value);
            console.log("Rotten Tomatoes Rating: " + response.data.Ratings[2].Value);
            console.log("Produced in: " + response.data.Country);
            console.log("Languages: " + response.data.Language);
            console.log("Actors: " + response.data.Actors);
        })
        .catch(function (error) {
            if (error.response) {
                console.log("---------------Data---------------");
                console.log(error.response.data);
                console.log("---------------Status---------------");
                console.log(error.response.status);
                console.log("---------------Status---------------");
                console.log(error.response.headers);
            } else if (error.request) {

                console.log(error.request);
            } else {

                console.log("Error", error.message);
            }
            console.log(error.config);
        });
}

function doWhatItSays() {
    var fs = require("fs");
    fs.readFile("random.txt", "utf8", function (error, data) {

        if (error) {
            return console.log(error);
        }


        var dataArr = data.split(",");

        appInput = dataArr[0]
        mediaInput = dataArr[1]

        readApp();

    });
}