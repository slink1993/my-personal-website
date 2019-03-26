import React, { Component } from 'react'
import {Grid, Cell} from 'react-mdl';

export class Landing extends Component {
  render() {
    return (
      <div style ={{width: '100%', margin: 'auto'}}>
        <Grid className="landing-grid">
            <Cell col={12}>
            <img 
               src="https://www.shareicon.net/download/2015/09/18/103157_man_512x512.png"
               alt="profile" 
               className="profile-pic"
               />
            <div className="banner-text">
                <h1>Software Engineer</h1>
              <hr/>

              <p> Python | AWS | Terraform | Docker | Web Technologies</p>
              <div className="social-links">
                  <a href="http://www.linkedin.com/in/stephenlinkk" rel="noopener noreferrer" target="_blank">
                      <i className="fab fa-linkedin"  aria-hidden="true"/>
                  </a>
                  <a href="http://github.com/stephenlink1993" rel="noopener noreferrer" target="_blank">
                      <i className="fab fa-github-square"  aria-hidden="true"/>
                  </a>
              </div>
            </div>
            </Cell>
        </Grid>
      </div>
    )
  }
}

export default Landing;
