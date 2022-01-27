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

/* ------------------Adiciona hover-----------------------*/
const btn = document.querySelectorAll('.product-cart')
btn.forEach(elem=>{
    elem.addEventListener('mouseover',(e)=>e.currentTarget.querySelector('img').src = 'public/icons/carrinho.png')
    elem.addEventListener('mouseout',(e)=>e.currentTarget.querySelector('img').src = 'public/icons/icon_cart.png')
})
//--------------------------------------------------------------

async function reiniciarAplicacao(){
    const products = await SearchProducts.search()
    console.log(products)
    ShowCaseModelator.appendList( products ) //insere produtos na vitrini
    ModalController.addEvent(products) // adiciona eventos de clique nos modais
    FilterCategory.addEvent(products) //filtra por categoria
    FilterSearch.addEvent(products)

    /* ------------------Adiciona hover-----------------------*/
    const btn = document.querySelectorAll('.product-cart')
    btn.forEach(elem=>{
        elem.addEventListener('mouseover',(e)=>e.currentTarget.querySelector('img').src = 'public/icons/carrinho.png')
        elem.addEventListener('mouseout',(e)=>e.currentTarget.querySelector('img').src = 'public/icons/icon_cart.png')
    })
    //--------------------------------------------------------------
}
export {reiniciarAplicacao}