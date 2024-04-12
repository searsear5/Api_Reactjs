import SearchBar from './components/searchBar'
import React, { useState } from 'react'
import searchImages from './api'
import ImageList from './components/imageList'


function App() {

    const [images, setImages] = useState([])

    const handleSubmit = async (term) => {
        console.log('search with', term)
        const result = await searchImages(term)
        setImages(result)
    }

    return (
        <div>
            <div><SearchBar onSubmit={handleSubmit} /></div>
            <div><ImageList images={images} /></div>
        </div>
    )
}

export default App