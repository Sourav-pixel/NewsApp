import { useDispatch, useSelector } from 'react-redux';
import { addFavorite, removeFavorite } from '../components/favoritesSlice';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
// eslint-disable-next-line react/prop-types
function ArticleList({ articles }) {
    const dispatch = useDispatch();
    const favorites = useSelector((state) => state.favorites.favorites);
  
    const isFavorite = (article) => favorites.some((fav) => fav.url === article.url);
  
    const handleFavorite = (article) => {
      if (isFavorite(article)) {
        dispatch(removeFavorite(article));
      } else {
        dispatch(addFavorite(article));
      }
    };
  
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map((article) => (
          <div key={article.url} className="bg-white p-4 rounded shadow-md relative">
            <h2 className="text-xl font-semibold mb-2">{article.title}</h2>
            <p className="text-gray-700 mb-4">{article.description}</p>
            <a href={article.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
              Read more
            </a>
            <button
              onClick={() => handleFavorite(article)}
              className="absolute top-4 right-4 text-red-500 hover:text-red-600 transition"
            >
              {isFavorite(article) ? <FaHeart /> : <FaRegHeart />}
            </button>
          </div>
        ))}
      </div>
    );
  }
  
  export default ArticleList;
  