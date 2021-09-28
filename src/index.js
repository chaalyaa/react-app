import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import allReducers from './reducer';

const storeReducer = createStore(allReducers, applyMiddleware(thunk))

const appRouting = (
  <Provider store={storeReducer}>
    {/* <Router>
      <Switch>
        <Route exact path="/" component= {App} />
      </Switch>
    </Router> */}
    <App></App>
  </Provider>  
);

ReactDOM.render(
  appRouting,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
