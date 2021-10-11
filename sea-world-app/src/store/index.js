import { createStore } from 'redux';
import { applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import matrixReducer from '../store/reducers/gridReducer';

export default createStore(matrixReducer, applyMiddleware(thunk));


