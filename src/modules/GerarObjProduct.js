const imgDefault = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnuSe54Qjwl5X30PZuQTeJGnDtTRIL5UQQ4w&usqp=CAU'

class GerarObjProduct{
    constructor({nome,categoria,imagem=imgDefault,descricao,preco}){
        this.nome = nome
        this.categoria = categoria
        this.imagem =imagem
        this.descricao = descricao
        this.preco = Number(preco)
        this.createdAt = this.getData()
        this.updatedAt = this.getDataUpdate()
        this.id = null
    }

    getData(){
        const data = new Date()
        return data.toISOString()
    }
    getDataUpdate(){
        const data = new Date()
        return data.toISOString()
    }

    getId(array){
        let max = 0
        array.forEach(element => {
            if(element.id > max) max = element.id
        });
        this.id = max + 1
    }

}

//{id, nome, preco, categoria, imagem, descricao, createdAt, updatedAt}

export {GerarObjProduct}