'use strict';
//Объявили переменные под весь проект
let numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?','');
let RatingOfWatch;
let QuestOfWatch;

// Запросили ответ у пользователя
alert(numberOfFilms);

//Создали массив
let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

//  Создали цикл для автоматизации вопросов для пользователей
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

// Выводим сообщение в зависимости от первого вопроса про кол-во фильмов
if(personalMovieDB['count'] < 10) {
    console.log('Просмотрено довольно мало фильмов');
} else if (personalMovieDB['count'] < 30) {
    console.log('Вы классный зритель'); 
} else if (personalMovieDB['count'] > 30) {
    console.log('Вы киноман'); 
} else {
    console.log('Произошла ошибка');
}

console.log(personalMovieDB);


