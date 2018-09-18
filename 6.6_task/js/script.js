class Customer {
	constructor(name){
		this.name = name;
		
	}
	buy(){
		console.log('Куплено');
	}
	
}
class childCustomer extends Customer {
	getPresents(){
		console.log('Шарик в подарок ');
	}
}

const Andrey = new Customer("Andrey");
Andrey.buy();
const Tanya = new childCustomer("Tanya");
Tanya.getPresents();



