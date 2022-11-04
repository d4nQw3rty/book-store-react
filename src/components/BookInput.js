import React from 'react';

const BookInput = () => (
  <form action="">
    <input type="text" name="bookTitle" id="book-title" placeholder="Title" required />
    <input type="text" name="bookCategory" id="book-category" placeholder="Author" required />
  </form>
);

export default BookInput;
