import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Sections from './components/sections/sections';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Sections />
      </div>
    );
  }
}

export default App;
