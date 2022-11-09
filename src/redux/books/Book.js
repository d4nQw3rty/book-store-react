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
    title: 'Divergent',
    author: 'Veronica Roth',
    id: 1,
  },
  {
    title: 'The shining',
    author: 'Stephen King',
    id: 2,
  },
  {
    title: 'The Alchemist',
    author: 'Paulo Coelho',
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
