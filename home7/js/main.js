//1
let resultButton = document.getElementById('start'),
    budget = document.getElementsByClassName('budget-value'),
    daybudget = document.getElementsByClassName('daybudget-value'),
    level = document.getElementsByClassName('level-value'),
    expenses = document.getElementsByClassName('expenses-value'),
    optionalexpenses = document.getElementsByClassName('optionalexpenses-value'),
    income = document.getElementsByClassName('income-value'),
    monthsavings = document.getElementsByClassName('monthsavings-value'),
    yearsavings = document.getElementsByClassName('yearsavings-value');



console.log(resultButton);


//3
let mandatoryExpenses = document.getElementsByClassName('expenses-item');
console.log(mandatoryExpenses);

//4
let approve = document.getElementsByTagName('button');
let approve1 = approve[0];
let approve2 = approve[1];
let approve3 = approve[2];
console.log(approve1);
console.log(approve2);
console.log(approve3);


//5
let optionalExpenses = document.querySelectorAll('.optionalexpenses-item');
console.log(optionalExpenses);


//6
let income = document.querySelector('#income');
let sum = document.querySelector('#sum');
let percent = document.querySelector('#percent');
let year = document.querySelector('.year-value');
let month = document.querySelector('.month-value');
let day = document.querySelector('.day-value');
console.log(income, sum, percent, year, month, day);

