var money;var apples;
var loafes;var cost_of_apple;
var comm_cost_of_apples;
var cost_of_loaf;var comm_cost_of_loafes;
var sum;
var spend;
money = prompt('сколько у вас с собой есть денег?'); 
apples = prompt('сколько вы купили яблок?');
loafes = prompt('сколько вы купили батонов?');
cost_of_apple = prompt('сколько стоит одно яблоко?');
comm_cost_of_apples = parseInt(apples) * parseInt(cost_of_apple);
cost_of_loaf = prompt(' сколько стоит один батон хлеба?');
comm_cost_of_loafes = parseInt(loafes) * parseInt(cost_of_loaf);
sum = comm_cost_of_apples + comm_cost_of_loafes;
spend = sum <= parseInt(money);
document.write(spend);