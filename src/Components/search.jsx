import React, { useState } from 'react';
import movies from '../movies.json'

const Search = () => {
  const [searchInput, setSearchInput] = useState('');
  const [result, setResult] = useState('');
  const titles = movies.map(movie => movie.title);

  const handleChange = (event) => {
    setSearchInput(event.target.value);
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
    </>
  )
}

export default Search;