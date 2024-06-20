import { configureStore } from '@reduxjs/toolkit';
import articlesReducer from '../src/features/articles/articlesSlice';
import favoritesReducer from '../src/components/favoritesSlice';

const store = configureStore({
  reducer: {
    articles: articlesReducer,
    favorites: favoritesReducer,
  },
});

export default store;
