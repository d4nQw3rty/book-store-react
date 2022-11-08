// Define Action
const CHECK_STATUS = 'CHECK_STATUS';
// Define Action Creator
export const checkStatus = (payload) => ({
  type: CHECK_STATUS,
  payload,
});
// Define Reducer
const initialState = 'Under Construction';
const categoriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHECK_STATUS:
      return [...state, action.payload];
    default:
      return state;
  }
};
export default categoriesReducer;
