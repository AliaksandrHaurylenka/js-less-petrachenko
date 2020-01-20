"use strict";

// Задание 1
let money = "1200";
let time = "2020-01-20";

let appData = {
  budget: money,
  timeData: time,
  expenses: {question1: "", question2: ""},
  optionalExpenses: "",
  income: [],
  savings: false
};


let age = prompt("Ваш бюджет на месяц?", appData.budget);

alert(`Тебе ${age} лет!`); // Тебе 100 лет!