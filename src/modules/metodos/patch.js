//token de acesso
//eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NSwiaWF0IjoxNjQzMDQ0MjYzLCJleHAiOjE2NDM5MDgyNjMsInN1YiI6IltvYmplY3QgVW5kZWZpbmVkXSJ9.R603fRzrAzcqv5QvQiPz400KxPlmU-AMYbK3bKfloJI
const token ='Token eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NSwiaWF0IjoxNjQzMDQ0MjYzLCJleHAiOjE2NDM5MDgyNjMsInN1YiI6IltvYmplY3QgVW5kZWZpbmVkXSJ9.R603fRzrAzcqv5QvQiPz400KxPlmU-AMYbK3bKfloJI'

class RotaPatch{
    static async patch(obj,id){
        const body = JSON.stringify(obj)

        const promise = await fetch(`https://kenzie-food-api.herokuapp.com/my/product/${id}`, 
        { //https://kenzie-food-api.herokuapp.com/product
            method:"PATCH",
            headers : {
                Authorization: token,
                "content-type":"application/json"
            },
            body
            
        })
        return promise
    }

}

export {RotaPatch}