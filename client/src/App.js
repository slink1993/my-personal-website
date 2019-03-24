import React, { Component } from 'react';
import './App.css';
import Header from './components/layout/Header';
import Sections from './components/sections/Sections';
import About from './components/pages/About'
import { BrowserRouter as Router, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <Header/>
        <Route exact path ="/" render={props => (
          <React.Fragment>
            <Sections/>
          </React.Fragment>
        )} />
        <Route path ="/about" component={About} />
      </div>
      </Router>
    );
  }
}

export default App;
