import React, { useState } from 'react';
import SearchResults from './searchResults';

const Search = () => {
  const [searchInput, setSearchInput] = useState('');
  const [result, setResult] = useState('');

  const fetchData = async (value) => {
    const queryString = value;
    const url = `${process.env.REACT_APP_API_URL}?query=${queryString}&language=en`;
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: process.env.REACT_APP_API_READ_ACCESS_TOKEN
      }
    };

    const res = await fetch(url, options)
    return res.json()
  }

  const handleChange = async (value) => {
    setSearchInput(value);
    const data = await fetchData(value);
    const titles = data.results.map(movie => movie.title);
    setResult(titles);
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
          onChange={(e) => handleChange(e.target.value)}
          required 
        />
      </div>

      <div class="row">
        <SearchResults results={result} />
      </div>
    </>
  )
}

export default Search;