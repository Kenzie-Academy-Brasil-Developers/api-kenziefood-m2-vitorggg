import {ModalModelator} from './ModalModelator.js'

class ModalController{
    static addEvent(){
        const rotas = document.getElementById('rotas')
        const modal = document.getElementById('modal')
        const section =ModalModelator.section

        rotas.addEventListener('click',(e)=>{

            if(e.target.innerText=='Cadastrar'){
                section.innerHTML = ''
                modal.classList.remove('hidden')
                modal.appendChild( ModalModelator.criarTemplateCadastro() )
            }
            if(e.target.innerText=='Editar'){
                section.innerHTML = ''
                modal.classList.remove('hidden')
                modal.appendChild( ModalModelator.criarTemplateEditar() )
            }
            if(e.target.innerText=='Deletar'){
                section.innerHTML = ''
                modal.classList.remove('hidden')
                modal.appendChild( ModalModelator.criarTemplateDeletar() )
            }
        })
        
        modal.addEventListener('click',(e)=>{ //fechar popup
            
            if(e.target ==e.currentTarget) {
                modal.classList.add('hidden')
            }
            
        })

    }

}

export {ModalController}