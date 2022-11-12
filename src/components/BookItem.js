import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
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
        <div className="book-info">
          <p className="Category">Category:</p>
          <h2 className="Title">{book.title}</h2>
          <p className="Author">{book.author}</p>
          <button type="button" className="Delete">Comments</button>
          <span className="Line-2" />
          <button type="button" className="Delete" onClick={() => handleRemoveBook(book)}>Remove</button>
          <span className="Line-2" />
          <button type="button" className="Delete">Edit</button>
        </div>
        <div className="book-progres" style={{ width: 100, height: 100 }}>
          <CircularProgressbar
            value={Math.floor(Math.random() * 101)}
            text={`${Math.floor(Math.random() * 101)}%`}
          />
        </div>
        <span className="Line-3" />
        <div className="book-chapter">
          <p className="Current">CURRENT CHAPTER</p>
          <p className="Current-Lesson">
            Chapter&nbsp;
            {Math.floor(Math.random() * 101)}
          </p>
          <button type="button" className="Rectangle-2 Update-progress">UPDATE PROGRESS</button>
        </div>
      </li>
    ))
  );
};

export default BookIem;
