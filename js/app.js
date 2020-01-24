"use strict";

// Задание 1
// let money = 1200;
// let time = "2020-01-20";

// let appData = {
//   budget: money,
//   timeData: time,
//   expenses: {question1: "Оплатить комуналку", question2: "150 рублей"},
//   optionalExpenses: "",
//   income: [],
//   savings: false
// };

// console.log(typeof(appData));
// console.log(appData);
// console.log(appData.expenses.question1 + ':' + appData.expenses.question2);

// let budgetOneDay = money/30;
// alert("Ваш бюджет должен составлять " + budgetOneDay + " рублей в день!");
//Конец Задание 1


//Задание 2
// let x = 5; alert( x++ );
// console.log([ ] + false - null + true);
// let y = 1; let x = y = 2; alert(x);
// console.log([ ] + 1 + 2);
// alert( "1"[0] );
// console.log(2 && 1 && null && 0 && undefined);
// console.log(!!( a && b ));
// console.log(( a && b ));
// alert( null || 2 && 3 || 4 );
// alert( +"Infinity" );
// console.log(0 || "" || 2 || undefined || true || falsе);
// Конец Задание 2


// Задание 3
// let money = prompt('Ваш бюджет на месяц?', '');
// let time = prompt('Введите дату в формате YYYY-MM-DD', '');

// let appData = {
//     budget: money,
//     timeData: time,
//     expenses: {},
//     optionalExpenses: "",
//     income: [],
//     savings: false
//   };


// for (let i = 0; i < 2; i++) {
//   let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
//       b = prompt("Во сколько обойдется?", '');

//   if ((typeof(a) != null) && 
//       (typeof(b) != null) && 
//       a != "" && 
//       b != ""
//     ) {
//     appData.expenses[a] = b;
//   } 
// }

// let i = 0;
// while (i < 2) {
//   let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
//       b = prompt("Во сколько обойдется?", '');

//   if ((typeof(a) != null) && 
//       (typeof(b) != null) && 
//       a != "" && 
//       b != ""
//     ) {
//     appData.expenses[a] = b;
//   }
//   i++;
// }

// let i = 0;
// do {
//   let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
//       b = prompt("Во сколько обойдется?", '');

//   if ((typeof(a) != null) && 
//       (typeof(b) != null) && 
//       a != "" && 
//       b != ""
//     ) {
//     appData.expenses[a] = b;
//   }
//   i++;
// } while (i < 2);

// console.log(appData);


// appData.moneyPerDay = appData.budget / 30;
// alert(appData.moneyPerDay);

// if (appData.moneyPerDay < 20) {
//   console.log ("У Вас минимальный уровень достатка");
// } else if (appData.moneyPerDay > 20 && appData.moneyPerDay < 50) {
//   console.log ("У Вас средний уровень достатка");
// } else if (appData.moneyPerDay > 50) {
//   console.log ("У Вас высокий уровень достатка");
// } else {
//   console.log('Что-то пошло не так!');
// }
// Конец Задание 3


//Задание №4
let money, time;

function start() {
  money = +prompt('Ваш бюджет на месяц?', '');
  while((isNaN(money) || money == '' || money == null)) {
    money = +prompt('Ваш бюджет на месяц?', '');
  }

  time = prompt('Введите дату в формате YYYY-MM-DD', '');
}
start();

let appData = {
  budget: money,
  timeData: time,
  expenses: {},
  optionalExpenses: {},
  income: [],
  savings: true,
  chooseExpenses: function() {
    for (let i = 0; i < 2; i++) {
      let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
          b = +prompt("Во сколько обойдется?", '');
    
      if ((typeof(a) != null) && 
          (typeof(b) != null) && 
          a != "" && 
          b != "" &&
          !isNaN(b)
        ) {
        appData.expenses[a] = b;
      } 
    }
  },
  detectDayBudget: function() {
    appData.moneyPerDay = (appData.budget / 30).toFixed();
    alert('Ваши ежедневные расходы должны быть не более ' + appData.moneyPerDay + ' рублей');
  },
  detectLevel: function() {
    if (appData.moneyPerDay < 20) {
      console.log ("У Вас минимальный уровень достатка");
    } else if (appData.moneyPerDay > 20 && appData.moneyPerDay < 50) {
      console.log ("У Вас средний уровень достатка");
    } else if (appData.moneyPerDay > 50) {
      console.log ("У Вас высокий уровень достатка");
    } else {
      console.log('Что-то пошло не так!');
    }
  },
  checkSavings: function() {
    if(appData.savings == true) {
      let save = +prompt('Какова сумма накоплений?'),
          persent = +prompt('Под какой процент?');
  
      appData.monthIncome = (save/100/12)*persent;
      appData.monthIncome.toFixed();
      alert('Ваш доход в месяц с депозита составляет: ' + appData.monthIncome + ' рублей');  
    }
  },
  chooseOptExpenses: function() {
    for(let i = 1; i < 4; i++) {
      let optionalExpenses = prompt(i + '. Статья необязательных расходов?');
  
      if(optionalExpenses != null && optionalExpenses !='') {
        appData.optionalExpenses[i] = optionalExpenses;
      }
      
    }
  },
  chooseIncome: function() {
    let items = prompt('Что Вам даст дополнительный доход? (перечислите через запятую)', '');

    while(items == null) {
      items = prompt('Что Вам даст дополнительный доход? (перечислите через запятую)', '');
    }

    if(isNaN(items) && items != '') {   
      appData.income = items.split(', ');
      
    }
    
    let item = prompt('Может что-то еще?', '');
    if(isNaN(item && item != '')) {
      appData.income.push(item);
    }    
    appData.income.sort();
  }
};
appData.chooseIncome();
console.log(appData);

//Конец Задание №4


