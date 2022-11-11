import { combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { configureStore } from '@reduxjs/toolkit';
import booksReducer, { fetchBooksAsync } from './books/Book';
import categoriesReducer from './categories/categories';

const rootReducer = combineReducers({
  books: booksReducer,
  categories: categoriesReducer,
});

const store = configureStore({
  reducer: rootReducer,
},
applyMiddleware(thunk));

store.dispatch(fetchBooksAsync());

export default store;
