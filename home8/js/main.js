//1
let resultButton = document.getElementById('start'),
    budget = document.getElementsByClassName('budget-value'),
    daybudget = document.getElementsByClassName('daybudget-value'),
    level = document.getElementsByClassName('level-value'),
    expenses = document.getElementsByClassName('expenses-value'),
    optionalexpenses = document.getElementsByClassName('optionalexpenses-value'),
    income = document.getElementsByClassName('income-value'),
    monthsavings = document.getElementsByClassName('monthsavings-value'),
    yearsavings = document.getElementsByClassName('yearsavings-value'),
    mandatoryExpenses = document.getElementsByClassName('expenses-item'),

    approve = document.getElementsByTagName('button'),
    approve1 = approve[0],
    approve2 = approve[1],
    approve3 = approve[2],

    optionalExpenses = document.querySelectorAll('.optionalexpenses-item'),
    incomeItem = document.querySelector('#income'),
    sum = document.querySelector('#sum'),
    percent = document.querySelector('#percent'),
    year = document.querySelector('.year-value'),
    month = document.querySelector('.month-value'),
    day = document.querySelector('.day-value');


