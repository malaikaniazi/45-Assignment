// Define the make_album function
function make_album(artist_name, album_title, tracks) {
    var album = {
        artist: artist_name,
        title: album_title,
    };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
// Calling three functions and creating 3 variables with different values
var album1 = make_album("Malaika", "Album title 1");
var album2 = make_album("Laiba", "Album title 2");
// Caling a make_album function with third parameter
var album3 = make_album("Usama", "Album title 3", 10);
// Printing values of our object created my function
console.log(album1);
console.log(album2);
console.log(album3);
