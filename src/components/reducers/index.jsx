import {combineReducers} from 'redux';
import productsReducer from "./productsReducer.jsx";
import detailsReducer from "./detailsReducer.jsx";
import cartReducer from './cartReducer.jsx';
import modalReducer from './modalReducer.jsx';

const allReducers = combineReducers({
    productsReducer: productsReducer,
    detailsReducer: detailsReducer,
    cartReducer: cartReducer,
    modalReducer: modalReducer
})
export default allReducers;
