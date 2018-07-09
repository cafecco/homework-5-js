function Menu(name) {
	this.name = name;
}

function Hamburger(size, stuffing) {
	Menu.apply(this, arguments);
	this.name = 'Hamburger';
	this.size = size; 
	this.stuffing = stuffing;
}


Hamburger.prototype = Object.create(Menu.prototype);
Hamburger.prototype.constructor = Hamburger;

Hamburger.prototype.getSize = function() {
	return this.size;
}

Hamburger.prototype.getStuffing = function() {
	return this.stuffing;
}

Hamburger.prototype.calculatePrice = function() {
	const STUFFING_CHEESE = 10;
	const STUFFING_SALAD = 20;
	const STUFFING_POTATO = 15;

	const SIZE_SMALL_PRICE = 50;
	const SIZE_BIG_PRICE = 100;

	switch (this.size) {
		case 'SIZE_SMALL':
			this.price = SIZE_SMALL_PRICE;
			break;
		case 'SIZE_BIG':
			this.price = SIZE_BIG_PRICE;
			break;
		default: 
			console.log('No size chosen');
		}

	switch (this.stuffing) {
		case 'STUFFING_CHEESE':
			this.price += STUFFING_CHEESE;
			break;
		case 'STUFFING_SALAD':
			this.price += STUFFING_SALAD;
			break;
		case 'STUFFING_POTATO':
			this.price += STUFFING_POTATO;
			break;
		default:
			console.log('No stuffing chosen');
	}
	return this.price;
}

Hamburger.prototype.calculateCalories = function() {
	const STUFFING_CHEESE = 20;
	const STUFFING_SALAD = 5;
	const STUFFING_POTATO = 10;

	const SIZE_SMALL_CALORIES = 20;
	const SIZE_BIG_CALORIES = 40;

	switch (this.size) {
		case 'SIZE_SMALL':
			this.calories = SIZE_SMALL_CALORIES;
			break;
		case 'SIZE_BIG':
			this.calories = SIZE_BIG_CALORIES;
			break;
		default: 
			console.log('No size chosen');
		}

	switch (this.stuffing) {
		case 'STUFFING_CHEESE':
			this.calories += STUFFING_CHEESE;
			break;
		case 'STUFFING_SALAD':
			this.calories += STUFFING_SALAD;
			break;
		case 'STUFFING_POTATO':
			this.calories += STUFFING_POTATO;
			break;
		default:
			console.log('No stuffing chosen');
	}
	return this.calories;
}

function Salad(name, weight) {
	Menu.apply(this, arguments);
	this.weight = weight;
}

Salad.prototype = Object.create(Menu.prototype);
Salad.prototype.constructor = Salad;

Salad.prototype.calculatePrice = function() {
	const CESAR_BASIC_PRICE = 100;
	const OLIVYE_BASIC_PRICE = 50;
	const BASIC_WEIGHT = 100;

	switch (this.name) {
		case 'CESAR':
			this.price = this.weight * CESAR_BASIC_PRICE / BASIC_WEIGHT;
			break;
		case 'OLIVYE':
			this.price = this.weight * OLIVYE_BASIC_PRICE / BASIC_WEIGHT;
			break;
		default:
			console.log('No salad chosen');
	}
	return this.price;
}

Salad.prototype.calculateCalories = function() {
	const CESAR_CALORIES = 20;
	const OLIVYE_CALORIES = 80;
	const BASIC_WEIGHT = 100;

	switch (this.name) {
		case 'CESAR':
			this.calories = this.weight * CESAR_CALORIES / BASIC_WEIGHT;
			break;
		case 'OLIVYE':
			this.calories = this.weight * OLIVYE_CALORIES / BASIC_WEIGHT;
			break;
		default:
			console.log('No salad chosen');
	}	
	return this.calories;
}

function Drink(name) {
	Menu.apply(this, arguments);
}

Drink.prototype = Object.create(Menu.prototype);
Drink.prototype.constructor = Drink;

Drink.prototype.calculatePrice = function() {
	const COLA_PRICE = 50;
	const COFFEE_PRICE = 80;

	switch (this.name) {
		case 'COLA':
			this.price = COLA_PRICE;
			break;
		case 'COFFEE':
			this.price = COFFEE_PRICE;
			break;
		default:
			console.log('No drink chosen');
	}
	return this.price;
}

Drink.prototype.calculateCalories = function() {
	const COLA_CALORIES = 40;
	const COFFEE_CALORIES = 20;

	switch (this.name) {
		case 'COLA':
			this.calories = COLA_CALORIES;
			break;
		case 'COFFEE':
			this.calories = COFFEE_CALORIES;
			break;
		default:
			console.log('No drink chosen');
	}
	return this.calories;
}

function Order(...items) {
	this.items = items;
}

Order.prototype.getOrderItems = function() {
	console.log('Your order is ');
	for (let i = 0; i < this.items.length; i++) {
		console.log(this.items[i]);
	}
}

Order.prototype.addItems = function() {
	for (let i = 0; i < arguments.length; i++) {
		this.items.push(arguments[i]);
	}
	console.log('You have added ');
	for (let i = 0; i < arguments.length; i++){
		console.log(arguments[i]);
	}	
}

Order.prototype.deleteItem = function(needless_item) {
	for (let i = 0; i < this.items.length; i++) {
		if (needless_item == this.items[i]) {
			this.items.splice(i, 1)
		}
	}
}

Order.prototype.deleteSomeItems = function() {
	for (let i = 0; i < arguments.length; i++) {
		for (let j = 0; j < this.items.length; j++){
			if (this.items[j] == arguments[i]) {
				this.items.splice(j, 1);
			}
		}
	}
}

Order.prototype.calculateOrderPrice = function() {
	const order_price = 0; 
	for (let i = 0; i < this.items.length; i++) {
		order_price += this.items[i].calculatePrice();
	}
	return order_price;
}

Order.prototype.calculateOrderCalories = function() {
	const order_calories = 0;
	for (let i = 0; i < this.items.length; i++) {
		order_calories += this.items[i].calculateCalories();
	}
	return order_calories;	
}

Order.prototype.confirmedOrder = function() {
	Object.freeze(this.items);
	console.log('Order is confirmed');	
}

const hamburger_1 = new Hamburger('SIZE_BIG', 'STUFFING_SALAD'); 
const hamburger_2 = new Hamburger('SIZE_SMALL', 'STUFFING_CHEESE'); 
const olivye = new Salad('OLIVYE', 300);
const cesar = new Salad('CESAR', 150);
const cola = new Drink('COLA');
const coffee = new Drink('COFFEE');

const order = new Order(hamburger_1, hamburger_2, olivye);
order.calculateOrderCalories();
order.addItems(cesar, cola, coffee);
order.calculateOrderPrice();
order.deleteItem(cola);
order.calculateOrderPrice();
order.deleteSomeItems(cesar,coffee);