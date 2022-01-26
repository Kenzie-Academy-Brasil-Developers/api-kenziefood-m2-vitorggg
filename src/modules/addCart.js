import { TemplateCart } from './templates.js'

const productsAdded = []

class AddCart{
    

    static noProducts = document.querySelector('aside .no-products')
    static cartShowCase = document.querySelector('.vitrini-carrinho')
    static totals = document.getElementById('totals')
    static qtdSpan = document.getElementById('qtd')
    static totalSpan = document.getElementById('total')

    static addEvent( products ){
        const ul = document.querySelector('ul')
        ul.addEventListener('click',(e)=>{ //adicionar
            if( e.target.closest('button') !== null ){
                let id = e.target.id 
                const currentProduct = products.find(elem => elem.id==id)
                productsAdded.push(currentProduct)
                //inserir aqui função para adicionar no carrinho
                AddCart.verify()
                const li = TemplateCart.gerarTemplate(currentProduct) 
                AddCart.cartShowCase.appendChild(li)
                AddCart.atualizarTotQtd(productsAdded)
            }
        })
    }

    static verify(){
        if(productsAdded.length!==0){
            AddCart.noProducts.classList.add('hidden')
            AddCart.cartShowCase.classList.remove('hidden')
            AddCart.totals.classList.remove('hidden')
        }else{
            AddCart.noProducts.classList.remove('hidden')
            AddCart.cartShowCase.classList.add('hidden')
            AddCart.totals.classList.add('hidden')
        }
    }

    static atualizarQtd(arrayOfProducts){
        return arrayOfProducts.length
    }

    static atualizarTotal(arrayOfProducts){
        return arrayOfProducts.reduce( (acc,elem)=> acc+elem.preco ,0)
    }

    static atualizarTotQtd(arrayOfProducts){
        AddCart.qtdSpan.innerText = AddCart.atualizarQtd(arrayOfProducts)
        AddCart.totalSpan.innerText ='R$: '+ AddCart.atualizarTotal(arrayOfProducts).toFixed(2)
    }

}

class RemoveCart{
    static cartShowCase = document.querySelector('.vitrini-carrinho')

    static addEvent(){
        RemoveCart.cartShowCase.addEventListener('click',(e)=>{
            if(e.target.id){
                console.log(e.target.id)
                let id = e.target.id
                let indexInArray = productsAdded.findIndex(elem => elem.id==id )
                productsAdded.splice(indexInArray,1)
                e.target.closest('li').remove()
                RemoveCart.verify()
                RemoveCart.atualizarTotQtd(productsAdded)
            }
        })
    }

    static verify(){
        if(productsAdded.length!==0){
            AddCart.noProducts.classList.add('hidden')
            AddCart.cartShowCase.classList.remove('hidden')
            AddCart.totals.classList.remove('hidden')
        }else{
            AddCart.noProducts.classList.remove('hidden')
            AddCart.cartShowCase.classList.add('hidden')
            AddCart.totals.classList.add('hidden')
        }
    }

    static atualizarQtd(arrayOfProducts){
        return arrayOfProducts.length
    }

    static atualizarTotal(arrayOfProducts){
        return arrayOfProducts.reduce( (acc,elem)=> acc+elem.preco ,0)
    }

    static atualizarTotQtd(arrayOfProducts){
        AddCart.qtdSpan.innerText = AddCart.atualizarQtd(arrayOfProducts)
        AddCart.totalSpan.innerText ='R$: '+ AddCart.atualizarTotal(arrayOfProducts).toFixed(2)
    }



}


export { AddCart , RemoveCart }