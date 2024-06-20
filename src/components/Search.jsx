import  { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setQuery, setPage } from '../features/articles/articlesSlice';

function Search() {
  const [searchTerm, setSearchTerm] = useState('');
  const dispatch = useDispatch();

  const handleSearch = (e) => {
    e.preventDefault();
    dispatch(setQuery(searchTerm));
    dispatch(setPage(1));
  };

  return (
    <form onSubmit={handleSearch}>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search articles..."
      />
      <button type="submit">Search</button>
    </form>
  );
}

export default Search;
