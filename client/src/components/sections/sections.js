import React, { Component } from 'react';
import SectionItem from './SectionItem.js';
import './Sections.css';

class Sections extends Component {
  constructor() {
      super();
      this.state = {
          sections: []
      };
  }

  componentDidMount() {
      fetch('/sections')
       .then(res => res.json())
       .then(sections => this.setState({sections}, () => console.log('Sections fetched..', sections)));
  }
  render() {
    return (
      <div >
       <ul>
           {this.state.sections.map(section => 
             <SectionItem key= {section.title} section={section} />
             )}
       </ul>
      </div>
    );
  }
}

export default Sections;