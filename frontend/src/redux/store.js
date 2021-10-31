import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import data from '../data';

const initialState = {};

const reducer = (state, action) => {
  return { products: data.products };
};

const composeEnhencher = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducer,
  initialState,
  composeEnhencher(applyMiddleware(thunk))
);

export default store;
