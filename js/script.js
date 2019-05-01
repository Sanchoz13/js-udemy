let money = +prompt('Ваш бюджет на месяц?', ''),
	time = prompt('Введите дату в формате YYYY-MM-DD', '');

let appData = {
	budget: 			money,
	expenses: 			{},
	optionalExpenses: 	{},
	income: 			[],
	timeData: 			time,
	savings: 			false
	};


for (let i  = 0; i < 2; i++) {
	let a = prompt('введите обязательную статью расходов в этом месяце', ''),
		b = prompt('Во сколько это обойдётся?', '');

	if ( (typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b))
	!= null && a != '' && b != '' && a.length < 50) {
		console.log("done");
		appData.expenses[a] = b;
	} else {
		alert('Статья расходов введена неверно. Исправьте пожалуйста');
		i--;
	}
};

/*let i = 0;
while (i < 2) {
	let a = prompt('введите обязательную статью расходов в этом месяце', ''),
		b = prompt('Во сколько это обойдётся?', '');

	if ( (typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b))
	!= null && a != '' && b != '' && a.length < 50) {
		console.log("done");
		appData.expenses[a] = b;
	} else {
		alert('Статья расходов введена неверно. Исправьте пожалуйста');
		i--;
	}
	i++;
}*/

/*let i = 0;
do {
	let a = prompt('введите обязательную статью расходов в этом месяце', ''),
		b = prompt('Во сколько это обойдётся?', '');

	if ( (typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b))
	!= null && a != '' && b != '' && a.length < 50) {
		console.log("done");
		appData.expenses[a] = b;
	} else {
		alert('Статья расходов введена неверно. Исправьте пожалуйста');
		i--;
	}
	i++;
} while (i < 2);*/


appData.moneyPerDay = appData.budget / 30;

alert("Ежедневный бюджет: " + appData.moneyPerDay);

if (appData.moneyPerDay <= 100) {
	console.log('Низкий уровень достатка');
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay <= 2000) {
	console.log('Средний уровень достатка');
} else if (appData.moneyPerDay > 2000) {
	console.log('Высокий уровень достатка');
} else {
	console.log('Произошла ошибка');
}

console.log(appData);