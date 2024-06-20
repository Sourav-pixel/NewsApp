import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_KEY = 'f71102107ed64fab991ba3d64369760e';
const BASE_URL = 'https://newsapi.org/v2'

export const fetchArticles = createAsyncThunk(
  'articles/fetchArticles',
  async ({ category, page, query }) => {
    const url = query
      ? `${BASE_URL}/everything?q=${query}&pageSize=10&page=${page}&apiKey=${API_KEY}`
      : `${BASE_URL}/top-headlines?category=${category}&pageSize=10&page=${page}&apiKey=${API_KEY}`;
    const response = await axios.get(url);
    return response.data.articles;
  }
);

const articlesSlice = createSlice({
  name: 'articles',
  initialState: {
    articles: [],
    status: 'idle',
    error: null,
    category: 'general',
    page: 1,
    query: '',
  },
  reducers: {
    setCategory(state, action) {
      state.category = action.payload;
      state.page = 1; // Reset page when category changes
    },
    setPage(state, action) {
      state.page = action.payload;
    },
    setQuery(state, action) {
      state.query = action.payload;
      state.page = 1; // Reset page when search query changes
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticles.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchArticles.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.articles = action.payload;
      })
      .addCase(fetchArticles.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const { setCategory, setPage, setQuery } = articlesSlice.actions;

export default articlesSlice.reducer;
