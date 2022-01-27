const token ='Token eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NSwiaWF0IjoxNjQzMDQ0MjYzLCJleHAiOjE2NDM5MDgyNjMsInN1YiI6IltvYmplY3QgVW5kZWZpbmVkXSJ9.R603fRzrAzcqv5QvQiPz400KxPlmU-AMYbK3bKfloJI'

class RotaGet{
    static async get(){
        const promise = await fetch('https://kenzie-food-api.herokuapp.com/my/product',{
            method:'get',
            headers:{
                Authorization: token,
                "Content-type":"application/json"
            }
        })
        const res = await promise.json()

        return res
    }

}

export {RotaGet}
