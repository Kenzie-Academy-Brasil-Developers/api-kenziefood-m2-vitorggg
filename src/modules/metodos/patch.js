//token de acesso
//eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NSwiaWF0IjoxNjQzMDQ0MjYzLCJleHAiOjE2NDM5MDgyNjMsInN1YiI6IltvYmplY3QgVW5kZWZpbmVkXSJ9.R603fRzrAzcqv5QvQiPz400KxPlmU-AMYbK3bKfloJI
const token ='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NSwiaWF0IjoxNjQzMDQ0MjYzLCJleHAiOjE2NDM5MDgyNjMsInN1YiI6IltvYmplY3QgVW5kZWZpbmVkXSJ9.R603fRzrAzcqv5QvQiPz400KxPlmU-AMYbK3bKfloJI'

class RotaPatch{
    static async patch(obj){
        const promise = await fetch("https://kenzie-food-api.herokuapp.com/product", { 
            headers : {Authorization: token},
            method:"patch" 
        
        })

    }

}

export {RotaPatch}