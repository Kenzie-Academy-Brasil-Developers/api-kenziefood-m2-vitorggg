import { TemplateCart } from './templates.js'



class AddCart{
    
    static productsAdded = []

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
                AddCart.productsAdded.push(currentProduct)

                //inserir aqui função para adicionar no carrinho
                
                AddCart.verify()
                const li = TemplateCart.gerarTemplate(currentProduct) 
                AddCart.cartShowCase.appendChild(li)

                AddCart.qtdSpan.innerText = AddCart.atualizarQtd()
                AddCart.totalSpan.innerText ='R$: '+ AddCart.atualizarTotal().toFixed(2)

            }
        })
    }

    static verify(){
        if(this.productsAdded.length!==0){
            AddCart.noProducts.classList.add('hidden')
            AddCart.cartShowCase.classList.remove('hidden')
            AddCart.totals.classList.remove('hidden')
        }else{
            AddCart.noProducts.classList.remove('hidden')
            AddCart.cartShowCase.classList.add('hidden')
            AddCart.totals.classList.add('hidden')
        }
    }

    static atualizarQtd(){
        return AddCart.productsAdded.length
    }

    static atualizarTotal(){
        return AddCart.productsAdded.reduce( (acc,elem)=> acc+elem.preco ,0)
    }

}

export {AddCart}