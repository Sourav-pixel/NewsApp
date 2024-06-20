import  { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchArticles } from '../features/articles/articlesSlice';
import ArticleList from './ArticleList';
import Pagination from './Pagination';
import Loader from './Loader';

function Home() {
    const dispatch = useDispatch();
    const { articles, status, error, category, page, query } = useSelector((state) => state.articles);
  
    useEffect(() => {
      dispatch(fetchArticles({ category, page, query }));
    }, [dispatch, category, page, query]);
  
    return (
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4">News Articles</h1>
  
        {status === 'loading' && <Loader />}
        {status === 'failed' && <div className="text-center text-red-500">Error: {error}</div>}
        {status === 'succeeded' && <ArticleList articles={articles} />}
        <Pagination />
      </div>
    );
  }
  
  export default Home;