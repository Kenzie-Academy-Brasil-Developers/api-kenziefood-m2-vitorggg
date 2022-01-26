
class ModalModelator{
    static section = document.createElement('section')//section pega o template
    static modal = document.getElementById('modal') //section -> vai aqui (appenChild)

    static criarTemplateCadastro(){
        const form = document.createElement('form')

        form.innerHTML=`
            <h2>Cadastre um novo produto</h2>

            <label>Digite o Nome do Produto</label>
            <input type="text" placeholder="Nome" name="nome" >

            <label>Preço do produto</label>
            <input type="number" placeholder="Preço" name="preco" />

            <label>Categoria do produto</label>
            <select>
                <option>Panificadora</option>
                <option>Bebidas</option>
                <option>Frutas</option>
            </select>

            <label>Imagem do produto</label>
            <input type="text" placeholder="Deixe uma url" name="img" />

            <label>Descrição do produto</label>
            <textarea placeholder="Digite a descrição do produto" name="descricao"></textarea>
            
            <button id="signIn">Cadastrar</button>
        `
        ModalModelator.section.appendChild(form)
        return ModalModelator.section

    }

    static criarTemplateEditar(){
        const form = document.createElement('form')

        form.innerHTML=`
            <h2>Escolha o produto para editar:</h2>
            <select>
                <option>1</option>
                <option>2</option>
                <option>3</option>
            </select>
            <label>Digite o Nome do Produto</label>
            <input type="text" placeholder="Nome" name="nome" >
        
            <label>Preço do produto</label>
            <input type="number" placeholder="Preço" name="preco" />

            <label>Categoria do produto</label>
            <select>
                <option>Panificadora</option>
                <option>Bebidas</option>
                <option>Frutas</option>
            </select>

            <label>Imagem do produto</label>
            <input type="text" placeholder="Deixe uma url" name="img" />

            <label>Descrição do produto</label>
            <textarea placeholder="Digite a descrição do produto" name="descricao"></textarea>
            
            <button id="editar">Editar</button>
        `
        ModalModelator.section.appendChild(form)
        return ModalModelator.section

    }

    static criarTemplateDeletar(){
        const form = document.createElement('form')

        form.innerHTML=`
            <h2>Escolha o produto que deseja deletar</h2>
            <select>
                <option>produto 1</option>
                <option>produto 2</option>
                <option>produto 3</option>
            </select>
            <button id="Deletar">Deletar</button>
        `
        ModalModelator.section.appendChild(form)
        return ModalModelator.section


    }
    // nome, preco, categoria, imagem, descricao
}

export {ModalModelator}