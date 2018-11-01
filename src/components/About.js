import React, { Component } from 'react';

class About extends Component {
render(){
    return (
        <div className="about-page">
          <h1 className="quote">"Be better today then yourself tomorrow !"</h1>
          <hr />
          <div className="about-pic">
          <img  src="https://image.prntscr.com/image/7NMrPMh5TbiIw7cPXID2aw.png" alt="thumbsUp-pic"/>
          </div>
          <p>Hi there ! my name is Jay, well actually it's Evgeniy, but since I was in school everybody called me Jay.<br />
          I am a self thought web developer from Canada.
          as you probebly guessed by my offical name, im not origenaly from Canada.
          I was born in the Ukraine, then moved to Israel and then moved to Canada, yeah preaty long journy eh ?<br />
          Well I can tell you that it is was quite a journy, in fact it is still on going.
          I started learning web development in the end of 2016 , after being a professional truck driver for 4 years. <br />

          </p>
        </div>
    )
}
}

export default About;