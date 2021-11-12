import './App.css';
import { Link } from "react-router-dom";
import React from 'react';
import { useQuery } from '@apollo/client';
import GET_MY_DATA from './queries';
import Me from './components/me';
import Contact from './components/contact';

function App() {
  const { loading, data, error } = useQuery(GET_MY_DATA);
  if (loading) return "Loading...";
  if (error) return (<pre>Come back later we are taking a break</pre>);

  console.log('Main data', data)

  return (
    <div data-testid="app-testid">
      <main>
        <h1>Hello There</h1>
        <button type='button'><Link className="styledLink" to={{ pathname: '/me', state: data }}>who am i?</Link></button>
        <button type='button'><Link className="styledLink" to={{ pathname: '/blog', state: `${data.blog}` }}>blogging</Link></button>
        <button type='button'><Link className="styledLink" to={{ pathname: '/contact', state: `${data}` }}>contact me</Link></button>
      </main>
      <footer>
        <p>you are always one decision away from a totally different life</p>
      </footer>
    </div >
  );
}

export default App;
