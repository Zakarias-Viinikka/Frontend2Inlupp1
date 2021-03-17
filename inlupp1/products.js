class Products {
	constructor(shoppingCart) {
		this.products = [];	
	}

	getProduct(id) {
		return this.products[this.getProductId(id)];
	}

	getProductId(id) {
		let items = this.products;
		for (var i = 0; i < items.length; i++) {
			if (items[i] != null) {
				if(items[i].id == id)
					return items[i].id;
			}
		}
		return null;
	}
}