import { cart } from "./modules/cart.js";

const products = document.getElementsByClassName('productsShowcase-list');

products[0].addEventListener('click', (e) => {
    let product = e.target;
    if(product.className === 'product-cart'){
        console.log(product)
        cart.add('cart', product)
    }
})