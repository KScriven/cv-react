import './App.css';
import { Link } from "react-router-dom";
import React from 'react';

function App() {

  return (
    <div data-testid="app-testid">
      <main>
        <h1>Hello There</h1>
        <button type='button'><Link className="styledLink" to='/me'>who am i?</Link></button>
        <button type='button'><Link className="styledLink" to='/blog'>blogging</Link></button>
        <button type='button'><Link className="styledLink" to='/contact'>contact me</Link></button>
      </main>
      <footer>
        <p>you are always one decision away from a totally different life</p>
      </footer>
    </div >
  );
}

export default App;
