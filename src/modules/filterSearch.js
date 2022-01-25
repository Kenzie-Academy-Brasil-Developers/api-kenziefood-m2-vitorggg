const filter = class filter {
    static
    search(pesquisa){
        const titles = document.getElementsByClassName('product-title')
        for(let i = 0; i < titles.length; i++){
            if(titles[i].innerText.includes(pesquisa)){
                //FUNÇÃO DE MONTAR CARD
            }
        }
    }
}

export {filter}