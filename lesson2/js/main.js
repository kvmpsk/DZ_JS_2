'use strict';
class ProductList {
   constructor(container = '.products') {
      this.container = container;
      this.goods = [];
      this.allProducts = [];

      this.fetchGoods();
      this.render();
	}
	
	sum() {
		return this.goods.reduce((sum, { price }) => sum + price, 0); 
	}

	fetchGoods() {
      this.goods = [
			{ id: 1, title: 'Notebook', price: 20000 },
			{ id: 2, title: 'Mouse', price: 1500 },
			{ id: 3, title: 'Keyboard', price: 5000 },
			{ id: 4, title: 'Gamepad', price: 4500 },
			{ id: 5, title: 'Mobile', price: 30000 },
			{ id: 6, title: 'Tablet', price: 16000 },
			{ id: 7, title: 'Xerox PE220', price: 12000 },
			{ id: 8, title: 'Scanner', price: 5000 },
		];
   }

   render() {
         const block = document.querySelector(this.container);

         for (const good of this.goods) {
            const productObject = new ProductItem(good);
             this.allProducts.push(productObject);
             block.insertAdjacentHTML('afterbegin', productObject.render());
         }
     }
 }

class ProductItem {
   constructor(product, img = 'https://via.placeholder.com/200x150') {
		this.title = product.title;
		this.price = product.price;
		this.id = product.id;
		this.img = img;
    }

    render() {
        return `<div class="product-item" data-id="${this.id}">
                      <img src="${this.img}" alt="Some img">
                      <div class="desc">
                          <h3>${this.title}</h3>
                          <p>${this.price} \u20bd</p>
                          <button class="by-btn">Купить</button>
                      </div>
                  </div>`;
    }
}

new ProductList();
	

class CartItem extends ProductList {
	constructor(goods, quantity) {
		super(goods)
		this.quantity = quantity;
		this.init();
		this.render();
		this.getCartItem();
		this.clearCartItem();
	}

	init() {
		
	}

	render() {

	}
	
	getCartItem() {

	}

	clearCartItem () {
	
	}

};