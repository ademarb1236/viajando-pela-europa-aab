import React from 'react';
//import { Button } from '../node_modules/reactstrap';
import Header from './components/Header'
//import logo from './logo.svg';

import './App.css';

function App() {
  return (
    <div className="europa">
      <header >
        <Header/>
      {/* className="App-header" */}
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
    </div>
  );
}

export default App;
