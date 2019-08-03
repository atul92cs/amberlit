import {combineReducers} from 'redux';
import adReducer from './adReducer';
import authReducer from './authReducer';
import userReducer from './userReducer';
import errorReducer from './errorReducer';
export default combineReducers ({
    ads:adReducer,
    error:errorReducer,
    auth:authReducer,
    user:userReducer
    
});