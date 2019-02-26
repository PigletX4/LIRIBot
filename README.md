# LIRIBot

Use: LiriBot is a node.js application that takes in two arguments and outputs relevent information.

Functionality: LiriBot has 4 argument options, you will have to choose one and also provide a topic to achieve results, lets look at each individual argument:

1. concert-this: The concert-this argument requires a musical artist as the third arg on the command line, for instance, `` node liri.js concert-this ARTISTNAME ``, and will output 4 results. The results include the Venue Name, the Date, and the City of the Venue.

2. spotify-this-song: This argument requires a song name as the third arg,
`` node liri.js spotify-this-song SONGNAME ``, the output will include the Artist, Song Name, Album, as well as a link to a preview of the song.

3. movie-this: This argument requires a film title as the third arg,
`` node liri.js movie-this MOVIETITLE ``, results included are as followed: Title, Release Year, IMDB Rating, Rotten Tomatoes Rating, Production Country, Language, Plot, and a list of Actors.

4. do-what-it-says: The final argument relies on a .txt file that is formatted as such:
`` spotify-this-song,"I Want It That Way" ``, note the first and second argument spaced out with a comma, this is neccessary for the program to parse the values out properly. The first argument is interchangable with any of the first three argument types and their respective search topic.

For easy visual help check out the Video Demonstration file.

Author: Auri H Robbins-Phillips