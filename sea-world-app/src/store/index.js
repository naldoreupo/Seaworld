import { createStore, combineReducers } from 'redux';
import matrixReducer from '../store/reducers/gridReducer';

export default createStore(matrixReducer);


