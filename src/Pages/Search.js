import React, { useState, useEffect, useCallback } from 'react';
import '../Styles/Search.css';
import searchBar from '../Assets/Vector.png';
import supabase from '../supabaseClient';

function Search() {
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);


// Then wrap the function:
const handleSearch = useCallback(async () => {
  if (searchTerm.trim() === '') {
    setResults([]);
    return;
  }

  setLoading(true);
  const { data, error } = await supabase
    .from('videos')
    .select('*')
    .ilike('title', `%${searchTerm}%`);

  if (error) {
    console.error('Search error:', error);
  } else {
    setResults(data);
  }
  setLoading(false);
}, [searchTerm]); // 👈 now it's stable and useEffect is happy

useEffect(() => {
  const delayDebounce = setTimeout(() => {
    handleSearch();
  }, 500);

  return () => clearTimeout(delayDebounce);
}, [handleSearch]); // ✅ clean!


  return (
    <>
      <div className="search-container">
        <input
          type="text"
          placeholder="Search..."
          className="search-input"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          aria-label="Search"
        />
        <button
          type="button"
          className="search-button"
          onClick={handleSearch} // 👉 Button now triggers the search
        >
          <img src={searchBar} alt="search" />
        </button>
      </div>

      <div className="search-results">
  {loading ? (
    <div className="loading-placeholder">Loading...</div>
  ) : results.length > 0 ? (
    results.map((video) => (
      <div key={video.id} className="search-result-item">
        {video.title}
      </div>
    ))
  ) : (
    <p></p>
  )}
</div>

    </>
  );
}

export default Search;
