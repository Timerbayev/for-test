let num1 = prompt("Enter a number equal or more 0");
const unknown = document.querySelector('.block');
num1 = parseInt(num1);
console.log(num1 >= 0)
if (num1 >= 0 ){console.log(num1);} 
else 
{unknown.innerHTML = "<h1> Your data is wrong</h1>";}