import { configureStore } from '@reduxjs/toolkit';
import booksReducer from './books/Book';
import categoriesReducer from './categories/categories';

const store = configureStore({
  reducer: {
    books: booksReducer,
    categories: categoriesReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export default store;
