import { createStore, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk'; // Use the named import here
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers';

// Initial state
const initialState = {};

// Middleware array
const middleware = [thunk];

// Create store
const store = createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;

