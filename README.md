# liri-node-app

This app is called LIRI, "language interpretation and recognition interface"

Similar to iPhone SIRI, it takes commands from a user and returns information. This is a command line node app that takes in parameters from the user and returns data from Bands In Town, OMDB, and Spotify.  For example, you can type in a song title and it'll retreive info about the song like release date, album, and artist name. 

To use the app you would use the following commands: 

FOR SONG INFO 
node liri.js spotify-this-song 'song title'

FOR MOVIE INFO
node liri.js movie this 'movie title'

TO READ THE RANDOM.TXT FILE
node liri.js do-what-it-says


HERE IS A LINK TO A DEMO VIDEO: https://youtu.be/rKPMoJxmqj4


Node and Javascript were used in the making of this app
The following node modules were used: fs, moment, dotenv, axios
The following APIs were used: OMDB, Spotify, bandsintown


** please note, I was not able to get the bandsintown api key in time, but I will be adding it in at a later date so users can find concerts near them **