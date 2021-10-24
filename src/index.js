import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import createBrowserHistory from 'history/createBrowserHistory';
import { Router, Route } from 'react-router-dom'
import Me from './me';
import See from './see';
import Contact from './contact';

import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: process.env.REACT_APP_GRAPHQL_ENDPOINT,
  cache: new InMemoryCache()
});

console.log(process.env.REACT_APP_GRAPHQL_ENDPOINT);

const history = createBrowserHistory();

ReactDOM.render(
  <Router history={history} >
    <ApolloProvider client={client}>
      <Route path="/" component={App} />
      <Route path="/me" component={Me} />
      <Route path="/see" component={See} />
      <Route path="/sayhi" component={Contact} />
    </ApolloProvider>
  </Router >,
  document.getElementById('root')
);