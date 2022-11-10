import { combineReducers, configureStore } from '@reduxjs/toolkit';
import booksReducer from './books/Book';
import categoriesReducer from './categories/categories';

const reducer = combineReducers({
  books: booksReducer,
  categories: categoriesReducer,
});

const store = configureStore({
  reducer,
});

export default store;
