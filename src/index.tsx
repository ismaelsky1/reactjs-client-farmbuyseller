import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Auth from './page/Auth/Auth';
import Dashboard from './page/Dashboard/Dashboard';
import Quotation from './page/Quotation/Quotation';

import reportWebVitals from './reportWebVitals';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route path="/dashboard">
          <Dashboard />
        </Route>
        <Route path="/q/:id">
          <Quotation />
        </Route>
        <Route path="/">
          <Auth />
        </Route>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
