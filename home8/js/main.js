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
    sum = document.querySelector('#sum'),
    percent = document.querySelector('#percent'),
    year = document.querySelector('.year-value'),
    month = document.querySelector('.month-value'),
    day = document.querySelector('.day-value');

console.log(approve2);

let money, time;

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

  expenses.textContent = sum;
});

approve2.addEventListener('click', function(){
  for(let i = 1; i < optionalExpensesItem.length; i++) {
    let opt = optionalExpensesItem[i].value;

    // if(optionalExpenses != null && optionalExpenses !='') {
      appData.optionalExpenses[i].value = opt;
      optionalExpensesVal.textContent = appData.optionalExpenses[i] + ', ';

    // }
    
  }
});

let appData = {
  budget: money,
  timeData: time,
  expenses: {},
  optionalExpenses: {},
};




