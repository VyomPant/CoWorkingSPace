import React from 'react'
import './Search.css'
function Search() {
  return (
    
<div className="input-group">
  <div className="input-group-inside">
    <h1 className='flow'>Creativity Flow When You Change Places </h1>
    <h1 className='book'>Book a workplace near you </h1>
    <div className='near'>
  <input type="search" className="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
  <button type="button" className="btn "><img src='/Images/NearMe.png' alt='image6'/></button>
  </div>

  </div>
 </div>

  )
}

export default Search