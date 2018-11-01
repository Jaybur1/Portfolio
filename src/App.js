import React, { Component } from "react";
import "./App.css";
import Main from "./components/Main";
import { Layout, Header, Navigation, Drawer, Content } from "react-mdl";
import { Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <Layout className="Layout">
            <Header transparent title="Menu" style={{ color: "white"}} />
            <Drawer className="manu" title="Menu">
              <Navigation>
                <Link to="/">Main</Link>
                <Link to="/About">About</Link>
                <Link to="/Projects">Projects</Link>
                <Link to="/Contact">Contact</Link>
                <Link to="/Useful">Useful</Link>
              </Navigation>
            </Drawer>
            <Content className="Content">
              <div className="page-content" />
              <Main />
            </Content>
          </Layout>
        </div>
      </div>
    );
  }
}

export default App;
