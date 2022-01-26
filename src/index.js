
import { SearchProducts } from "./modules/searchproducts.js";
import { ShowCaseModelator } from "./modules/vitriniModeladora.js"; //classe modeladora
import { FilterCategory } from "./modules/FilterCategory.js";
import { FilterSearch } from "./modules/FilterSearch.js";

import { CartController } from "./modules/CartController.js";

import { ModalController } from "./modules/ModalController.js";

const products = await SearchProducts.search()

ShowCaseModelator.appendList( products )

ModalController.addEvent()
FilterCategory.addEvent(products)
FilterSearch.addEvent(products)
CartController.addEvent(products)


//const product = new templateProdutos(products[0]) //aqui vem a vitrini modeladora
//console.log(product)
