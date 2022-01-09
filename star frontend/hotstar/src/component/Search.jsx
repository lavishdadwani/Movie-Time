import React, { useState } from 'react'
import "../styles/home.css"
const Search = ({props}) => {

    const [query, setquery] = useState("")
    const handelSubmit = e=>{
        e.preventDefault()
        props.history.push(`/search/${query}`)
    }
    return (
        <div className="searchPage">

        <form className="search" onSubmit={handelSubmit}>
            <input className="inpSearch" type="text" name="query" placeholder="Search Movies" onChange={e=>setquery(e.target.value)}  value={query} />
            <input className="btnSearch" type="submit" value="Search" />
        </form>
        </div>
    )
}

export default Search
