"use strict";
// Задача для arrays:
// Задача 1
// Заполните новый массив (result) числами из старого (arr). 
// Количество элементов в массиве можно получить как arr.length, 
// а к элементам обращаемся все так же: arr[0], arr[1] и тд.
// Должен получиться точно такой же массив
// let out = document.getElementById("out");
// Решение:
// const arr = [3, 5, 8, 16, 20, 23, 50];
// const result = [];
// for (let i = 0; i < arr.length; i++) {
// 	result[i] = arr[i];
// }
// console.log(result);
// Задача 2
// Измените данный массив так, чтобы все числа были увеличены в 2 раза, 
// а если попадается строка строка - то к ней было добавлено " - done".
// Для определения типа данных используйте typeof();
// Должно получиться: [ 10, 20, 'Shopping - done', 40, 'Homework - done' ]
const data = [5, 10, "Shopping", 20, "Homework"];
for(let i = 0; i < data.length; i++) {
	if (typeof(data [i]) === "number") {
		data [i] = data[i] * 2;
	} else if (typeof(data[i]) === "string") {
		data[i] = `${data[i]} - done`;//интерполяция
	}
}
// Интерполяция:  В строке создаётся конструкция ${...}, внутри которой вы можете поместить любую переменную или выражение:
// let age = 25;
// console.log(`I am ${age} years old`); // I am 25 years old
// Эквивалентно
// console.log('I am ' + age + 'years old'); // I am 25 years old
// 	}
// }
// console.log(data);
// Тренировка как добавить значение в конец массива
// let people = [];
// let people_01 = ["Teddy", "Cathy", "Bobby"];
// console.log(people);
// console.log(people_01);
// people_01[0] = "Georgie";
// console.log(people_01);
// people_01[people_01.length] = "Ihor";
// console.log(people_01);
// // Методы работы с массивами
// people_01.push("Tetiana");
// console.log(people_01);
// let result = people_01.push("Teddy", "Cathy", "Bobby", "Ihor", "Tetiana");
// console.log(people_01);
// people_01.pop(); //удаление последнего индекса массива
// console.log(people_01);
// Задача 3
// Разверните массив data наоборот при помощи цикла и запишите данные в массив result.
// Должно получиться: [ 'Homework', 20, 'Shopping', 10, 5 ]
// Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
// const data = [5, 10, "Shopping", 20, "Homework"];
// const result = [];
// for (let i = 1; i <= data.length; i++) {
// 	result[i - 1] = data[data.length - i];
// }
// console.log(result);
// мой вариант:
// const data = [5, 10, "Shopping", 20, "Homework"];
// const result = [];
// for (let i = data.length - 1; i >= 0; i--) {
// 	result [result.length] = data[i];
// }
// console.log(result);
