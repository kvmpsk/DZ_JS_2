'use strict';
const products = [
    {id: 1, title: 'Notebook', price: 20000},
    {id: 2, title: 'Mouse', price: 1500},
    {id: 3, title: 'Keyboard', price: 5000},
    {id: 4, title: 'Gamepad', price: 4500},
    {id: 5, title: 'Mobile', price: 30000},
    {id: 6, title: 'Tablet', price: 16000},
    {id: 7, title: 'Xerox PE220', price: 12000},
    {id: 8, title: 'Scanner', price: 5000},
];

const renderProduct = (item, img) => `<div class="product-item">
                <img class="product-img" src="${img}" alt="Фото товара">
                <h3 class="product-title">${item.title}</h3>
                <p class="product-price">${item.price}</p>
                <button class="by-btn">Добавить в корзину</button>
            </div>`;

const renderProducts = list => {
   document.querySelector('.products').insertAdjacentHTML('beforeend', list.map(item => renderProduct(item)).join(""));
}

renderProducts(products);
