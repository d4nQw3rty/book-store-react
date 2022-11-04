import React from 'react';

const BookIem = (props) => (
    
  <div>
    <h2>BooksList</h2>
    <div>
      <div>
        <h3>{props.title}</h3>
        <p>{props.author}</p>
      </div>
      <button type="button">Remove</button>
    </div>
  </div>
);

export default BookIem;
