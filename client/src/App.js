import React, {Fragment}from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import './App.css';
import Navbar from '../src/conponets/layouts/Navbar'
import Home from '../src/conponets/pages/Home'
import About from '../src/conponets/pages/About'


function App() {
  return (
    <Router>
    <Fragment>
      <Navbar/>
      <div className="container">
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/about' component={About}/>
        </Switch>
      </div>
    </Fragment>
    </Router>
  );
}

export default App;
