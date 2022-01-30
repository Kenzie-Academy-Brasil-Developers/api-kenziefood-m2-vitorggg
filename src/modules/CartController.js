import { TemplateCart } from './templates.js'
import { products } from '../index.js'
let productsAdded = []

class CartController{
    
    static noProducts = document.querySelector('aside .no-products')
    static cartShowCase = document.querySelector('.vitrini-carrinho')
    static totals = document.getElementById('totals')
    static qtdSpan = document.getElementById('qtd')
    static totalSpan = document.getElementById('total')

    static addEvent(){
    
        CartController.showProductsOfLocalStorage()
        const ul = document.querySelector('ul')
        
        ul.addEventListener('click',(e)=>{ //evento adicionar
            if( e.target.closest('button') !== null ){
                let id = e.target.id 
                const currentProduct = products.find(elem => elem.id==id)

                if(productsAdded.some(elem=>elem.id == id)){
                    console.log('já foi adicionado')
                    productsAdded.push(currentProduct)
                    console.log(productsAdded)
                    localStorage.setItem('productsAdded', JSON.stringify(productsAdded) )

                    CartController.verify()
                    CartController.atualizarTotQtd(productsAdded)

                    const numberQtd = document.getElementById(`qtdController-${id}`).querySelector('.qtd-controller__number') 
                    numberQtd.innerText = 1 + Number(numberQtd.innerText)

                }else{
                    productsAdded.push(currentProduct)
                    console.log(productsAdded)
                    localStorage.setItem('productsAdded', JSON.stringify(productsAdded) )
                    //inserir aqui função para adicionar no carrinho
                    CartController.verify()
                    const li = TemplateCart.gerarTemplate(currentProduct) 
                    CartController.cartShowCase.appendChild(li)
                    CartController.atualizarTotQtd(productsAdded)
                }
            }
        })
        
        CartController.cartShowCase.addEventListener('click',(e)=>{//evento remover
            if(e.target.id.includes('remove')){
                console.log(e.target.id)
                let id = e.target.id.split('-')[1]
                productsAdded =[...productsAdded.filter(elem=>elem.id!=id)]
                console.log(productsAdded)
                e.target.closest('li').remove()
                CartController.verify()
                CartController.atualizarTotQtd(productsAdded)
                localStorage.setItem('productsAdded', JSON.stringify(productsAdded) )
            }
            if(e.target.id.includes('minus')){
                let id = e.target.id.split('-')[1]
                const numberQtd = document.getElementById(`qtdController-${id}`).querySelector('.qtd-controller__number') 
                let qtdAtual = Number(numberQtd.innerText)

                let index = productsAdded.findIndex(elem=>elem.id==id)
                if( index !=-1 ){
                    productsAdded.splice(index,1)
                    qtdAtual--
                    numberQtd.innerText=qtdAtual
                    CartController.verify()
                    CartController.atualizarTotQtd(productsAdded)
                    localStorage.setItem('productsAdded', JSON.stringify(productsAdded) )
                    if(qtdAtual==0) e.target.closest('li').remove()
                }
            }
            if(e.target.id.includes('plus')){
                let id = e.target.id.split('-')[1]
                const numberQtd = document.getElementById(`qtdController-${id}`).querySelector('.qtd-controller__number') 
                let qtdAtual = Number(numberQtd.innerText)
                let index = productsAdded.findIndex(elem=>elem.id==id)
                
                if( index !=-1 ){
                    productsAdded.push( products.find(elem=>elem.id==id) )    
                    qtdAtual++
                    numberQtd.innerText=qtdAtual
                    CartController.verify()
                    CartController.atualizarTotQtd(productsAdded)
                    localStorage.setItem('productsAdded', JSON.stringify(productsAdded) )
                    if(qtdAtual==0) e.target.closest('li').remove()
                }
            }
        })

    }
    static showProductsOfLocalStorage(){
        let string = localStorage.getItem('productsAdded')
        if(string!==null){
            CartController.cartShowCase.innerHTML = ''
            const arrayAux = []
            productsAdded = JSON.parse(string).filter(elem=>elem!==null) 
            //console.log(productsAdded.sort((a,b)=>{ Number(a.id) - Number(b.id) }) )
            console.log(productsAdded)

            for(let i=0; i<productsAdded.length ;i++){
                if( !arrayAux.some( elem=> elem.id == productsAdded[i].id ) ){
                    arrayAux.push(productsAdded[i])
                }else{
                    let prodIterado = arrayAux.find(elem=>elem.id==productsAdded[i].id )
                    if(prodIterado.quantity==undefined){
                        prodIterado.quantity=2
                    }else{
                        prodIterado.quantity++
                    }
                }
            }
            console.log(arrayAux)
            
            CartController.verify()
            arrayAux.forEach(elem =>{
                const list = TemplateCart.gerarTemplate(elem)
                CartController.cartShowCase.appendChild(list)
            })
            productsAdded.forEach(elem=>{ 
                if(elem.quantity!=undefined) delete elem["quantity"]   
            })

            CartController.atualizarTotQtd(productsAdded)
        }
    }

    static verify(){
        if(productsAdded.length !== 0){
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