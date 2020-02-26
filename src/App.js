import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/navbar/index';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/home';
import Portfolio from './pages/portfolio';
import AboutMe from './pages/aboutMe';
import Resume from './pages/resume';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/portfolio" component={Portfolio} />
          <Route exact path="/aboutme" component={AboutMe} />
          <Route exact path="/resume" component={Resume} />
        </Switch>
      </div>
    </Router>

  );
}

export default App;
