// Actions
const ADD_BOOK = 'ADD_BOOK';
const REMOVE_BOOK = 'REMOVE_BOOK';
const FETCH_BOOKS = 'FETCH_BOOKS';
const BASE_API = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi';
const APP_ID = '/apps/CApalXMFpZUD48GQZ2cK/books';
const API_URL = `${BASE_API}${APP_ID}`;

// action creators
export const addBook = (book) => ({
  type: ADD_BOOK,
  payload: book,
});

export const removeBook = (id) => ({
  type: REMOVE_BOOK,
  payload: id,
});

export const fetchBooks = (books) => ({
  type: FETCH_BOOKS,
  payload: books,
});

export const fetchBooksAsync = () => async (dispatch) => {
  await fetch(API_URL)
    .then((response) => response.json())
    .then((books) => {
      const booksArray = [];
      Object.keys(books).forEach((key) => {
        booksArray.push({
          id: key,
          title: books[key][0].title,
          category: books[key][0].category,
          author: books[key][0].author,
        });
      });
      dispatch(fetchBooks(booksArray));
    });
};

export const addBookAsync = ({
  id, title, author, category,
}) => async (dispatch) => {
  const book = {
    item_id: id,
    title,
    author,
    category,
  };
  await fetch(API_URL, {
    method: 'POST',
    body: JSON.stringify(book),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  dispatch(addBook({
    id, title, author, category,
  }));
};

export const removeBookAsync = (id) => async (dispatch) => {
  await fetch(`${API_URL}/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then(() => dispatch(removeBook(id)));
};

// Reducer
const initialState = [];
const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.payload];
    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.payload);
    case FETCH_BOOKS:
      return action.payload;
    default:
      return state;
  }
};

export default booksReducer;
