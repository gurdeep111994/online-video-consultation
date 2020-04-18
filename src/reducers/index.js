import { combineReducers } from 'redux';
import SampleReducer from "./sample";
import LoaderReducer from "./loader";
import LoginReducer from "./login";
const rootReducer = combineReducers({ 
    SampleReducer,
    LoaderReducer,
    LoginReducer
});

export default rootReducer;