import {ModalModelator} from './ModalModelator.js'
import {GerarObjProduct} from './GerarObjProduct.js'
import {RotaPost} from './metodos/post.js'
import {RotaPatch} from './metodos/patch.js'
import {RotaDelete} from './metodos/delete.js'
import {reiniciarAplicacao} from '../index.js'

class ModalController{
    static async addEvent(products){
        const rotas = document.getElementById('rotas')
        const modal = document.getElementById('modal')
        const section = ModalModelator.section

        rotas.addEventListener('click',(e)=>{//caminho para abrir e gerar os forms

            if(e.target.innerText=='Cadastrar'){
                section.innerHTML = ''
                modal.classList.remove('hidden')
                modal.appendChild( ModalModelator.criarTemplateCadastro(products) )
            }
            if(e.target.innerText=='Editar'){
                section.innerHTML = ''
                modal.classList.remove('hidden')
                modal.appendChild( ModalModelator.criarTemplateEditar(products) )
            }
            if(e.target.innerText=='Deletar'){
                section.innerHTML = ''
                modal.classList.remove('hidden')
                modal.appendChild( ModalModelator.criarTemplateDeletar(products) )
            }
        })
        
        modal.addEventListener('click',(e)=>{ //fechar popup
            
            if(e.target ==e.currentTarget) {
                modal.classList.add('hidden')
            }
            
        })



        ModalModelator.form.addEventListener('submit',async (e)=>{
            e.preventDefault()
            const dados = e.target
            let optionSelected = ModalModelator.form.querySelector('button').id
            
            const objDados = {}

            for(let i=0; i<dados.length ;i++){
                if(dados[i].value){
                    objDados[ dados[i].name ] = dados[i].value
                }
            }

            if(optionSelected=='postar'){
                console.log('postar')

                const dadosTratados = new GerarObjProduct(objDados)
                dadosTratados.getId(products)
                console.log(dadosTratados) //em seguida fazer o post

                const response = await RotaPost.post(dadosTratados)
                console.log(response)

                reiniciarAplicacao()
                modal.classList.add('hidden')

                //{id, nome, preco, categoria, imagem, descricao, createdAt, updatedAt}
            }
            if(optionSelected=='editar'){
                objDados.id = Number(objDados.id)
                objDados.preco = Number(objDados.preco)
                const req = { id:objDados.id }
                const body = { preco:objDados.preco }
                console.log(req)
                console.log(body)
                //fazer aqui o patch

                const response = await RotaPatch.patch(body,objDados.id)
                console.log(response)

                reiniciarAplicacao()
                modal.classList.add('hidden')
            }
            if(optionSelected=='deletar'){
                objDados.id = Number(objDados.id)
                console.log(objDados)

                //fazer aqui delete 
                await RotaDelete.delete(objDados.id)
                
                reiniciarAplicacao()
                modal.classList.add('hidden')
            }
        })

    }

}

export {ModalController}