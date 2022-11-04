import React from 'react';

const BookInput = () => (
  <div>
    <h1>ADD NEW BOOK</h1>
    <form action="">
      <input type="text" name="bookTitle" id="book-title" placeholder="Title" required />
      <input type="text" name="bookCategory" id="book-author" placeholder="Author" required />
      <button type="submit">ADD BOOK</button>
    </form>
  </div>
);

export default BookInput;
