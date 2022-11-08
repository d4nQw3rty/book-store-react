import React from 'react';
import { useSelector } from 'react-redux';

const BookList = () => {
  const books = useSelector((state) => state.books);

  return (
    <ul>
      {books.map((book) => (
        <li key={book.id}>
          <div>
            <div>
              <h3>{book.title}</h3>
              <p>{book.author}</p>
            </div>
            <button type="button">Remove</button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default BookList;
