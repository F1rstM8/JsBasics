// // завдання 1
let a = 5;
let b = 5;
let dob = a * b;
console.log("Добуток: " + dob);
// завдання 2
let c = 10;
let d = 5;
let dil = c / d;
console.log("Частка: " + dil);
// // завдання 3
let e = 15;
let f = 100;
let sum = c * d;
console.log("Сумма: " + sum);
// // завдання 4
const numberValue = 11;
console.log(numberValue);
let isCorrect = true;
console.log(isCorrect);
let languageName = "java script";
console.log(languageName);
let stringNumber = "100";
console.log(stringNumber);
//завдання 5
let num = 1;
num += 11;
num -= 11;
num *= 11;
num /= 11;
num++;
num--;
// завдання на введення та виведення
// завдання 1
const exer1 = Number(
  prompt("ВВедіть довільне число яке хочете піднести до квадрату:")
);
const result1 = exer1 ** 2;
alert("Ваше число в квадраті: " + result1);
// завдання 2
const exer21 = Number(
  prompt("Введіть перше число для розрахунку середнього арифматичного :")
);
const exer22 = Number(
  prompt("Введіть друге число для розрахунку середнього арифматичного:")
);
const average = (exer21 + exer22) / 2;
alert("Середнє арифметичне: " + average);
// завдання 3
const exer3 = Number(
  prompt("ВВедіть кількість хвилин для переведення в секунди:")
);
const result3 = exer3 * 60;
alert("Ваша кількість хвилин в секундах: " + result3);
// завдання 4
let greeting = "Hello,";
let userName;
userName = prompt("Як вас звати?");
alert(greeting + " " + userName + "!");
