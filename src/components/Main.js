import React from 'react';
import { Route, Switch } from 'react-router-dom';
import LandingPage from './LandingPage';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';
import Useful from './Useful';

const Main = () => (
    <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/About" component={About} />
        <Route path="/Projects" component={Projects} />
        <Route path="/Contact" component={Contact} />
        <Route path="/Useful" component={Useful} />
    </Switch>
);


export default Main;