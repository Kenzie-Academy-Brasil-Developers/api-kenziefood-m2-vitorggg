
import { SearchProducts } from "./modules/searchproducts.js";
import { ShowCaseModelator } from "./modules/vitriniModeladora.js"; //classe modeladora
import { FilterCategory } from "./modules/FilterCategory.js";
import { FilterSearch } from "./modules/FilterSearch.js";

import { CartController } from "./modules/CartController.js";

const products = await SearchProducts.search()

console.log(products)


ShowCaseModelator.appendList( products )

FilterCategory.addEvent(products)
FilterSearch.addEvent(products)
CartController.addEvent(products)


//const product = new templateProdutos(products[0]) //aqui vem a vitrini modeladora
//console.log(product)
