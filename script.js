'use strict';

let numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?','');

alert(numberOfFilms);

let firtsQuestOfWatch = prompt('Один из последних просмотренных фильмов','')

let firstRatingOfWatch = prompt('На сколько оцените его','')

let secondQuestOfWatch = prompt('Один из последних просмотренных фильмов','')

let secondRatingOfWatch = prompt('На сколько оцените его','')

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

personalMovieDB.movies[firtsQuestOfWatch] = firstRatingOfWatch  //Присваиваем ключу его свойство
personalMovieDB.movies[secondQuestOfWatch] = secondRatingOfWatch

console.log(personalMovieDB)