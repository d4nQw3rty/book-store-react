// Actions
const ADD_BOOK = 'ADD_BOOK';
const REMOVE_BOOK = 'REMOVE_BOOK';
const GET_BOOKS = 'GET_BOOKS';
const API_URL = 'https://mocki.io/v1/e143ba3b-b469-444a-97fc-a70c9850ebd9';

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

export { addBook, removeBook, getBooks };

// Reducer
const initialState = [];
const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.payload];
    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.payload);    
    default:
      return state;
  }
};

export default booksReducer;
