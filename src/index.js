import { cart } from "./modules/cart.js";
import { filter } from "./modules/filterSearch.js";

const products = document.getElementsByClassName('productsShowcase-list');
const input = document.getElementsByClassName('search-input')

products[0].addEventListener('click', (e) => {
    let product = e.target;
    if(product.className === 'product-cart'){
        console.log(product)
        cart.add('cart', product)
    }
})

input[0].addEventListener('keyup', (e) => {
    filter.search(e.target.value)
})
