import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import { productReducer } from './reducers/productReducers';

const initialState = {};

const reducer = combineReducers({
  products: productReducer,
});

const composeEnhencher = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducer,
  initialState,
  composeEnhencher(applyMiddleware(thunk))
);

export default store;
