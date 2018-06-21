//common class of menu items
class RestaurantMenu {
	constructor(name) {
		this.name = name;
	}
}

class Hamburger extends RestaurantMenu {
	constructor(size, stuffing) {
		super(name);
		this.name = "HAMBURGER";
		this.size = size;
		this.stuffing = stuffing;
	}
	
	getSize() {
		conslole.log(this.size); //get size of hamburger
	}
	
	getStuffing() {
		conslole.log(this.stuffing); //get stuffing iof hamburger
	}

	//price of hamburger
	calculatePrice() {
		const STUFFING_CHEESE = 10;
		const STUFFING_SALAD = 20;
		const STUFFING_POTATO = 15;

		//look, which size was chosen
		if (this.size === "SIZE_SMALL") { this.price = 50; }
		else if (this.size === "SIZE_BIG") { this.price = 100; }
		else {cosole.log('You should choose a size')};

		let stuffing_price = 0;
		//look, which stuffing was chosen
		if (this.stuffing === "STUFFING_CHEESE") {
			stuffing_price = STUFFING_CHEESE;
		}
		else if (this.stuffing === "STUFFING_SALAD") {
			stuffing_price = STUFFING_SALAD;
		}
		else if (this.stuffing === "STUFFING_POTATO") {
			stuffing_price = STUFFING_POTATO;
		}
		else console.log('You should choose a stuffing');

		return (this.price + stuffing_price);
	}

	//calories of hamburger
	calculateCalories() {
		const STUFFING_CHEESE = 20;
		const STUFFING_SALAD = 5;
		const STUFFING_POTATO = 10;

		//look, which size was chosen
		if (this.size === "SIZE_SMALL") { this.calories = 20;}
		else if (this.size === "SIZE_BIG") {this.calories = 40;}
		else {cosole.log('You should choose a size')};

		//look, which stuffing was chosen
		let stuffing_calories = 0;
		if (this.stuffing === "STUFFING_CHEESE") {
			stuffing_calories = STUFFING_CHEESE;
		}
		else if (this.stuffing === "STUFFING_SALAD") {
			stuffing_calories = STUFFING_SALAD;
		}
		else if (this.stuffing === "STUFFING_POTATO") {
			stuffing_calories = STUFFING_POTATO;
		}		
		else console.log('You should choose a stuffing');

		return (this.calories + stuffing_calories);
	}
}
//--------------------------------------------------------------//
class Salad extends RestaurantMenu {
	constructor(name, weight) {
		super(name);
		this.weight = weight;
	}

	//look, which salad was chosen, and count price
	calculatePrice() {
		const CESAR_BASIC_PRICE = 100;
		const OLIVYE_BASIC_PRICE = 50;
		const BASIC_WEIGHT = 100;

		if (this.name === "CESAR") {
			this.price = this.weight * CESAR_BASIC_PRICE / BASIC_WEIGHT;
		}
		else if (this.name === "OLIVYE") {
			this.price = this.weight * OLIVYE_BASIC_PRICE / BASIC_WEIGHT;
		}
		else {console.log('You chould choose CESAR or OLIVYE')};

		return this.price;
	}

	//look, which salad was chosen, and count calories
	calculateCalories() {
		const CESAR_CALORIES = 20;
		const OLIVYE_CALORIES = 80;
		const BASIC_WEIGHT = 100;

		if (this.name === "CESAR") {
			this.calories = this.weight * CESAR_CALORIES / BASIC_WEIGHT;
		}
		else if (this.name === "OLIVYE") {
			this.calories = this.weight * OLIVYE_CALORIES / BASIC_WEIGHT;
		}	
		else {console.log('You chould choose CESAR or OLIVYE')};

		return this.calories;
	}
}
//--------------------------------------------------------------//

class Drink extends RestaurantMenu {
	constructor(name) {
		super(name);
	}

	//look, which drink was chosen, and count price
	calculatePrice() {
		const COLA_PRICE = 50;
		const COFFEE_PRICE = 80;

		if (this.name === "COLA") {
			this.price = COLA_PRICE;
		}
		else if (this.name === "COFFEE") {
			this.price = COFFEE_PRICE;
		}
		else {console.log('You chould choose COLA or COFFE')};

		return this.price;
	}

	//look, which drink was chosen, and count calories
	calculateCalories() {
		const COLA_CALORIES = 40;
		const COFFEE_CALORIES = 20;

		if (this.name === "COLA") {
			this.calories = COLA_CALORIES;
		}
		else if (this.name === "COFFEE") {
			this.calories = COFFEE_CALORIES;
		}
		else {console.log('You chould choose COLA or COFFEE')};

		return this.calories;
	}
}
//--------------------------------------------------------------//

class Order {

	constructor(...menu_items){
		this.menu_items = menu_items;
	}

	//show all items in order
	getOrderItems() {
		console.log('Your order is ');
		for (let i = 0; i < this.menu_items.length; i++) {
			console.log(this.menu_items[i]);
		}
	}

	//add any amount of items
	addItems() {
		for (let i = 0; i < arguments.length; i++) {
			this.menu_items.push(arguments[i]);
		}
		console.log('You have added ');
		for (let i = 0; i < arguments.length; i++){
			console.log(arguments[i]);
		}
	}

	//delete any amount of items
	deleteItems() {
		for (let i = 0; i < arguments.length; i++) {
			this.menu_items.splice(arguments[i], 1);
		}
		console.log('You have deleted ');
		for (let i = 0; i < arguments.length; i++) {
			console.log(arguments[i]);
		}
	}

	//confirmation of order, further changes are forbidden
	orderConfirmed() {
		Object.freeze(this.menu_items);
		console.log('Order is confirmed');
	}

	//calculate price of the order and show it
	calculateOrderPrice() {
		var order_price = 0; 
		for (let i = 0; i < this.menu_items.length; i++) {
			order_price += this.menu_items[i].calculatePrice();
		}
		return order_price;
	}

	//calculate calories of the order and show it
	calculateOrderCalories() {
		var order_calories = 0;
		for (let i = 0; i < this.menu_items.length; i++) {
			order_calories += this.menu_items[i].calculateCalories();
		}
		return order_calories;
	}
}
//--------------------------------------------------------------//

var hamburger_1 = new Hamburger('SIZE_BIG', 'STUFFING_SALAD'); 
var hamburger_2 = new Hamburger('SIZE_SMALL', 'STUFFING_CHEESE'); 
var olivye = new Salad('OLIVYE', 300);
var cesar = new Salad('CESAR', 150);
var cola = new Drink('COLA');
var coffee = new Drink('COFFEE');

var order = new Order(hamburger_1, hamburger_2, olivye);
order.calculateOrderCalories();
order.addItems(cesar, cola, coffee);
order.calculateOrderPrice();
order.deleteItems(hamburger_1, cola);
order.calculateOrderPrice();