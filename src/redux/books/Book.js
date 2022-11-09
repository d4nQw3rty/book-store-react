// Actions
const ADD_BOOK = 'ADD_BOOK';
const REMOVE_BOOK = 'REMOVE_BOOK';
const GET_BOOKS = 'GET_BOOKS';
const BASE_API = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi';
const APP_ID = '/apps/0EQ64nuLJV8kcH5qMok9';
const API_URL = `${BASE_API}${APP_ID}`;

// action creators
const addBook = (book) => ({
  type: ADD_BOOK,
  payload: book,
});

const removeBook = (id) => ({
  type: REMOVE_BOOK,
  payload: id,
});

const getBooks = () => async (dispatch) => {
  const response = await fetch(API_URL);
  const data = await response.json();
  dispatch({
    type: GET_BOOKS,
    payload: data,
  });
};

const removeBookAPI = (id) => async (dispatch) => {
  await fetch(`${API_URL}/${id}`, {
    method: 'DELETE',
  });
  dispatch(removeBook(id));
};

export {
  addBook,
  removeBook,
  getBooks,
  removeBookAPI,
};

// Reducer
const initialState = [];
const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.payload];
    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.payload);
    case GET_BOOKS:
      return action.payload;
    default:
      return state;
  }
};

export default booksReducer;
