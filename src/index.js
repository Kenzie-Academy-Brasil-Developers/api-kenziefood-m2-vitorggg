import { SearchProducts } from "./modules/searchproducts.js";
import { ShowCaseModelator } from "./modules/vitriniModeladora.js"; //classe modeladora
import { FilterCategory } from "./modules/FilterCategory.js";
import { FilterSearch } from "./modules/FilterSearch.js";
import { CartController } from "./modules/CartController.js";
import { ModalController } from "./modules/ModalController.js";

const products = await SearchProducts.search()
console.log(products)
ShowCaseModelator.appendList( products ) //insere produtos na vitrini
ModalController.addEvent(products) // adiciona eventos de clique nos modais
FilterCategory.addEvent(products) //filtra por categoria
FilterSearch.addEvent(products)
CartController.addEvent(products)


async function reiniciarAplicacao(){
    const products = await SearchProducts.search()
    console.log(products)
    ShowCaseModelator.appendList( products ) //insere produtos na vitrini
    ModalController.addEvent(products) // adiciona eventos de clique nos modais
    FilterCategory.addEvent(products) //filtra por categoria
    FilterSearch.addEvent(products)
}
export {reiniciarAplicacao}