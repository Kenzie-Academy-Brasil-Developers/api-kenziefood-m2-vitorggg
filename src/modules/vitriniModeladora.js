import { templateProdutos } from "./templates.js";
const ul = document.querySelector('ul')

class ShowCaseModelator{
    
    static appendList( productsArray ){  
        ul.innerHTML = ''
        for(let i=0 ; i<productsArray.length ; i++){
            let li = templateProdutos(productsArray[i])
            ul.appendChild(li)
        }
    }

}

class CartModelator{
    


}

export { ShowCaseModelator , CartModelator }