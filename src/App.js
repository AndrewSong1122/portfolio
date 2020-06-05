import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import $ from 'jquery';

function App() {
  const[user, setUser] = useState(null);

  useEffect(() => {
    $.get('https://gitconnected.com/v1/portfolio/andrewsong1122', (me) => {
    console.log(typeof me);  
    setUser(me);
    });
  });

  if(!user) {
    return(<div>loading</div>);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
