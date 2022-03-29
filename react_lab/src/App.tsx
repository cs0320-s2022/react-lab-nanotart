import React from 'react';
import logo from './logo.svg';
import Horoscope from './Horoscope';
import ReactDOM from "react-dom";
import './App.css';

function App() {

  return (
    <div className="App">
        <Horoscope/> {/*instantiate a Horoscope component*/}
      {/*<header className="App-header">*/}
      {/*  /!*create an image*!/*/}
      {/*  /!*<img src={logo} className="App-logo" alt="logo" />*!/*/}
      {/*  /!*<p>*!/*/}
      {/*  /!*  Edit <code>src/App.tsx</code> and save to reload.*!/*/}
      {/*  /!*</p>*!/*/}
      {/*  /!*<a*!/*/}
      {/*  /!*  className="App-link"*!/*/}
      {/*  /!*  href="https://reactjs.org"*!/*/}
      {/*  /!*  target="_blank"*!/*/}
      {/*  /!*  rel="noopener noreferrer"*!/*/}
      {/*  /!*>*!/*/}
      {/*  /!*  Learn React*!/*/}
      {/*  /!*</a>*!/*/}
      {/*</header>*/}
    </div>
  );
}

export default App;
