
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

        let options = ''
        product.forEach(elem=>{
            options+=`<option value=${elem.id}>${elem.nome}</option>\n`
        })

        ModalModelator.form.innerHTML=`
            <h2>Escolha o produto para editar:</h2>
            <select name="id">
                ${options}
            </select>
    
            <label>Preço do produto</label>
            <input type="number" placeholder="Preço" name="preco" />
    
            <button id="editar">Editar</button>
        `
        ModalModelator.section.appendChild(ModalModelator.form)
        return ModalModelator.section

    }

    static criarTemplateDeletar(product){
        

        let options = ''
        product.forEach(elem=>{
            options+=`<option id=${elem.id} value=${elem.id}>${elem.nome}</option>\n`
        })

        ModalModelator.form.innerHTML=`
            <h2>Escolha o produto que deseja deletar</h2>
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