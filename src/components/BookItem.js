import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchBooksAsync, removeBookAsync } from '../redux/books/Book';
import '../App.css';

const BookIem = () => {
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchBooksAsync());
  }, [dispatch]);
  const handleRemoveBook = (book) => {
    dispatch(removeBookAsync(book.id));
  };

  return (
    books.map((book) => (
      <li key={book.id} className="book-card">
        <h2 className="Title">{book.title}</h2>
        <p className="Author">{book.author}</p>
        <button type="button" onClick={() => handleRemoveBook(book)}>Remove Book</button>
      </li>
    ))
  );
};

export default BookIem;
