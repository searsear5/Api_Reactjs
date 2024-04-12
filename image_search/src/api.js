import axios from 'axios'

const searchImages = async () => {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
        headers: {
            Authorization: 'Client-ID _NGrPkqdXA5Hxj7iC7Cx1UQi_hiexdAJIIvQYe3Jsgg'
        },
        params: {
            query: 'cars',
        }
    })
    console.log(response)
    return response
}

export default searchImages