import React, { Component } from "react";
import {
  Tabs,
  Tab,
  Card,
  CardTitle,
  CardActions,
  Button,
  CardMenu
} from "react-mdl";

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: 0
    };
  }

  toggleCategories() {
    if (this.state.activeTab === 1) {
      return (
        <div className="projects">
          {/*Flex Gallery */}
          <Card className="cards" shadow={6} style={{ width: "250px", margin: "auto" }}>
            <CardTitle
              expand
              style={{
                color: "#000",
                height: "150px",
                background:
                  "url(http://cdn.embed.ly/providers/logos/codesandbox.png) center / cover",
                textShadow: '5px 5px 20px white'
              }}
            ><span className="card-title"><strong>Flex Gallery, VanillaJS</strong></span></CardTitle>
            <CardActions border>
              <CardMenu></CardMenu>
              <a href="https://codesandbox.io/s/yv454m8x21" target="_blank" rel="noopener noreferrer"><Button colored>CodeSB</Button></a>
              <a href="https://yv454m8x21.codesandbox.io/" target="_blank" rel="noopener noreferrer"><Button colored>View Demo</Button></a>
            </CardActions>
          </Card>
          {/*Local Time Clock*/}
          <Card className="cards" shadow={6} style={{ width: "250px", margin: "auto" }}>
            <CardTitle
              expand
              style={{
                color: "#000",
                height: "150px",
                background:
                  "url(http://cdn.embed.ly/providers/logos/codesandbox.png) center / cover",
                textShadow: '5px 5px 20px white'
              }}
            ><span className="card-title"><strong>Local Time Clock, VanillaJS</strong></span></CardTitle>
            <CardActions border>
              <CardMenu></CardMenu>
              <a href="https://codesandbox.io/s/zw6k07kqnm" target="_blank" rel="noopener noreferrer"><Button colored>CodeSB</Button></a>
              <a href="https://zw6k07kqnm.codesandbox.io/" target="_blank" rel="noopener noreferrer"><Button colored>View Demo</Button></a>
            </CardActions>
          </Card>
          {/*Basic Paint App*/}
          <Card className="cards" shadow={6} style={{ width: "250px", margin: "auto" }}>
            <CardTitle
              expand
              style={{
                color: "#000",
                height: "150px",
                background:
                  "url(http://cdn.embed.ly/providers/logos/codesandbox.png) center / cover",
                textShadow: '5px 5px 20px white'
              }}
            ><span className="card-title"><strong>Simple Paint App, VanillaJS</strong></span></CardTitle>
            <CardActions border>
              <CardMenu></CardMenu>
              <a href="https://codesandbox.io/s/kmmwkolwo7" target="_blank" rel="noopener noreferrer"><Button colored>CodeSB</Button></a>
              <a href="https://kmmwkolwo7.codesandbox.io/" target="_blank" rel="noopener noreferrer"><Button colored>View Demo</Button></a>
            </CardActions>
          </Card>

        </div>
      )
    } else if (this.state.activeTab === 0) {
      return (
        <div className="projects">
          {/*MuffinTalk React+socet project.*/}
          <Card className="cards" shadow={5} style={{ width: "250px", margin: "auto" }}>
            <CardTitle
              expand
              style={{
                color: "#000",
                height: "150px",
                background:
                  "url(https://vectr.com/jaybur/a13otRy4s.png?width=640&height=640&select=a13otRy4spage0) center / cover"
              }}
            ><span className="card-title">MuffinTalk-ChatApp, ReactJS</span></CardTitle>
            <CardActions border>
              <CardMenu></CardMenu>
              <a href="https://github.com/Jaybur1/MuffinTalk-chatApp" target="_blank" rel="noopener noreferrer"><Button colored>gitHub</Button></a>
              <a href="https://muffin-talk-chat.herokuapp.com" target="_blank" rel="noopener noreferrer"><Button colored>Live View</Button></a>

            </CardActions>
          </Card>

          {/*ArtiHub Rails project.*/}
          <Card className="cards" shadow={5} style={{ width: "250px", margin: "auto" }}>
            <CardTitle
              expand
              style={{
                color: "#000",
                height: "150px",
                background:
                  "url(https://pbs.twimg.com/profile_images/691206086955790336/CDMbA57p_400x400.png) center / cover"
              }}
            ><span className="card-title">Article-App, Ruby on Rails</span></CardTitle>
            <CardActions border>
              <CardMenu></CardMenu>
              <a href="https://github.com/Jaybur1/MuffinTalk-chatApp" target="_blank" rel="noopener noreferrer"><Button colored>gitHub</Button></a>
              <a href="https://muffin-talk-chat.herokuapp.com" target="_blank" rel="noopener noreferrer"><Button colored>Live View</Button></a>

            </CardActions>
          </Card>
        </div>
      )
    } else if (this.state.activeTab === 2) {
      return (
        <div className="projects">
          {/*calculator */}
          <Card className="cards" shadow={6} style={{ width: "250px", margin: "auto" }}>
            <CardTitle
              expand
              style={{
                color: "#fff",
                height: "150px",
                background:
                  "url(https://i0.wp.com/www.keepcalmcoding.com/wp-content/uploads/2018/04/Free-code-camp-banner.jpg?fit=960%2C530) center / cover"
              }}
            ><span className="card-title">Calculator, ReactJS</span></CardTitle>
            <CardActions border>
              <CardMenu></CardMenu>
              <a href="https://codepen.io/Jaybur1/pen/rqmpgJ" target="_blank" rel="noopener noreferrer"><Button colored>CodePen</Button></a>
              <a href="https://codepen.io/Jaybur1/full/rqmpgJ" target="_blank" rel="noopener noreferrer"><Button colored>View Demo</Button></a>

            </CardActions>
          </Card>
          {/*Drum Machine */}
          <Card className="cards" shadow={6} style={{ width: "250px", margin: "auto" }}>
            <CardTitle
              expand
              style={{
                color: "#fff",
                height: "150px",
                background:
                  "url(https://i0.wp.com/www.keepcalmcoding.com/wp-content/uploads/2018/04/Free-code-camp-banner.jpg?fit=960%2C530) center / cover"
              }}
            ><span className="card-title">Drum Machine, ReactJS</span></CardTitle>
            <CardActions border>
              <CardMenu></CardMenu>
              <a href="https://codepen.io/Jaybur1/pen/wYzMae" target="_blank" rel="noopener noreferrer"><Button colored>CodePen</Button></a>
              <a href="https://codepen.io/Jaybur1/full/wYzMae" target="_blank" rel="noopener noreferrer"><Button colored>View Demo</Button></a>

            </CardActions>
          </Card>
          {/*Markedown previewer */}
          <Card className="cards" shadow={6} style={{ width: "250px", margin: "auto" }}>
            <CardTitle
              expand
              style={{
                color: "#fff",
                height: "150px",
                background:
                  "url(https://i0.wp.com/www.keepcalmcoding.com/wp-content/uploads/2018/04/Free-code-camp-banner.jpg?fit=960%2C530) center / cover"
              }}
            ><span className="card-title">Markedown Previewer, ReactJS</span></CardTitle>
            <CardActions border>
              <CardMenu></CardMenu>
              <a href="https://codepen.io/Jaybur1/pen/mzmjWB" target="_blank" rel="noopener noreferrer"><Button colored>CodePen</Button></a>
              <a href="https://codepen.io/Jaybur1/full/mzmjWB" target="_blank" rel="noopener noreferrer"><Button colored>View Demo</Button></a>

            </CardActions>
          </Card>
          {/*Pomodoro */}
          <Card className="cards" shadow={6} style={{ width: "250px", margin: "auto" }}>
            <CardTitle
              expand
              style={{
                color: "#fff",
                height: "150px",
                background:
                  "url(https://i0.wp.com/www.keepcalmcoding.com/wp-content/uploads/2018/04/Free-code-camp-banner.jpg?fit=960%2C530) center / cover"
              }}
            ><span className="card-title">Pomodoro Clock, JQuery</span></CardTitle>
            <CardActions border>
              <CardMenu></CardMenu>
              <a href="https://codepen.io/Jaybur1/pen/wmLVpB" target="_blank" rel="noopener noreferrer"><Button colored>CodePen</Button></a>
              <a href="https://codepen.io/Jaybur1/full/wmLVpB" target="_blank" rel="noopener noreferrer"><Button colored>View Demo</Button></a>

            </CardActions>
          </Card>
          {/*random quoote Machine */}
          <Card className="cards" shadow={6} style={{ width: "250px", margin: "auto" }}>
            <CardTitle
              expand
              style={{
                color: "#fff",
                height: "150px",
                background:
                  "url(https://i0.wp.com/www.keepcalmcoding.com/wp-content/uploads/2018/04/Free-code-camp-banner.jpg?fit=960%2C530) center / cover"
              }}
            ><span className="card-title">Random Quote, JQuery</span></CardTitle>
            <CardActions border>
              <CardMenu></CardMenu>
              <a href="https://codepen.io/Jaybur1/pen/yRJWWV" target="_blank" rel="noopener noreferrer"><Button colored>CodePen</Button></a>
              <a href="https://codepen.io/Jaybur1/full/yRJWWV" target="_blank" rel="noopener noreferrer"><Button colored>View Demo</Button></a>

            </CardActions>
          </Card>
          {/*weather*/}
          <Card className="cards" shadow={5} style={{ width: "250px", margin: "auto" }}>
            <CardTitle
              expand
              style={{
                color: "#fff",
                height: "150px",
                background:
                  "url(https://i0.wp.com/www.keepcalmcoding.com/wp-content/uploads/2018/04/Free-code-camp-banner.jpg?fit=960%2C530) center / cover"
              }}
            ><span className="card-title">Weather App, JQuery</span></CardTitle>
            <CardActions border>
              <CardMenu></CardMenu>
              <a href="https://codepen.io/Jaybur1/pen/rGjzRz" target="_blank" rel="noopener noreferrer"><Button colored>CodePen</Button></a>
              <a href="https://codepen.io/Jaybur1/full/rGjzRz" target="_blank" rel="noopener noreferrer"><Button colored>View Demo</Button></a>

            </CardActions>
          </Card>
        </div>
      )
    }
  }


  render() {
    return (
      <div className="projectsPage">
        <div className="category-tab">
          <Tabs
            activeTab={this.state.activeTab}
            onChange={(tabId) => this.setState({ activeTab: tabId })}
            ripple
          >
            <Tab className="tabs">Recent Projects</Tab>
            <Tab className="tabs">Past Projects</Tab>
            <Tab className="tabs">FCC Projects</Tab>
          </Tabs>
          <section className="projects-grid">
            {this.toggleCategories()}
          </section>

        </div>
      </div>
    );
  }
}

export default Projects;