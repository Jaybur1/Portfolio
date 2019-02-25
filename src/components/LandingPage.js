import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class LandingPage extends Component {
  render() {
    return (
      <div style={{ width: '100%', margin: "auto" }}>
        <Grid className="Landing-grid">
          <Cell col={12}>
            <img
              src="https://avatars1.githubusercontent.com/u/29682663?s=400&u=1b6f0eb98c5f80db05541167834983cdcdcdd468&v=4"
              alt="jayburbygaAvatar"
              className="avatar-image"
            />
            <div className="name">
              <h1>Hey there! I'm Jay!</h1>
            </div>
            <div className="banner-text">

              <h1>Web Developer</h1>
              <hr />
              <p>HTML/CSS | JavaScript | Ruby/Rails | ReactJs | Express</p>
              <div className="social-links">
                {/*fcc */}
                <a href="https://www.freecodecamp.org/jaybur1" target="_blank" rel="noopener noreferrer"><i className="fab fa-free-code-camp"></i></a>
                {/*codepen */}
                <a href="https://codepen.io/Jaybur1/" target="_blank" rel="noopener noreferrer"><i className="fab fa-codepen"></i></a>
                {/*linkedin */}
                <a href="https://www.linkedin.com/in/jay-burbyga-b21409156/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a>
                {/*github */}
                <a href="https://github.com/Jaybur1" target="_blank" rel="noopener noreferrer"><i class="fab fa-github"></i></a>
              </div>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default LandingPage;