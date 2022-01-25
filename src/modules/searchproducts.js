class SearchProducts {

    static async search(){

        const response = await fetch(`https://kenzie-food-api.herokuapp.com/product`)
        const responseObj = await response.json()

        return responseObj
    }


}

export { SearchProducts }