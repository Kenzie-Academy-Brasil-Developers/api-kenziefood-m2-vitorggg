import { SearchProducts } from "./searchproducts.js"

const products = await SearchProducts.search()

// Função a ser implementada como método da classe de vitrine para gerar template dos produtos

function templateProdutos({id, nome, preco, categoria, imagem, descricao, createdAt, updatedAt}){

        //const ul = document.querySelector('.productsShowcase-list')
        let icon = ''
        if(categoria == 'Frutas') icon = 'public/icons/Icon_fruits.png'
        if(categoria == 'Bebidas') icon = 'public/icons/Icon_glass_of_wine.png'
        if(categoria == 'Panificadora') icon = 'public/icons/Icon_bread.png'
        
        

        const li = document.createElement('li')
        li.classList.add('productsShowcase-list-product')
        li.innerHTML = 
        `
        
            <figure>
                <img src=${imagem} alt=${nome} class="img-destaque"/>
                <figcaption>${nome}</figcaption>
                <div class="category">
                    <img src=${icon} alt="" class="category-icon"/>
                    <span class="category-title">
                        ${categoria}
                    </span>
                </div>
            </figure>
            <div class="productsShowcase-list-content">
                <h2 class="product-title">${nome}</h2>
                <p class="product-description">
                    ${descricao}
                </p>
                <div class="product-priceAndCart">
                    <span class="product-price">R$${preco.toFixed(2)}</span>
                    <button class="product-cart" id=${id}>
                        <img src="public/icons/icon_cart.png" alt="carrinho" id=${id}>
                    </button>
                </div>
            </div>
        
        
        `
    return li
}



const ul = document.createElement('ul')

class TemplateCart{

    static gerarTemplate({nome='',categoria,preco,imagem,id,quantity=1}){
        let maximumOfLetters = 17
        if(nome.length>maximumOfLetters) nome = nome.slice(0,maximumOfLetters)+'...'
        const li = document.createElement('li')
        li.classList.add('cart-list')
        li.innerHTML = `
        <figure>
            <img src=${imagem} alt=${nome} class="img-cart"/>
            <figcaption>${nome}</figcaption>
        </figure>
        <div class="cart-list-content">
            <h3 class="cart-title">${nome}</h3>
            <p>${categoria}</p>
            <span>R$:${preco.toFixed(2)}</span>
        </div>
        <div>
            <button id="removeBtn-${id}">
                <img src="./public/icons/thrash.png" alt="lixo" id="remove-${id}" />
            </button>
            <div class='qtd-controller' id="qtdController-${id}" >
                <span class='minus' id="minus-${id}" > - </span>
                <span class='qtd-controller__number'> ${quantity} </span>
                <span class='plus' id="plus-${id}"> + </span>
            </div>

        </div>
        `
        return li
    }
    
}


export {templateProdutos,TemplateCart}