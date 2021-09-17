import React from 'react'

export default function Search({handleOnchangeSearch}) {
    const handleOnchange = event =>{
        handleOnchangeSearch(event.target.value)
    }

    return (
        <section className="search_section card">
        <h2>Search Book</h2>
        <form id="searchBook">
            <input id="searchBookTitle" type="text" onChange={handleOnchange} placeholder="Search for book title..." />
        </form>
      </section>
    )
}
