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
import { ShowCaseModelator } from "./modules/vitriniModeladora.js"; //classe modeladora
import { FilterCategory } from "./modules/FilterCategory.js";
import { FilterSearch } from "./modules/FilterSearch.js";

import { CartController } from "./modules/CartController.js";


const products = await SearchProducts.search()

console.log(products)


FilterCategory.addEvent(products)
FilterSearch.addEvent(products)
ShowCaseModelator.appendList( products )


CartController.addEvent(products)


//const product = new templateProdutos(products[0]) //aqui vem a vitrini modeladora
//console.log(product)

