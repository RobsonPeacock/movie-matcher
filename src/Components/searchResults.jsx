const searchResults = ({ results }) => {
    return (
      <div>
        {results && (
          <ul>
            {results.map((result, index) => (
              <li key={ index }>{result}</li>
            ))}
          </ul>
        )}
      </div>
  )
}

export default searchResults;