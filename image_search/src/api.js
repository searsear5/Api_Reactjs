import axios from 'axios'

const searchImages = async (term) => {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
        headers: {
            Authorization: 'Client-ID _NGrPkqdXA5Hxj7iC7Cx1UQi_hiexdAJIIvQYe3Jsgg'
        },
        params: {
            query: term,
        }
    })
    console.log(response)
    return response.data.results
}

export default searchImages