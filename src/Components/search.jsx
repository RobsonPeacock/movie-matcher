import React, { useState } from 'react';
import movies from '../movies.json'

const Search = () => {
  const [searchInput, setSearchInput] = useState('');
  const [result, setResult] = useState('');

  const handleChange = (event) => {
    setSearchInput(event.target.value);
  }

  const handleClick = () => {
    const titles = movies.map(movie => movie.title);
    const newRegex = new RegExp(searchInput, 'i');
    setResult(titles.filter(title => title.match(newRegex)));
  }

  return (
    <>
      <div class="row">
        <input 
          type="text" 
          id="name" 
          name="name" 
          size="10" 
          class="form-control" 
          onChange={handleChange}
          required 
        />
      </div>

      <div class="row">
        <output>{result}</output>
      </div>

      <div class="row">
        <button class="btn btn-primary" onClick={handleClick}>Search</button>
      </div>
    </>
  )
}

export default Search;