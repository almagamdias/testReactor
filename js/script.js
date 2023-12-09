const numberOfFilms = +prompt('How many films have watched?');
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};
for(let i = 0; i < 2; i++) {
    const a = prompt('One of the last watched films?'), b = prompt('How much rate it?');
    if (a != null && b != null && a != '' && b != '' && a.length < 50) {
        personalMovieDB.movies[a] = b;
        console.log('Done');
    } else {
        console.log('ERROR!!'); i--;
    }
}
console.log(personalMovieDB);