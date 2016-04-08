// Twitter keys
var keys = require('./keys.js');
var twitter = require('twitter');
var client = new Twitter(keys.twitterKeys);

// Spotify node package
var spotify = require('spotify');

// Omdb node package
var request = require('request');

var fs = require('fs');

var liri = process.argv[2];

var params = {screen_name: 'coffee house'};

var movieOption = process.argv[3];


switch(liri){
  case 'my-tweets':
  tweets();
  break;
  case 'movie-this':
  movie();
  break;
  case 'spotify-this-song':
  spotifymusic();
  break;

}

// Twitter Process

//var params = {screen_name: 'coffee house'};
	function tweets() {
	client.get('statuses/user_timeline', params, function(error, tweets, response){
  	if (!error) {
  		for (var i=0; i<tweets.length; i++){
	    console.log(tweets[i].text);
	    console.log("------------------------")
	    console.log("* * * * * * * * * * * * *")
  		}
  	}
}
});

// Spotify Process

	
	spotify.search({ type: 'track', query: 'dancing in the moonlight' }, function(err, data) {
    if ( err ) {
        console.log('Error occurred: ' + err);
        return;
    }
    // PRINT DATA
    console.log(data.tracks.items[4]);
 
    function  spotifymusic(){
  		fs.appendFile('random.txt' , ", " + media );
  		spotify.search({ type: 'track', query: media }, function(err, data){
   			console.log(data.tracks.items[0].artists[0]);
   			console.log(data.tracks.items[0].name);
   			console.log(data.tracks.items[0].album.name);
    		console.log(data.tracks.items[0].preview_url);

 });
}
 
});


// OMDB Process	

	function movie() {

 	omdb('http://www.omdbapi.com/?t='+ movieOption +'&y=&plot=short&r=json', function (error, response, body) {
   		if (!error && response.statusCode == 200) {
     	var show = JSON.parse(body);
   		console.log("Title: " + show.Title);
   		console.log("Year: " + show.Year);
   		console.log("IMBD Rating: " + show.imdbRating);
   		console.log("Country: " + show.Country);
   		console.log("Plot: " + show.Plot);
   		console.log("Actors: " + show.Actors);
   		console.log("Metacore: " + show.Metascore);



   }
  
 });
}
