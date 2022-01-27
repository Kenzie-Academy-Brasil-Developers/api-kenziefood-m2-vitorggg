import { ShowCaseModelator } from "./vitriniModeladora.js";


class FilterSearch{

    static getItem( text , array ){
        const filtered = array.filter(elem=> elem.nome.toLowerCase().includes(text.toLowerCase()) || elem.categoria.toLowerCase().includes(text.toLowerCase()) )
        return filtered

    }
    static addEvent( products ){
        const btnSearch = document.querySelector('.search-button')
        const inputSearch = document.querySelector('.search-input')


        btnSearch.addEventListener('click',(e)=>{
            e.preventDefault()
            // let text = inputSearch.value
            // const filteredArr = FilterSearch.getItem(text , products )
            // console.log(filteredArr)

            // ShowCaseModelator.appendList(filteredArr)
        
        })
        inputSearch.addEventListener('keyup',(e)=>{
            e.preventDefault()
            let text = inputSearch.value
            const filteredArr = FilterSearch.getItem(text , products )
            console.log(filteredArr)

            ShowCaseModelator.appendList(filteredArr)
        })
        
    }

}

export {FilterSearch}