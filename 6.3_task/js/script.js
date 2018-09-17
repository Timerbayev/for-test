const form = document.forms[0];


form.onsubmit = function(e){e.preventDefault();
const form = document.forms[0];
let city = form.elements.city.value;
let APIKey = 'bd5e378503939ddaee76f12ad7a97608';
const url = 'http://api.openweathermap.org/data/2.5/weather?q='+city+'&appid='+APIKey;
let xhr = new XMLHttpRequest;
xhr.open('GET',url,false);
if(xhr.status != 200) {
	console.log(xhr.status + ' '+ xhr.statusText);
} else {
	let DATA = JSON.parse(xhr.responseText);
	document.write(DATA.main.temp - 273);
	document.write(DATA.wind.speed);
}
}