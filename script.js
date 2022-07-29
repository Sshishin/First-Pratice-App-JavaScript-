'use strict';

let numberOfFilms ;
let RatingOfWatch;
let QuestOfWatch;

let personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function () {
        personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?','') //вызвали промт который сам по себе является способом оторажения и присвоили его ответ переменной
    
        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?','')// повторяем с переменной чтобы в этом случае ответ так же записался в переменную
        }
    },
    rememberMyFilms: function () {
        for(let i = 1; i <= 2; i++) {
            QuestOfWatch = prompt('Один из последних просмотренных фильмов','').trim(); 
        
               if(QuestOfWatch != '' && RatingOfWatch != '' && QuestOfWatch != null && RatingOfWatch != null && QuestOfWatch.length < 50) {
                console.log ('Все хорошо');
                personalMovieDB.movies[QuestOfWatch] = RatingOfWatch; 
               } else {
                console.log('Еще раз');
                i--; 
               }
        }
    },
    detectPersonalLevel: function () {
        if(personalMovieDB['count'] < 10) {
            console.log('Просмотрено довольно мало фильмов');
        } else if (personalMovieDB['count'] < 30) {
            console.log('Вы классный зритель'); 
        } else if (personalMovieDB['count'] > 30) {
            console.log('Вы киноман'); 
        } else {
            console.log('Произошла ошибка');
        }
        
    },
    privatCheck: function () {
        if(personalMovieDB.privat == false) {
            console.log(personalMovieDB)
        } else {
            alert('Извините, настройки приватности не соответствуют для доступа к информации об объекте')
        }
    },
    writeYourGenres: function () {
        for(let i = 1; i <= 3;i++) {
            let genre = prompt(`Ваш любимый жанр под номером, ${i}`); 
            if(genre == '') {
                i--;
                console.log('Вы ввели неверное значение');
            } else { 
               personalMovieDB.genres[i - 1] = genre;
            }
        }
        personalMovieDB.genres.forEach(function (keys,num) {
            console.log(`Любимый жанр # ${num + 1} и его название ${keys} `)
            });
     },
     toggleVisibleMyDB: function () {
        if(personalMovieDB.privat == false) { //Если значение false
            personalMovieDB.privat = true; //То здесь мы присваиваем значение противоположное
        } else {
            personalMovieDB.privat = false;
        }
     }
     
};

personalMovieDB.writeYourGenres()

// personalMovieDB.toggleVisibleMyDB() //При вызове мы активируем логику переключения привата

