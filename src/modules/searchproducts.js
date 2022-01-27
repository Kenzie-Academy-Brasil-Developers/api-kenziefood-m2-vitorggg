const token ='Token eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NSwiaWF0IjoxNjQzMDQ0MjYzLCJleHAiOjE2NDM5MDgyNjMsInN1YiI6IltvYmplY3QgVW5kZWZpbmVkXSJ9.R603fRzrAzcqv5QvQiPz400KxPlmU-AMYbK3bKfloJI'

const SearchProducts = class SearchProducts {

    static async search(){

        const response = await fetch("https://kenzie-food-api.herokuapp.com/product",{
            //https://kenzie-food-api.herokuapp.com/product
            method:"get",
            headers : {
                Authorization: token,
                "Content-type":"application/json"
            }
        })
        .then(res => res.json())
        .then(data => data )

        return response
    }

}
export { SearchProducts }