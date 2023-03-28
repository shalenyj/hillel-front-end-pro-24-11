import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from "react-router-dom";
import { composeWithDevTools } from "redux-devtools-extension";
import { Provider } from "react-redux";
import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from 'redux-thunk';

import App from './App';
import bankReducers from './store/reducers/bank';
import router from './router';

import './index.css';

const reducers = combineReducers({
  bank: bankReducers
})

const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)) )

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <RouterProvider router={router}>
    </RouterProvider>
  </Provider>
);