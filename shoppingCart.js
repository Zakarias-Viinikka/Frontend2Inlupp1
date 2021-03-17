class ShoppingCart {
	constructor(shoppingCart) {
		this.shoppingCart = shoppingCart;
		if (shoppingCart == null) {
			this.shoppingCart = [];
		}
	}

	addItem(item) {
		let amountToAdd = 1;
		let cart = this.shoppingCart;
		console.log(item)
		let id = this.getCartItemId(item.id);
		if (id != null) {
			cart[id].amount += amountToAdd;
		} else {
			cart.push(new ShoppingItem(item));
		}
	}

	//retrieves shoppingCart[id] 
	getCartItemId(id) {
		let cart = this.shoppingCart;
		for (var i = 0; i < cart.length; i++) {
			if(cart[i].id == id)
				return i;
		}
		return null;
	}

	//Returns amount of items in shopping cart
	itemsInCart() {
		if (this.shoppingCart != null) {	
			let amountOfItems = 0;
			this.shoppingCart.forEach((item) => {
				//console.log(item);
				if (item != null) {
					amountOfItems += item.amount;
				}
			})

			return amountOfItems;
		} return 0;
	}

	removeItem(productId) {
		let cart = this.shoppingCart;
		let id = this.getCartItemId(productId);
		if (id == null) console.log("item doesn't exist in shopping cart");
		else {
			if (cart[id].amount > 1) {
				cart[id].amount--;
			} else {
				this.shoppingCart.splice(id,1);
				return "removeItem";
			}
		}
	}

	getReceipt(person) {
		let cart = this.shoppingCart;
		let receipt = "";
		let price = 0;
		receipt += "<div class='col-md-4 receipt'>"
		receipt += `<h3> Tack för ditt köp ${person.name} </h3>`
		receipt += ` <p> Datum för köp: ${new Date().toDateString()} </p>`
		receipt += ` <hr>`
		for (var i = 0; i < cart.length; i++) {
			receipt += `<p>  ${cart[i].title + ": " + (cart[i].amount +" x " +  cart[i].price) }kr </p>`
			receipt += `<img class='img-fluid productImage' alt='Bild av Produkt' src='${cart[i].image}'><hr><br>`;
			price += cart[i].amount * cart[i].price;
		}
		receipt += `<br> Levereras till: ${person.address}`
		receipt += `<br> Kontaktuppgifter: ${person.telephone}, ${person.email}`
		receipt += ` <br><hr>`
		receipt += ` <p> Summa pris: ${price}kr </p>`
		receipt += "</div>";

		return receipt;
	}
}

class ShoppingItem {
	constructor(item) {
		//console.log(item);
		this.id = item.id;
		this.title = item.title;
		this.description = item.description;
		this.category = item.category;
		this.image = item.image;
		this.price = item.price;
		this.amount = 1;
	}
}