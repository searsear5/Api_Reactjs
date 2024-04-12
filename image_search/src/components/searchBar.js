import { useState } from 'react'
import "./searchBar.css"

function SearchBar(props) {
    const { onSubmit } = props
    const [term, setTerm] = useState('')

    const handleFormSubmit = (event) => {
        event.preventDefault()
        onSubmit(term)
    }

    const handleOnChange = (event) => {
        //console.log(event.target.value) save this text to term state
        setTerm(event.target.value)
    }


    return (
        <div className='search-Bar'>
            <form className='search-Bar form' onSubmit={handleFormSubmit}>
                <label>Enter Search Term</label>
                <input value={term} alue onChange={handleOnChange} />
            </form>


        </div>
    )
}

export default SearchBar