import { SearchProducts } from "./modules/searchproducts.js";
import { ShowCaseModelator } from "./modules/vitriniModeladora.js"; //classe modeladora
import { FilterCategory } from "./modules/FilterCategory.js";
import { FilterSearch } from "./modules/FilterSearch.js";
import { CartController } from "./modules/CartController.js";
import { ModalController } from "./modules/ModalController.js";
import { RotaGet } from "./modules/metodos/get.js";

let productosFixos = await SearchProducts.search()
let produtosCriados = await RotaGet.get()

let products = [...productosFixos,...produtosCriados]
console.log(produtosCriados)

console.log(products)
ShowCaseModelator.appendList( products ) //insere produtos na vitrini
ModalController.addEvent(produtosCriados) // adiciona eventos de clique nos modais
FilterCategory.addEvent(products) //filtra por categoria
FilterSearch.addEvent(products)
CartController.addEvent(products)


async function reiniciarAplicacao(){
    productosFixos = await SearchProducts.search()
    produtosCriados = await RotaGet.get()
    products = [...productosFixos,...produtosCriados]
    
    console.log(products)
    ShowCaseModelator.appendList( products ) //insere produtos na vitrini
    ModalController.addEvent(produtosCriados) // adiciona eventos de clique nos modais
    FilterCategory.addEvent(products) //filtra por categoria
    FilterSearch.addEvent(products)
}
export {reiniciarAplicacao,products}