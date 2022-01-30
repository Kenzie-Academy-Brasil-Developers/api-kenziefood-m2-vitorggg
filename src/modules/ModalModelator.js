import { products } from "../index.js"

class ModalModelator{
    static section = document.createElement('section')//section pega o template
    static modal = document.getElementById('modal') //section -> vai aqui (appenChild)
    static form = document.createElement('form')

    static criarTemplateCadastro(product){
       

        ModalModelator.form.innerHTML=`
            <h2>Cadastre um novo produto</h2>

            <label>Digite o Nome</label>
            <input type="text" placeholder="Nome" name="nome" >

            <label>Preço</label>
            <input type="number" placeholder="Preço" name="preco" />

            <label>Categoria</label>
            <select name="categoria">
                <option value="Panificadora">Panificadora</option>
                <option value="Bebidas">Bebidas</option>
                <option value="Frutas">Frutas</option>
            </select>

            <label>Imagem</label>
            <input type="text" placeholder="Deixe uma url" name="imagem" />

            <label>Descrição</label>
            <textarea placeholder="Digite a descrição do produto" name="descricao"></textarea>
            
            <button id="postar">Cadastrar</button>
        `
        ModalModelator.section.appendChild(ModalModelator.form)
        return ModalModelator.section

    }

    static criarTemplateEditar(product){

        ModalModelator.form.classList.add('formulario')
        let options = ''
        product.forEach(elem=>{
            options+=`<option value=${elem.id}>${elem.id}-  ${elem.nome}</option>\n`
        })

        ModalModelator.form.innerHTML=`
            <h2>Escolha um produto criado para editar:</h2>
            <select name="id">
                ${options}
            </select>

            <label>Digite o Nome</label>
            <input type="text" placeholder="Nome" name="nome" >

            <label>Preço do produto</label>
            <input type="number" placeholder="Preço" name="preco" />

            <label>Categoria</label>
            <select name="categoria">
                <option value="Panificadora">Panificadora</option>
                <option value="Bebidas">Bebidas</option>
                <option value="Frutas">Frutas</option>
            </select>

            <label>Imagem</label>
            <input type="text" placeholder="Deixe uma url" name="imagem" />

            <label>Descrição</label>
            <textarea placeholder="Digite a descrição do produto" name="descricao"></textarea>
    
            <button id="editar">Editar</button>
        `
       

        ModalModelator.form.querySelector('select').addEventListener('input',(e)=>{
            const inputs = ModalModelator.form
            const id = inputs[0].value
            const productId = product.find(elem=>elem.id==id)
            console.log(productId)
            for(let i=1; i<inputs.length-1 ;i++){
               inputs[i].value = productId[inputs[i].name]
            }
        })

        ModalModelator.section.appendChild(ModalModelator.form)

        const inputs = ModalModelator.form
        const id = inputs[0].value
        const productId = product.find(elem=>elem.id==id)

        for(let i=1; i<inputs.length-1 ;i++){
            inputs[i].value = productId[inputs[i].name]
        }

        return ModalModelator.section

    }

    static criarTemplateDeletar(product){
        

        let options = ''
        product.forEach(elem=>{
            options+=`<option id=${elem.id} value=${elem.id}>${elem.id}-${elem.nome}</option>\n`
        })

        ModalModelator.form.innerHTML=`
            <h2>Escolha o produto criado que deseja deletar</h2>
            <select name="id">
                ${options}
            </select>
            <button id="deletar">Deletar</button>
        `
        ModalModelator.section.appendChild(ModalModelator.form)
        return ModalModelator.section

    }
    // nome, preco, categoria, imagem, descricao
}

export {ModalModelator}