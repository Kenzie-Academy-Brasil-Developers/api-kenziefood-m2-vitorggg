import { SearchProducts } from "./searchproducts.js"

const products = await SearchProducts.search()

// Função a ser implementada como método da classe de vitrine para gerar template dos produtos

function templateProdutos({id, nome, preco, categoria, imagem, descrição, createdAt, updatedAt}){

        const ul = document.querySelector('.productsShowcase-list')

        ul.innerHTML = 
        `
        <li class="productsShowcase-list-product">
                    <figure>
                        <img src=${imagem} alt=${nome} class="img-destaque"/>
                        <figcaption>${nome}</figcaption>
                        <div class="category">
                            <img src="public/icons/Icon_bread.png" alt="" class="category-icon"/>
                            <span class="category-title">
                                ${categoria}
                            </span>
                        </div>
                    </figure>
                    <div class="productsShowcase-list-content">
                        <h2 class="product-title">${nome}</h2>
                        <p class="product-description">
                            ${descrição}
                        </p>
                        <div class="product-priceAndCart">
                            <span class="product-price">${preco}</span>
                            <a href="#" class="product-cart">
                                <img src="public/icons/icon_cart.png" alt="carrinho">
                            </a>
                        </div>
                    </div>
                </li>
        
        `
    return ul
}