let money,
	time;

money = prompt('Ваш бюджет на месяц?');
time = prompt('Введите дату в формате YYYY-MM-DD');



//create an object appData
var appData = {
	budget: 	money,
	timeData: 	time,
	expenses: 	{},
	income: 	[]
	};

let income = [];
appData.savings = false;

let ques1 = 'введите обязательную статью расходов в этом месяце',
	ques2 = 'Во сколько это обойдётся?';


let item1 = prompt(ques1);
let cost1 = prompt(ques2);
let item2 = prompt(ques1);
let cost2 = prompt(ques2);

//create an object expenses

let expenses = {
	[item1]: cost1,
	[item2]: cost2
	};

alert('бюджет за 1 день = ' + (appData.budget / 30));

//test of script

/*for (var key in expenses) {
	console.log( "Ключ: " + key + " значение: " + expenses[key] );
}

console.log(appData.budget);
console.log(appData.timeData);
console.log(appData.income);
console.log(appData.savings);
*/