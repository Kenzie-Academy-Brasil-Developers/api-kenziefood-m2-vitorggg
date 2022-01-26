import { ShowCaseModelator } from "./vitriniModeladora.js";


class FilterCategory{
    static getArrayFiltered(array, categoryName){
        return array.filter(elem => elem.categoria == categoryName )
    }

    static addEvent( products ){
        const categorys = document.getElementsByClassName('categorys')

        for(let i=0 ; i<categorys.length ;i++){
            categorys[i].addEventListener('click',(e)=>{

                if(e.currentTarget.innerText == 'Todos'){
                    ShowCaseModelator.appendList( products )
                }else{
                    let categoria = e.currentTarget.innerText
                    const arrayFiltered = FilterCategory.getArrayFiltered(products , categoria ) 
                    ShowCaseModelator.appendList(arrayFiltered)
                }
                
            })
        }

    }

}

export {FilterCategory}