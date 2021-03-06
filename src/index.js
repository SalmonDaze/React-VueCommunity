import React from 'react';
import ReactDOM from 'react-dom';
import './Style/main.css';
import * as serviceWorker from './serviceWorker';
import route from './config/Router'
import { Provider } from 'react-redux'
import rootReducer from './config/store.jsx'
import { createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { Footer } from './components/Footer'

const store = createStore(rootReducer, composeWithDevTools())

ReactDOM.render(
    <Provider store={store}>
        { route }
    </Provider>,
     document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
