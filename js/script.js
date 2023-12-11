const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    private: false,
    start: () => {
        personalMovieDB.count = prompt('How many films have watched?', '');
        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = prompt('How many films have watched?', '');
        }
    },
    rememberMyFilms: () => {
        for(let i = 0; i < 2; i++) {
            const a = prompt('One of the last watched films?').trim(), b = prompt('How much rate it?');
            if (a != null && b != null && a != '' && b != '' && a.length < 50) {
                personalMovieDB.movies[a] = b;
                console.log('Done');
            } else {
                console.log('ERROR!!'); i--;
            }
        }
    },
    detectLevel: () => {
        if (personalMovieDB.count < 10)
            console.log("IT is TOOOOO LOW!!!");
        else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30)
            console.log("IT is NORMAL");
        else if (personalMovieDB.count >= 30)
            console.log("IT is TOOOOO HIGH!!!");
        else
            console.log("ERRRRRORRRR!!!!");
        console.log(personalMovieDB);
    },
    showMyDB: function(hidden) {
        if(!hidden) {
            console.log(personalMovieDB);
        }
    },
    toggleVisibleDB: () => {
        if (personalMovieDB.private) personalMovieDB.private = false;
        else personalMovieDB.private = true;
    },
    writeYourGenres: () => {
        for (let i = 1; i < 2; i++) {
            let genres = prompt(`Your favourite genres`).toLowerCase();
            if (genres === '' || genres == null) {
                console.log('Incorrect input or empty');
                i--;
            } else {
                personalMovieDB.genres = genres.split(', ');
                personalMovieDB.genres.sort();
            }
        }
        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Favourite genre ${i + 1} is ${item}`);
        })
    }
};
//showMyDB(personalMovieDB.private);
function getS() {
    console.log("CLICKED!!");
}