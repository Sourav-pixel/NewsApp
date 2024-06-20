import { useDispatch, useSelector } from 'react-redux';
import { setPage } from '../features/articles/articlesSlice';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
function Pagination() {
  const dispatch = useDispatch();
  const page = useSelector((state) => state.articles.page);

  const handlePrevious = () => {
    if (page > 1) dispatch(setPage(page - 1));
  };

  const handleNext = () => {
    dispatch(setPage(page + 1));
  };

  return (
    <div className="flex justify-center mt-4">
      <button
        onClick={handlePrevious}
        className="bg-blue-600 text-white px-4 py-2 rounded-l hover:bg-blue-700 transition flex items-center"
        disabled={page === 1}
      >
        <FaArrowLeft className="mr-2" />
        Previous
      </button>
      <button
        onClick={handleNext}
        className="bg-blue-600 text-white px-4 py-2 rounded-r hover:bg-blue-700 transition flex items-center"
      >
        Next
        <FaArrowRight className="ml-2" />
      </button>
    </div>
  );
}

export default Pagination;
