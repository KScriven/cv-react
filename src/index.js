import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import createBrowserHistory from 'history/createBrowserHistory';
import { Router, Route, Switch } from 'react-router-dom'
import Blog from './components/blog';
import Contact from './components/contact';
import Me from './components/me';

import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";


const client = new ApolloClient({
  uri: process.env.REACT_APP_GRAPHQL_ENDPOINT,
  cache: new InMemoryCache()
});

const history = createBrowserHistory();

ReactDOM.render(
  <Router history={history} >
    <ApolloProvider client={client}>
      <div>
        <Switch>
          <Route path="/contact" component={Contact} />
          <Route path="/me" component={Me} />
          <Route path="/blog" component={Blog} />
          <Route path="/" component={App} />
        </Switch>
      </div>
    </ApolloProvider>
  </Router >,
  document.getElementById('root')
);