import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import createBrowserHistory from 'history/createBrowserHistory';
import { Router, Route } from 'react-router-dom'
import Me from './me';
import See from './see';
import SayHi from './sayHi';

const history = createBrowserHistory();

ReactDOM.render(
  <Router history={history} >
    <Route path="/" component={App} />
    <Route path="/me" component={Me} />
    <Route path="/see" component={See} />
    <Route path="/sayhi" component={SayHi} />

  </Router>,
  document.getElementById('root')
);