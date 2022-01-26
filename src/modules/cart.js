const Cart = class Cart {

    static
    add(idCart, product) {

        const cart = document.getElementById(idCart)
        const products = document.createElement('ul')
        const clone = product.parentNode.parentNode.parentNode.cloneNode(true)
        const remove = document.createElement('img')
        remove.src = 'public/icons/Group 1033.png'
        remove.className = 'remove-product'


        clone.className = 'products-cart'
        cart.className = 'with-products'
        console.log(clone)
        clone.appendChild(remove)
        products.appendChild(clone)
        cart.appendChild(products)
    }
}

export { Cart }