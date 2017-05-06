
const util = require('util')

function Library(name, creator) {
  this.name = name;
  this.creator = creator;
  this.playlists = [];
};

function Playlist (name) {
  this.name = name;
  this.tracks = [];
};

Playlist.prototype.overallRating = function() {
    let ratingTotal = 0;
    for (track in this.tracks) {
      ratingTotal += (this.tracks[track].rating)
    };
    return (ratingTotal/this.tracks.length);
  };

Playlist.prototype.totalDuration = function() {
    let duration = 0;
    for (track in this.tracks) {
      duration += this.tracks[track].length;
    };
    return duration;
  };

function Track (title, rating, length) {
  this.title = title;
  this.rating = rating;
  this.length = length;
};

// Create library
const musicLibrary = new Library('musicLibrary', 'Rachel');


// Create playlists
musicLibrary.playlists.push(new Playlist("danceMix"));
musicLibrary.playlists.push(new Playlist("slowJams"));

// Add tracks to playlist
const playlist = musicLibrary.playlists.find(pl => pl.name === 'danceMix');

playlist.tracks.push(new Track ('Modern Love', 5, 286));
playlist.tracks.push(new Track ('Informer', 4, 203));
playlist.tracks.push(new Track ('Jump Around', 3, 195));

// Console.log entire music library
console.log(util.inspect(musicLibrary, false, null));

// Get average rating for a playlist
console.log('Average rating:', playlist.overallRating());

// Get playlist length
console.log('Playlist length:', playlist.totalDuration());

