import './App.css';
import React, { Component } from 'react';
import { Link } from "react-router-dom";
class App extends Component {
  render() {
    return (
      <>
        <header>
          <h1>Hello There</h1>
        </header>
        <div class="main-content">
          <p>
            This is a place where I share my thoughts and gather things from the web
            that interest me. These are my own thoughts and are not reflective or
            related to anyone else.
          </p>
          <div>
            <Link to="/me"><button>Me</button></Link>
            <Link to="/see"><button>See</button></Link>
            <Link to="/sayhi"><button>Say Hi</button></Link>
          </div>
        </div>
      </>
    );
  }
}

export default App;
