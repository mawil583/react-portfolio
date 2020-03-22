import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/navbar/index';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/home';
import Portfolio from './pages/portfolio';
import AboutMe from './pages/aboutMe';
import Resume from './pages/resume';
import Contact from './pages/contact';

class App extends Component {
  state = {
    navClass: "ml-auto navLink"
  }

  // defaultNavClass= "ml-auto navLink"; 

  // makeActive = () => {
  //   this.setState({navClass: "ml-auto navLinkActive"})
  // }

  render () {

    return (
      <div className="App">
      <Router>
        <Navbar makeActive={this.makeActive} navClass={this.state.navClass} />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/portfolio" component={Portfolio} />
          <Route exact path="/aboutMe" component={AboutMe} />
          <Route exact path="/resume" component={Resume} />
          <Route exact path="/contact" component={Contact} />
        </Switch>
      </Router>
    </div>

)
}
}

export default App;
