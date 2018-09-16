let crypto = [
  {
    name : "Bitcoin",
    price: 1388.37
  },
  {
    name : "Ethereum",
    price: 716
  },
  {
    name : "Litecoin",
    price: 140
  }
]

let color = ['#dc143c','#ff00ff','#48d1cc'];


const head = document.getElementsByTagName('h1');
const par  = document.getElementsByTagName('p');
const divs = document.getElementsByTagName('div');

for (i in crypto){head[i].innerHTML = crypto[i].name; 
par[i].innerHTML = crypto[i].price; 
divs[i].style.backgroundColor = color[i];
divs[i].style.width = (crypto[i].price - 100)+'px';}




 