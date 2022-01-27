//token de acesso
//eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NSwiaWF0IjoxNjQzMDQ0MjYzLCJleHAiOjE2NDM5MDgyNjMsInN1YiI6IltvYmplY3QgVW5kZWZpbmVkXSJ9.R603fRzrAzcqv5QvQiPz400KxPlmU-AMYbK3bKfloJI
const token ='Token eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NSwiaWF0IjoxNjQzMDQ0MjYzLCJleHAiOjE2NDM5MDgyNjMsInN1YiI6IltvYmplY3QgVW5kZWZpbmVkXSJ9.R603fRzrAzcqv5QvQiPz400KxPlmU-AMYbK3bKfloJI'

class RotaPost{
    static async post(obj){
        console.log( JSON.stringify(obj) )
        const promise = await fetch("https://kenzie-food-api.herokuapp.com/my/product", 
        { //https://kenzie-food-api.herokuapp.com/product
            method:"post",
            headers : {
                Authorization: token,
                "Content-type":"application/json"
            },
            body:JSON.stringify(obj)
            
        })
        return promise
    }

}

export {RotaPost}