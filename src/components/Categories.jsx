import { useDispatch, useSelector } from 'react-redux';
import { setCategory, setPage } from '../features/articles/articlesSlice';

const categories = ['general', 'business', 'entertainment', 'health', 'science', 'sports', 'technology'];

function Categories() {
  const dispatch = useDispatch();
  const currentCategory = useSelector((state) => state.articles.category);

  const handleCategoryChange = (category) => {
    dispatch(setCategory(category));
    dispatch(setPage(1));
  };

  return (
    <div>
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => handleCategoryChange(category)}
          style={{ fontWeight: category === currentCategory ? 'bold' : 'normal' }}
        >
          {category}
        </button>
      ))}
    </div>
  );
}

export default Categories;
