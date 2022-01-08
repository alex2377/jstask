let money,time;
function start(){
     money=+prompt('Введите бюджет на месяц');
    time=prompt('Введите дату в формате YYYY-MM-DD');
    while(isNaN(money) || money=="" || money==null){
        money=+prompt('Введите бюджет на месяц');
    }
}

start();
let appData={
    budget:money,
    timeData:time,
    expenses:{},
    optionalExpenses:{},
    income:{},
    savings:true
};

function chooseExpenses(){
    for (let i=0;i<2;i++){
        let a=prompt('Введите обязательную статью расходов в этом месяце',''),
        b=+prompt('Во сколько обойдется','');
        if(typeof(a)==='string' && typeof(a)!=null && typeof(b)!=null && a!='' && b!='' && a.length<50){
            appData.expenses[a]=b;
        }
       else{
           i--;
       }
    }
}
chooseExpenses();
function detectDayBudget(){
    appData.moneyPerday=(appData.budget/30).toFixed();
    alert("Ежедневный бюджет"+appData.moneyPerday);
}
detectDayBudget();
function detectLevel(){
    if (appData.moneyPerday<100){
        console.log('минимальный уровень достатка');
    }
    else
        if (appData.moneyPerday>100 && appData.moneyPerday<2000){
            
            console.log('средний уровень достатка');
    
        }
    else
        if ( appData.moneyPerday>2000){
            
            console.log('высокий уровень достатка');
    
        }
    
}
detectLevel();
function checkSavings(){
    if(appData.savings==true){
        let save=+prompt("Какова сумма накоплений",""),
        percent=+prompt("Под какой процент","");
        appData.monthIncome=save/100/12*percent;
        alert("Доход в месяц с Вашего депозита:"+appData.monthIncome);
    }

}
checkSavings();
function chooseOptExpenses(){
    for (let i=0;i<3;i++){
        let optExpenses=prompt("Статья необязательных расходов?","");
        if(typeof(optExpenses)!=null && optExpenses!='' && optExpenses.length<50){
            appData.optionalExpenses[i+1]=optExpenses;
        }
       else{
        optExpenses=prompt("Статья необязательных расходов?","");
       }
    }
}
chooseOptExpenses();
console.log(appData);