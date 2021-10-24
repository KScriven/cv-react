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
        <main>
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
        </main>
        <div>
          <footer>
            <p>Copyright &copy;2021 Kerryn Scriven - You are always one decision away from a totally different life</p>
          </footer>
        </div>
      </>
    );
  }
}

export default App;
