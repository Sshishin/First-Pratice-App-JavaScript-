'use strict';
//Объявили переменные под весь проект
let numberOfFilms ;
let RatingOfWatch;
let QuestOfWatch;

function start () {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?','') //вызвали промт который сам по себе является способом оторажения и присвоили его ответ переменной

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?','')// повторяем с переменной чтобы в этом случае ответ так же записался в переменную
    }
}

start ()

//Создали массив
let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

//  Создали цикл для автоматизации вопросов для пользователей


function rememberMyFilms() {
    for(let i = 1; i <= 2; i++) {
        QuestOfWatch = prompt('Один из последних просмотренных фильмов','');
        RatingOfWatch = prompt('На сколько оцените его','');
    
           if(QuestOfWatch != '' && RatingOfWatch != '' && QuestOfWatch != null && RatingOfWatch != null && QuestOfWatch.length < 50) {
            console.log ('Все хорошо');
            personalMovieDB.movies[QuestOfWatch] = RatingOfWatch; //Добавляем элемент в массив если все хорошо и соединяем название и рейтинг
           } else {
            console.log('Еще раз');
            i--; //Иначе повторяем вопрос
           }
    }
}

rememberMyFilms()


function detectPersonalLevel() {
    if(personalMovieDB['count'] < 10) {
        console.log('Просмотрено довольно мало фильмов');
    } else if (personalMovieDB['count'] < 30) {
        console.log('Вы классный зритель'); 
    } else if (personalMovieDB['count'] > 30) {
        console.log('Вы киноман'); 
    } else {
        console.log('Произошла ошибка');
    }
    
}

detectPersonalLevel()

// Если свойство privat объекта обозначено как false тогда мы можем показать информацию об объекте, иначе показываем сообщение с пояснением
function privatCheck() {
    if(personalMovieDB.privat == false) {
        console.log(personalMovieDB)
    } else {
        alert('Извините, настройки приватности не соответствуют для доступа к информации об объекте')
    }
}

privatCheck()


// Но можно и с аргументом 

// function privatCheck(hidden) {
//     if(!hidden) {
//         console.log(personalMovieDB)
//     } else {
//         alert('Извините, настройки приватности не соответствуют для доступа к информации об объекте')
//     }
// }

// privatCheck(personalMovieDB.privat)




function writeYourGenres() {
    for(let i = 1; i <= 3;i++) {
        personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером, ${i}`) //добавили в качестве места массивы переменную i которая - 1 потому что массив начинается с 0
    }
 }
 
 writeYourGenres()


//  А можно так 

// function writeYourGenres() {
//     for(let i = 1; i <= 3;i++) {
//          const result = prompt(`Ваш любимый жанр под номером, ${i}`) //добавили в качестве места массивы переменную i которая - 1 потому что массив начинается с 0
//          personalMovieDB.genres[i - 1] = result;
//     }
//  }
 
//  writeYourGenres()