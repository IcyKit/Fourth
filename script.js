'use strict';

let budget, date;

function start() {
     budget = +prompt("Ваш бюджет на месяц?", '');
     date = prompt("Введите дату в формате YYYY-MM-DD", '');

    while(isNaN(budget) || budget == "" || budget == null) {
        budget = +prompt("Ваш бюджет на месяц?", '');
        break;
    }

}

start();


let appData = {
    budget: budget,
    expenses: {},
    income: [],
    timeData: date,
    savings: true,
    optionalExpenses: {},
    chooseExpenses: function() {
        for (i = 0; i < 2; i++) {
            let  a = prompt("Введите обязательную статью расходов в этом месяце", ''),
                 b = prompt("Во сколько обойдется?", '');
        
            if ( (typeof(a))=== 'string' && (typeof(a)) != null && (typeof(b)) != null 
                 && a != '' && b != '' && a.length < 50) {
                console.log('done');
                appData.expenses [a] = b; 
            }  else {
                console.log("bad result");
                i--;
            }
        }
    }, 
    detectDayBudget: function() {
        appData.moneyPerDay = (appData.budget / 30).toFixed();  
        alert("Ежедневный бюджет: " + appData.moneyPerDay); 
    },    
    checkSavings: function(){
        if(appData.savings == true) {
            let save = +prompt("Какова сумма накоплений");
                percent = +prompt ("Под какой процент?");
            
            appData.monthIncome = save/100*12*percent
            alert("Доход в месяц с вашего депозита: " + appData.monthIncome);
        }
    },
    detectLevel: function() {
        if (appData.moneyPerDay < 100) {
            console.log("Низкий уровень достатка");
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            console.log("Средний уровень достатка");
        } else if (appData.moneyPerDay > 2000) {
            console.log("Высокий уровень достатка");
        } else {
            console.log("Произошла ошибка");
        } 
    },
    chooseOptExpenses: function() {
        for (let g = 1; g <= 3; g++) {
            let questionOptExpenses = prompt("Статья необязательных расходов?", "");
            appData.optionalExpenses[g] = questionOptExpenses;
            console.log(questionOptExpenses);
        }
    },
    chooseIncome: function() {
        let items = prompt("Что принесет дополнительный доход? (Перечислите через запятую", "");
        if (typeof(items)  != "string" || items == "" || typeof(items) == null) {
                console.log("Неккоректные данные!");
        } else {
            appData.income = items.split(", ");
            appData.income.push(prompt("Может что-то еще?"));
            appData.income.sort();
        //appData.income = String;
        }
        
        appData.income.forEach (function (itemmassive, i) {
            alert("Способы доп. заработка: " + (i+1) + " - " + itemmassive);
        });
    },

    

};

for (let key in appData) {
    console.log("Наша программа включает в себя данные: " + key + appData[key]);
 }
