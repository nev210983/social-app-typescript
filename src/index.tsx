import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Main from './components/main/Main';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router} from "react-router-dom"

ReactDOM.render(
  <Router>
    <Main />
  </Router>,
  document.getElementById('root')
);

reportWebVitals();
