let money=prompt('Введите бюджет на месяц'),
time=prompt('Введите дату в формате YYYY-MM-DD'), 
cost=prompt('Во сколько обойдется?'),
stat=prompt('Введите обязательную статью расходов в этом месяце'),
expenses={
[stat]:cost
},
appData={
    'бюджет':money,
    'данные времени':time,
    expenses,
    optionalExpenses:{},
    income:{},
    'savings':false
};
alert(money);
console.log(appData);