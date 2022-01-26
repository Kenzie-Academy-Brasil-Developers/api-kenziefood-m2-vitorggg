import { TemplateCart } from './templates.js'

let productsAdded = []

class CartController{
    
    static noProducts = document.querySelector('aside .no-products')
    static cartShowCase = document.querySelector('.vitrini-carrinho')
    static totals = document.getElementById('totals')
    static qtdSpan = document.getElementById('qtd')
    static totalSpan = document.getElementById('total')

    static addEvent( products ){
        
        CartController.showProductsOfLocalStorage()

        const ul = document.querySelector('ul')

        ul.addEventListener('click',(e)=>{ //evento adicionar
            if( e.target.closest('button') !== null ){
                let id = e.target.id 
                const currentProduct = products.find(elem => elem.id==id)
                productsAdded.push(currentProduct)
                
                localStorage.setItem('productsAdded', JSON.stringify(productsAdded) )

                //inserir aqui função para adicionar no carrinho
                CartController.verify()
                const li = TemplateCart.gerarTemplate(currentProduct) 
                CartController.cartShowCase.appendChild(li)
                CartController.atualizarTotQtd(productsAdded)


            }
        })
        CartController.cartShowCase.addEventListener('click',(e)=>{//evento remover
            if(e.target.id){
                console.log(e.target.id)
                let id = e.target.id
                let indexInArray = productsAdded.findIndex(elem => elem.id==id )
                productsAdded.splice(indexInArray,1)
                e.target.closest('li').remove()
                CartController.verify()
                CartController.atualizarTotQtd(productsAdded)

                localStorage.setItem('productsAdded', JSON.stringify(productsAdded) )
            }
        })

    }
    static showProductsOfLocalStorage(){
        let string = localStorage.getItem('productsAdded')
        productsAdded = JSON.parse(string) 
        CartController.verify()
        productsAdded.forEach(elem =>{
            const list = TemplateCart.gerarTemplate(elem)
            CartController.cartShowCase.appendChild(list)
        })
        CartController.atualizarTotQtd(productsAdded)
    }

    static verify(){
        if(productsAdded.length!==0){
            CartController.noProducts.classList.add('hidden')
            CartController.cartShowCase.classList.remove('hidden')
            CartController.totals.classList.remove('hidden')
        }else{
            CartController.noProducts.classList.remove('hidden')
            CartController.cartShowCase.classList.add('hidden')
            CartController.totals.classList.add('hidden')
        }
    }

    static atualizarQtd(arrayOfProducts){
        return arrayOfProducts.length
    }

    static atualizarTotal(arrayOfProducts){
        return arrayOfProducts.reduce( (acc,elem)=> acc+elem.preco ,0)
    }

    static atualizarTotQtd(arrayOfProducts){
        CartController.qtdSpan.innerText = CartController.atualizarQtd(arrayOfProducts)
        CartController.totalSpan.innerText ='R$ '+ CartController.atualizarTotal(arrayOfProducts).toFixed(2)
    }

}



export { CartController  }