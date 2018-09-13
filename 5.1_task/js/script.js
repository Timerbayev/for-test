let num = prompt('Enter a number');
num = parseInt(num);
 
 function RandomPower(num) {
 	return  num**Math.round(Math.random()*(10-1));
 	// body...
 }

 for (i = 0; i <=100; i = i + 1)  {
 	console.log(RandomPower(num));}