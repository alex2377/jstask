let money=+prompt('Введите бюджет на месяц'),
time=prompt('Введите дату в формате YYYY-MM-DD'), 

appData={
    budget:money,
    timeData:time,
    expenses:{},
    optionalExpenses:{},
    income:{},
    savings:false
};

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
appData.moneyPerday=appData.budget/30;
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


console.log(appData);