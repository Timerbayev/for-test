const divs = document.getElementsByTagName('div');
console.log(divs);
let num = [];
for(i = 0; i <= 100000; i = i + 1) {
if (i%6 == 0) { num.push(i) }}
divs[0].innerHTML = num.join(' ');

