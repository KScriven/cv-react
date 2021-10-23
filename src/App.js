import './App.css';
import React, { Component } from 'react';

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
            <a href="../components/me.html"><button>Me</button></a>
            <a href="../components/see.html"><button>See</button></a>
            <a href="../components/sayhi.html"><button>Say Hi</button></a>
          </div>
        </div>
      </>
    );
  }
}

export default App;
