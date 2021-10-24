import './App.css';
import React from 'react';
import { Link } from "react-router-dom";
import { useQuery } from '@apollo/client';
import GET_MY_DATA from './queries'

function App() {
  const { loading, data, error } = useQuery(GET_MY_DATA);
  console.log('DATA', data)

  if (loading) return "Loading...";

  if (error) return <pre>{error.message}</pre>

  return (
    <>
      <header>
        <h1>Hello There</h1>
      </header>
      <main>
        <div className="main-content">
          <p>
            This is a place where I share my thoughts and gather things from the web
            that interest me. These are my own thoughts and are not reflective or
            related to anyone else.
          </p>
          <div>
            <Link to={{ pathname: "/me", state: data.intro }}><button>Me</button></Link>
            <Link to={{ pathname: "/see", state: data.linkedIn }}><button>See</button></Link>
            <Link to={{ pathname: "/sayhi", state: data.emailAddress }}><button>Say Hi</button></Link>
          </div>
        </div>
      </main>
      <footer>
        <p>Copyright &copy;2021 Kerryn Scriven - You are always one decision away from a totally different life</p>
      </footer>
    </>
  );
}

export default App;
