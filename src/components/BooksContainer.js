import React from 'react';
import BookList from './BookList';
import BookInput from './BookInput';
import '../App.css';

const BooksContainer = () => (
  <div>
    <BookList />
    <BookInput />
  </div>
);

export default BooksContainer;
