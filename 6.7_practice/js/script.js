class Person { 
    constructor(name){
    this.name = name;
	this.happiness = 0;}
	
	hasCat() {  return ++this.happiness; }
	hasRest() {  return ++this.happiness; }
	hasMoney() { return ++this.happiness;}
	isSunny() { 
	let city ='Moscow';
	let APIKey = 'bd5e378503939ddaee76f12ad7a97608';
	const url = 'http://api.openweathermap.org/data/2.5/weather?q='+city+'&appid='+APIKey;
    let xhr = new XMLHttpRequest;
	xhr.open('GET',url,false);
	if(xhr.status != 200) {
		console.log(xhr.status + ' '+ xhr.statusText);}   
	else {
		let DATA = JSON.parse(xhr.responseText);
		if (DATA.main.temp - 273 >15){return ++this.happiness;}
	}


	}
}
let person = new Person();
const button = document.querySelectorAll("input");
const form = document.forms[0];
button[7].onclick = function(e){e.preventDefault();
 (form.elements.cat.value == 'yes')? person.hasCat():person.happiness = 0;
 (form.elements.rest.value == 'yes')? person.hasRest():person.happiness = 0;
 (form.elements.money.value == 'yes')?person.hasMoney():person.happiness = 0;
 person.isSunny();
 let personName = document.getElementsByClassName('personName');
 personName[0].innerHTML = form.elements.name.value+':';
 let icon = document.getElementsByClassName('icon');
 (person.happiness >= 4)? icon[0].innerHTML = '😁':
 (person.happiness == 3 || person.happiness == 2 )? icon[0].innerHTML = '😐':
 (person.happiness <= 1)?icon[0].innerHTML = '☹️':icon[0].innerHTML = undefined;
 }
  
 

