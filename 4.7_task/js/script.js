

function haveEnough(money,apples,loafes,cost_of_apple,cost_of_loaf) {
    var spend; 
	let sum = (parseInt(apples) * parseInt(cost_of_apple)) + (parseInt(loafes) * parseInt(cost_of_loaf));
	(sum <= parseInt(money)) ? spend = "Вам хватает денег на покупки" : spend = "Вам не хватает денег";
   
   return spend;

}

let money = prompt('сколько у вас с собой есть денег?'); 
let apples = prompt('сколько вы купили яблок?');
let loafes = prompt('сколько вы купили батонов?');
let cost_of_apple = prompt('сколько стоит одно яблоко?');
let cost_of_loaf = prompt(' сколько стоит один батон хлеба?');

const texts = document.querySelector('h1');
let tex =  haveEnough(money,apples,loafes,cost_of_apple,cost_of_loaf);

texts.innerText = tex;