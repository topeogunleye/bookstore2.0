import thunk from 'redux-thunk';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import booksReducer from './books/books';

const reducer = combineReducers({
  booksReducer,
});

// store
const store = createStore(reducer, applyMiddleware(thunk));

export default store;
