import React, { useState, useEffect } from 'react';
import Pages from './pages';
import logo from './logo.svg';
import './App.css';
import $ from 'jquery';

function App() {
  const[user, setUser] = useState(null);

  useEffect(() => {
    $.get('https://gitconnected.com/v1/portfolio/andrewsong1122', (me) => {
    console.log(me);  
    setUser(me);
    });
  }, []);

  if(!user) {
    return(<div>Loading...</div>);
  }

  return <Pages user={user} />;
}

export default App;
