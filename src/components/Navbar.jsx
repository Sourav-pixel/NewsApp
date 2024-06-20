import  { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCategory, setPage, setQuery } from '../features/articles/articlesSlice';
import { FaSearch, FaNewspaper, FaBars, FaTimes } from 'react-icons/fa';

const categories = ['General', 'Business', 'Entertainment', 'Health', 'Science', 'Sports', 'Technology'];

function Navbar() {
  const dispatch = useDispatch();
  const currentCategory = useSelector((state) => state.articles.category);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleCategoryChange = (category) => {
    dispatch(setCategory(category.toLowerCase()));
    dispatch(setPage(1));
    setMenuOpen(false);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    const searchTerm = e.target.search.value;
    dispatch(setQuery(searchTerm));
    dispatch(setPage(1));
    setMenuOpen(false);
  };

  return (
    <nav className="bg-blue-600 p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-2xl font-bold flex items-center">
          <FaNewspaper className="mr-2" />
          News App
        </div>
        <div className="hidden md:flex space-x-4">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => handleCategoryChange(category)}
              className={`text-white ${
                currentCategory === category.toLowerCase() ? 'font-bold border-b-2 border-white' : 'font-normal'
              } hover:font-bold`}
            >
              {category}
            </button>
          ))}
        </div>
        <form onSubmit={handleSearch} className="hidden md:flex items-center space-x-2">
          <input
            type="text"
            name="search"
            placeholder="Search articles..."
            className="px-4 py-2 rounded bg-white focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button type="submit" className="bg-white text-blue-600 px-4 py-2 rounded hover:bg-blue-500 hover:text-white transition flex items-center">
            <FaSearch className="mr-1" />
            Search
          </button>
        </form>
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-white">
            {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>
      {menuOpen && (
        <div className="md:hidden mt-4">
          <div className="flex flex-col space-y-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => handleCategoryChange(category)}
                className={`text-white ${
                  currentCategory === category.toLowerCase() ? 'font-bold border-b-2 border-white' : 'font-normal'
                } hover:font-bold`}
              >
                {category}
              </button>
            ))}
          </div>
          <form onSubmit={handleSearch} className="flex flex-col space-y-2 mt-4">
            <input
              type="text"
              name="search"
              placeholder="Search articles..."
              className="px-4 py-2 rounded bg-white focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <button type="submit" className="bg-white text-blue-600 px-4 py-2 rounded hover:bg-blue-500 hover:text-white transition flex items-center">
              <FaSearch className="mr-1" />
              Search
            </button>
          </form>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
