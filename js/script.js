let numberOfFilms;
function start() {
    numberOfFilms = prompt('How many films have watched?', '');
    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = prompt('How many films have watched?', '');
    }
}
start();
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};
function rememberMyFilms() {
    for(let i = 0; i < 2; i++) {
        const a = prompt('One of the last watched films?'), b = prompt('How much rate it?');
        if (a != null && b != null && a != '' && b != '' && a.length < 50) {
            personalMovieDB.movies[a] = b;
            console.log('Done');
        } else {
            console.log('ERROR!!'); i--;
        }
    }
}
rememberMyFilms();
function detectLevel() {
    if (personalMovieDB.count < 10)
        console.log("IT is TOOOOO LOW!!!");
    else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30)
        console.log("IT is NORMAL");
    else if (personalMovieDB.count >= 30)
        console.log("IT is TOOOOO HIGH!!!");
    else
        console.log("ERRRRRORRRR!!!!");
    console.log(personalMovieDB);
}
detectLevel();
function showMyDB(hidden) {
    if(!hidden) {
        console.log(personalMovieDB);
    }
}
//showMyDB(personalMovieDB.private);
function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        personalMovieDB.genres[i-1] = prompt(`Your favourite genre in number ${i}`);
    }
}
writeYourGenres();
function getS() {
    console.log("CLICKED!!");
}