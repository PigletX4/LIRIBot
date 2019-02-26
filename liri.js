require("dotenv").config();

var keys = require("./keys.js");

var Spotify = require('node-spotify-api');

var spotify = new Spotify(keys.spotify);

var axios = require("axios");

var moment = require('moment');

var argInd = process.argv;

var fs = require("fs");

if(argInd[2] === 'movie-this'){

    var urlIn = '';
    
    nameBuilder();

    var queryUrl = "http://www.omdbapi.com/?t=" + urlIn + "&y=&plot=short&apikey=trilogy";
    axios.get(queryUrl).then(
        function(response) {
            console.log("------------------------------------------")
            console.log("Film Title: " + response.data.Title);
            console.log("Release Year: " + response.data.Year);
            console.log("IMDB Rating: " + response.data.imdbRating);
            console.log("Rotten Tomatoes: " + response.data.Ratings[1].Value);
            console.log("Production Country: " + response.data.Country);
            console.log("Language: " + response.data.Language);
            console.log("Plot: " + response.data.Plot);
            console.log("Actors: " + response.data.Actors);
            console.log("------------------------------------------")
        }
    );

}

else if(argInd[2] === 'concert-this'){
    
    var urlIn = '';

    nameBuilder();

    var queryUrl = "https://rest.bandsintown.com/artists/" + urlIn + "/events?app_id=codingbootcamp";
    axios.get(queryUrl).then(
        function(response) {
            for(i=0;i<4;i++){
            var date = response.data[i].datetime;
            var dateFixed = moment(date).format('MMMM Do YYYY, h:mm:ss a');
            console.log("------------------------------------------")
            console.log('Venue: ' + response.data[i].venue.name);
            console.log('Venue Location: ' + response.data[i].venue.city);
            console.log('Date: ' + dateFixed);
            console.log('---------------------------------------------------')
            };
        }

    );
}

else if(argInd[2] === 'spotify-this-song'){

    var urlIn = '';

    nameBuilder();

    spotify.search({ type:'track', query: urlIn, limit:1})
    .then(function(data){
        console.log("------------------------------------------")
        console.log(data.tracks.items[0].name);
        console.log(data.tracks.items[0].artists[0].name);
        console.log(data.tracks.items[0].album.name);
        console.log(data.tracks.items[0].preview_url);
        console.log("------------------------------------------")
    });

}

else if(argInd[2] === 'do-what-it-says'){

    fs.readFile("random.txt", "utf8", function(error, data) {

        if (error) {
          return console.log(error);
        }

        console.log(data);
      
        var dataArr = data.split(",");
      
        console.log(dataArr);
        
        if(dataArr[0] === 'movie-this'){

            var urlIn = dataArr[1];
                    
            var queryUrl = "http://www.omdbapi.com/?t=" + urlIn + "&y=&plot=short&apikey=trilogy";
            axios.get(queryUrl).then(
                function(response) {
                    console.log("------------------------------------------")
                    console.log("Film Title: " + response.data.Title);
                    console.log("Release Year: " + response.data.Year);
                    console.log("IMDB Rating: " + response.data.imdbRating);
                    console.log("Rotten Tomatoes: " + response.data.Ratings[1].Value);
                    console.log("Production Country: " + response.data.Country);
                    console.log("Language: " + response.data.Language);
                    console.log("Plot: " + response.data.Plot);
                    console.log("Actors: " + response.data.Actors);
                    console.log("------------------------------------------")
                }
            );
        
        }
        
        else if(dataArr[0] === 'concert-this'){
            
            var urlIn = dataArr[1];
        
            var queryUrl = "https://rest.bandsintown.com/artists/" + urlIn + "/events?app_id=codingbootcamp";
            axios.get(queryUrl).then(
                function(response) {
                    for(i=0;i<4;i++){
                    var date = response.data[i].datetime;
                    var dateFixed = moment(date).format('MMMM Do YYYY, h:mm:ss a');
                    console.log("------------------------------------------")
                    console.log('Venue: ' + response.data[i].venue.name);
                    console.log('Venue Location: ' + response.data[i].venue.city);
                    console.log('Date: ' + dateFixed);
                    console.log('---------------------------------------------------')
                    };
                }
        
            );
        }
        
        else if(dataArr[0] === 'spotify-this-song'){
        
            var urlIn = dataArr[1];
        
            spotify.search({ type:'track', query: urlIn, limit:1})
            .then(function(data){
                console.log("------------------------------------------")
                console.log(data.tracks.items[0].name);
                console.log(data.tracks.items[0].artists[0].name);
                console.log(data.tracks.items[0].album.name);
                console.log(data.tracks.items[0].preview_url);
                console.log("------------------------------------------")
            });
        
        }
      });

}



function nameBuilder(){
    for (var i = 3; i < argInd.length; i++) {

        if (i > 3 && i < argInd.length) {
          urlIn = urlIn + "+" + argInd[i];
        }
        else {
          urlIn += argInd[i];
      
        }
    }
}