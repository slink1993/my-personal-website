import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class SectionItem extends Component {
  getStyle = () => {
      return {
        background: '#f4f4f4',
        padding: '10px',
        borderBottom: '1px #ccc dotted',
        textDecoration: 'none',
      }
  }
  render() {
    const { title } = this.props.section;
    let display;
    if (title=='About') {
      display = <Link to="/about">{title}</Link>
    } else {
      display = <p>{title}</p>
    }
    return (
        <div style={this.getStyle()}>
         {display}
        </div>
    )
  }
}

export default SectionItem
