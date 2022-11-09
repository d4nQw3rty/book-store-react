import React from 'react';
import { useSelector } from 'react-redux';

const BookIem = () => {
  const books = useSelector((state) => state.books);
  return (
    <div>
      {books.map((book) => (
        <div key={book.id}>
          <h1>{book.title}</h1>
          <p>{book.category}</p>
        </div>
      ))}
    </div>
  );
};

export default BookIem;
