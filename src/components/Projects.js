import React, { Component } from "react";
import {
  Tabs,
  Tab,
  Card,
  CardTitle,
  CardActions,
  Button,
  CardMenu,
  IconButton
} from "react-mdl";

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: 0
    };
  }
  
  toggleCategories(){
    if(this.state.activeTab === 0){
  return(
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
              <CardMenu><IconButton name="share" style={{color:'#fff'}} /></CardMenu>
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
              <CardMenu><IconButton name="share" style={{color:'#fff'}} /></CardMenu>
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
              <CardMenu><IconButton name="share" style={{color:'#fff'}} /></CardMenu>
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
              <CardMenu><IconButton name="share" style={{color:'#fff'}} /></CardMenu>
              <a href="https://codepen.io/Jaybur1/pen/wmLVpB" target="_blank" rel="noopener noreferrer"><Button colored>CodePen</Button></a>
              <a href="https://codepen.io/Jaybur1/full/wmLVpB" target="_blank" rel="noopener noreferrer"><Button colored>View Demo</Button></a>
              
            </CardActions>
          </Card>
          {/*randome quoote Machine */}
          <Card className="cards" shadow={6} style={{ width: "250px", margin: "auto" }}>
            <CardTitle
              expand
              style={{
                color: "#fff",
                height: "150px",
                background:
                  "url(https://i0.wp.com/www.keepcalmcoding.com/wp-content/uploads/2018/04/Free-code-camp-banner.jpg?fit=960%2C530) center / cover"
              }}
              ><span className="card-title">Randome Quote, JQuery</span></CardTitle>
            <CardActions border>
              <CardMenu><IconButton name="share" style={{color:'#fff'}} /></CardMenu>
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
              <CardMenu><IconButton name="share" style={{color:'#fff'}} /></CardMenu>
              <a href="https://codepen.io/Jaybur1/pen/rGjzRz" target="_blank" rel="noopener noreferrer"><Button colored>CodePen</Button></a>
              <a href="https://codepen.io/Jaybur1/full/rGjzRz" target="_blank" rel="noopener noreferrer"><Button colored>View Demo</Button></a>
              
            </CardActions>
          </Card>
          </div>
  )
    }else if(this.state.activeTab ===1){
return(
  <div className="projects">
  <Card className="cards" shadow={5} style={{ width: "250px", margin: "auto" }}>
            <CardTitle
              expand
              style={{
                color: "#000",
                height: "150px",
                background:
                  "url(https://pbs.twimg.com/profile_images/873856169017843712/Ue26CONG_400x400.jpg) center / cover"
              }}
              ><span className="card-title">Voyage 7</span></CardTitle>
            <CardActions border>
              <CardMenu><IconButton name="share" style={{color:'#000'}} /></CardMenu>
              <Button colored>gitHub</Button>
              <Button colored>Live View</Button>
              
            </CardActions>
          </Card>
          </div>
          )
    }else if(this.state.activeTab ===2){
      return(
        <div className="projects">
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
            <Tab className="tabs">FCC:Projects</Tab>
            <Tab className="tabs">Chingu Voyages</Tab>
            <Tab className="tabs">Other</Tab>
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
