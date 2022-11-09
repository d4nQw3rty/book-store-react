import React from 'react';
import { useSelector } from 'react-redux';

const BookIem = () => {
  const books = useSelector((state) => state.books);
  return (
    books.map((book) => (
      <li key={book.id}>
        <h3>{book.title}</h3>
        <p>{book.author}</p>
      </li>
    ))
  );
};

export default BookIem;
