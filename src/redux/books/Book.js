// Actions
const ADD_BOOK = 'ADD_BOOK';
const REMOVE_BOOK = 'REMOVE_BOOK';

// action creators
const addBook = (book) => ({
  type: ADD_BOOK,
  payload: book,
});

const removeBook = (id) => ({
  type: REMOVE_BOOK,
  payload: id,
});

export { addBook, removeBook };

// Reducer
const initialState = [
  {
    title: 'pet cementery',
    author: 'stephen king',
    id: 1,
  },
  {
    title: 'the shining',
    author: 'stephen king',
    id: 2,
  },
  {
    title: 'the stand',
    author: 'stephen king',
    id: 3,
  },
];

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
