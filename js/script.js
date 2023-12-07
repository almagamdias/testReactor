const numberOfFilms = +prompt('How many films have watched?');
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};
const a = prompt('One of the last watched films?'),
      b = prompt('How much rate it?'),
      c = prompt('One of the last watched films?'),
      d = prompt('How much rate it?');
personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;
console.log(personalMovieDB);