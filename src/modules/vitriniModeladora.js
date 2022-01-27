import { templateProdutos } from "./templates.js";
const ul = document.querySelector('ul')

class ShowCaseModelator{
    
    static appendList( productsArray ){  
        ul.innerHTML = ''
        for(let i=0 ; i<productsArray.length ; i++){
            let li = templateProdutos(productsArray[i])
            ul.appendChild(li)
        }
        /* ------------------Adiciona hover-----------------------*/   
        const btn = document.querySelectorAll('.product-cart')
        btn.forEach(elem=>{
            elem.addEventListener('mouseover',(e)=>e.currentTarget.querySelector('img').src = 'public/icons/carrinho.png')
            elem.addEventListener('mouseout',(e)=>e.currentTarget.querySelector('img').src = 'public/icons/icon_cart.png')
        })
        
    }
    
}

class CartModelator{}

export { ShowCaseModelator , CartModelator }
