import { useSelector } from 'react-redux';
import ArticleList from './ArticleList';
import { FaHeart } from 'react-icons/fa';

function Favorites() {
  const favorites = useSelector((state) => state.favorites.favorites);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4 flex items-center">
        <FaHeart className="mr-2 text-red-500" />
        Favorite Articles
      </h1>
      {favorites.length === 0 ? (
        <div className="text-center">No favorite articles yet.</div>
      ) : (
        <ArticleList articles={favorites} />
      )}
    </div>
  );
}

export default Favorites;
