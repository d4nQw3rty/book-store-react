import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBookAsync } from '../redux/books/Book';

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
    <div>
      <form onSubmit={submitBookToStore}>
        <input type="text" placeholder="Title" value={title} onChange={handleTitleChange} required />
        <input type="text" placeholder="Author" value={author} onChange={handleAuthorChange} required />
        <select name="category" id="category" value={category} onChange={(e) => setCategory(e.target.value)} required>
          <option value="">Select Category</option>
          <option value="Action">Action</option>
          <option value="Biography">Biography</option>
          <option value="History">History</option>
          <option value="Horror">Horror</option>
          <option value="Kids">Kids</option>
          <option value="Learning">Learning</option>
          <option value="Sci-Fi">Sci-Fi</option>
        </select>
        <button type="submit">Add Book</button>
      </form>
    </div>
  );
};
export default BookInput;
