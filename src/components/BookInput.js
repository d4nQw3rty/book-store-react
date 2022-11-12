import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBookAsync } from '../redux/books/Book';
import '../App.css';

const BookInput = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('');
  const dispatch = useDispatch();

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleAuthorChange = (e) => {
    setAuthor(e.target.value);
  };
  const submitBookToStore = (e) => {
    e.preventDefault();
    const newBook = {
      id: uuidv4(),
      title,
      author,
      category,
    };
    setTitle('');
    setAuthor('');
    setCategory('');
    dispatch(addBookAsync(newBook));
  };

  return (
    <div className="Form-Container">
      <h2 className="Form-Title">ADD NEW BOOK</h2>
      <form onSubmit={submitBookToStore} className="Form">
        <input className="Input-Book input-title" type="text" placeholder="Title" value={title} onChange={handleTitleChange} required />
        <input className="Input-Book" type="text" placeholder="Author" value={author} onChange={handleAuthorChange} required />
        <button className="Add-Button" type="submit">ADD BOOK</button>
      </form>
    </div>
  );
};
export default BookInput;
