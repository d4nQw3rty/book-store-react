import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/Book';

const BookIem = () => {
  const dispatch = useDispatch();
  const handleRemoveBook = (id) => {
    dispatch(removeBook(id));
  };
  const books = useSelector((state) => state.books);
  return (
    books.map((book) => (
      <li key={book.id}>
        <h3>{book.title}</h3>
        <p>{book.author}</p>
        <button type="button" onClick={() => handleRemoveBook(book.id)}>Remove Book</button>
      </li>
    ))
  );
};

export default BookIem;
