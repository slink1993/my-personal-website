import React, { Component } from 'react';
import About from './components/pages/About'
import Hobbies from './components/pages/Hobbies'
import Skills from './components/pages/Skills'
import WorkExperience from './components/pages/WorkExperience'
import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Landing from './components/pages/Landing';
import './App.css'
import Main from './components/Main'

class App extends Component {
  render() {
    return (
      <div className="App">
          <Layout>
            <Header className="header-color" title="Stephen Link" scroll>
                <Navigation>
                  <Link to="/about">About</Link>
                  <Link to="/skills">Skills</Link>
                  <Link to="/workexperience">Work Experience</Link>
                  <Link to="/hobbies">Hobbies</Link>
                </Navigation>
            </Header>
            <Drawer title="Title">
              <Navigation>
                  <Link to="/about">About</Link>
                  <Link to="/skills">Skills</Link>
                  <Link to="/workexperience">Work Experience</Link>
                  <Link to="/hobbies">Hobbies</Link>
              </Navigation>
            </Drawer>
            <Content>
                <div className="page-content" />
                <Main/>
            </Content>
          </Layout>
      </div>
    );
  }
}

export default App;
