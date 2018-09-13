let num = prompt('Enter a number');
num = parseInt(num);
 
 function RandomPower(num) {
 	return  num**Math.round(Math.random()*(10-1));
 	// body...
 }

 
 	console.log(RandomPower(num))