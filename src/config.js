import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

export const API_KEY = process.env.REACT_APP_NEWS_API_KEY;
export const BASE_URL = 'https://newsapi.org/v2';
