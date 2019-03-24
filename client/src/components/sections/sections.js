import React, { Component } from 'react';
import './sections.css';

class Sections extends Component {
  constructor() {
      super();
      this.state = {
          sections: []
      };
  }

  componentDidMount() {
      fetch('/api/sections')
       .then(res => res.json())
       .then(sections => this.setState({sections}, () => console.log('Sections fetched..', sections)));
  }
  render() {
    return (
      <div >
       <h2>Sections</h2>
       <ul>
           {this.state.sections.map(section => 
             <li> {section.title} </li>
             )}
       </ul>
      </div>
    );
  }
}

export default Sections;