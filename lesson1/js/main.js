'use strict';
const products = [
    {id: 1, title: 'Notebook', price: 20000},
    {id: 2, title: 'Mouse', price: 1500},
    {id: 3, title: 'Keyboard', price: 5000},
    {id: 4, title: 'Gamepad', price: 4500},
];

const renderProduct = (title, price) => {
    return `<div class="product-item">
                <img class="product-img" src="#" alt="Фото товара">
                <h3 class="product-title">${title}</h3>
                <p class="product-price">${price}</p>
                <button class="by-btn">Добавить в корзину</button>
            </div>`;
}

const renderProducts = (list) => {
    let productListHTML = list.map((item) => renderProduct(item.title, item.price));
    document.querySelector('.products').innerHTML = productListHTML;
}

renderProducts(products);
