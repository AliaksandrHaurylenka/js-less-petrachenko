//1
let resultButton = document.getElementById('start'),
    budgetVal = document.getElementsByClassName('budget-value')[0],
    daybudget = document.getElementsByClassName('daybudget-value')[0],
    level = document.getElementsByClassName('level-value')[0],
    expenses = document.getElementsByClassName('expenses-value')[0],
    optionalExpensesVal = document.getElementsByClassName('optionalexpenses-value')[0],
    income = document.getElementsByClassName('income-value')[0],
    monthsavings = document.getElementsByClassName('monthsavings-value')[0],
    yearsavings = document.getElementsByClassName('yearsavings-value')[0],
    
    mandatoryExpenses = document.getElementsByClassName('expenses-item'),
    approve = document.getElementsByTagName('button'),
    approve1 = approve[0],
    approve2 = approve[1],
    approve3 = approve[2],

    optionalExpensesItem = document.querySelectorAll('.optionalexpenses-item'),
    incomeItem = document.querySelector('#income'),
    checkSavings = document.querySelector('#savings'),
    sumVal = document.querySelector('#sum'),
    percentVal = document.querySelector('#percent'),
    year = document.querySelector('.year-value'),
    month = document.querySelector('.month-value'),
    day = document.querySelector('.day-value');

// console.log(checkSavings);

let money, time;


approve1.disabled = true;
approve2.disabled = true;
approve3.disabled = true;


resultButton.addEventListener('click', function(){
  time = prompt('Введите дату в формате YYYY-MM-DD', '');

  money = +prompt('Ваш бюджет на месяц?', '');
  while((isNaN(money) || money == '' || money == null)) {
    money = +prompt('Ваш бюджет на месяц?', '');
  }

  appData.budget = money;
  appData.timeData = time;
  budgetVal.textContent = money.toFixed();
  // console.log(appData);
  year.value = new Date(Date.parse(time)).getFullYear();
  month.value = new Date(Date.parse(time)).getMonth() + 1;
  day.value = new Date(Date.parse(time)).getDay();

  approve1.disabled = false;
  approve2.disabled = false;
  approve3.disabled = false;
});

approve1.addEventListener('click', function(){
  let sum = 0;

  for (let i = 0; i < mandatoryExpenses.length; i++) {
    let a = mandatoryExpenses[i].value,
        b = mandatoryExpenses[++i].value;
  
    if ((typeof(a) != null) && 
        (typeof(b) != null) && 
        a != "" && 
        b != "" &&
        !isNaN(b)
      ) {
      appData.expenses[a] = b;
      sum += +b; 
    } 
  }

  appData.mandatoryExpensesSum = sum;
  expenses.textContent = sum;
});

approve2.addEventListener('click', function(){
  for(let i = 0; i < optionalExpensesItem.length; i++) {
    let opt = optionalExpensesItem[i].value;

    if(optionalExpensesItem != null && optionalExpensesItem !='') {
      appData.optionalExpenses[i] = opt;
      optionalExpensesVal.textContent += appData.optionalExpenses[i] + ', ';
    }
    
  }
});


approve3.addEventListener('click', function(){
  if(appData.budget != undefined){
    appData.moneyPerDay = ((appData.budget - appData.mandatoryExpensesSum) / 30).toFixed();
    daybudget.textContent = appData.moneyPerDay;

    if (appData.moneyPerDay <= 20) {
      level.textContent = "У Вас минимальный уровень достатка";
    } else if (appData.moneyPerDay > 20 && appData.moneyPerDay <= 50) {
      level.textContent = "У Вас средний уровень достатка";
    } else if (appData.moneyPerDay > 50) {
      level.textContent = "У Вас высокий уровень достатка";
    } else {
      level.textContent = 'Что-то пошло не так!';
    }
  }else {
    level.textContent = "Начните расчет!!!";
  }
  
});

incomeItem.addEventListener('input', function(){
  let items = incomeItem.value;
  if(isNaN(items)) {
    appData.income = items.split(', ');
    income.textContent = appData.income;
  } 
});

checkSavings.addEventListener('click', function () {
  if (appData.savings == true) {
    appData.savings = false;
  } else {
    appData.savings = true;
  }
});

sumVal.addEventListener('input', function(){
  if(appData.savings == true){
    let sum = +sumVal.value,
        percent = +percentVal.value;
    
    appData.monthIncome = (sum/100/12)*percent;
    appData.yearIncome = (sum/100)*percent;
  }

  monthsavings.textContent = appData.monthIncome.toFixed(1);
  yearsavings.textContent = appData.yearIncome.toFixed(1);
});

percentVal.addEventListener('input', function(){
  if(appData.savings == true){
    let sum = +sumVal.value,
        percent = +percentVal.value;
    
    appData.monthIncome = (sum/100/12)*percent;
    appData.yearIncome = (sum/100)*percent;
  }

  monthsavings.textContent = appData.monthIncome.toFixed(1);
  yearsavings.textContent = appData.yearIncome.toFixed(1);
});

let appData = {
  budget: money,
  timeData: time,
  expenses: {},
  optionalExpenses: {},
  income: [],
  savings: false,
  mandatoryExpensesSum: 0,
};




