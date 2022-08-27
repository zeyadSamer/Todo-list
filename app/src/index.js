import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createStore} from 'redux'
import todos from './reducers/todo';
import emptyChecker from './middleware/emptyChecker';
import { applyMiddleware } from 'redux';

import {combineReducers} from 'redux';
import loading  from './reducers/loading'




const root = ReactDOM.createRoot(document.getElementById('root'));


const store=createStore(combineReducers({todos,loading}),applyMiddleware(emptyChecker));

root.render(
  <React.StrictMode>
    <App store={store}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


