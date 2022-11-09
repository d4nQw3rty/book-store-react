import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeBook, getBooks } from '../redux/books/Book';

const BookIem = () => {
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);
  return (
    <>
      {books.map((book) => (
        <li key={book.id}>
          <h2>{book.title}</h2>
          <p>{book.author}</p>
          <button type="button" onClick={() => dispatch(removeBook(book.id))}>Remove Book</button>
        </li>
      ))}
    </>
  );
};

export default BookIem;
