import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux'
import rootReducer from './reducers';
import promise from 'redux-promise'
import createSagaMiddleware from 'redux-saga'
import thunk from 'redux-thunk'
import createInterceptors from './common/axiosInterceptor'


const sagaMiddleware = createSagaMiddleware()
const storeEnhancer = applyMiddleware(promise, sagaMiddleware, thunk)(createStore)
const appStore = storeEnhancer(rootReducer)

createInterceptors(appStore)

ReactDOM.render(
    <Provider store={appStore}>
        <App />
    </Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
