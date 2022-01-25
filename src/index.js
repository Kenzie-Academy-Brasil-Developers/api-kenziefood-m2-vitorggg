// import { Cart } from "./modules/cart.js";

// const products = document.getElementsByClassName('productsShowcase-list');

// products[0].addEventListener('click', (e) => {
//     let product = e.target;
//     if(product.className === 'product-cart'){
//         console.log(product)
//         Cart.add('cart', product)
//     }
// })

import { SearchProducts } from "./modules/searchproducts.js";
import { TemplateProducts } from "./modules/templates.js";

const products = await SearchProducts.search()
console.log(products)

const product = new TemplateProducts(products[0])
console.log(product)

