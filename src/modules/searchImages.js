const searchImages = class searchImages {
    static async search(){
        const response = await fetch("https://kenzie-food-api.herokuapp.com/product")
        .then(res => res.json())
        .then(data => data )
        return response
    }
}

export { searchImages }