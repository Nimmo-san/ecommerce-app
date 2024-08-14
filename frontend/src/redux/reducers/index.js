import { combineReducers } from 'redux';
import authReducer from './authReducer';  // Example reducer
import productReducer from './productReducer';  // Example reducer

const rootReducer = combineReducers({
    auth: authReducer,
    product: productReducer,
});

export default rootReducer;

