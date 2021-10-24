import React from 'react';
import { Router, Route } from 'react-router';

import App from './App';
import Me from './me';
import See from './see';
import Contact from './sayHi';

const Routes = (props) => (
  <Router {...props}>
    <Route path="/" component={App}>
      <Route path="/me" component={Me} />
      <Route path="/see" component={See} />
      <Route path="/sayhi" component={Contact} />
    </Route>
  </Router>
);

export default Routes;