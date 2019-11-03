import React, {Component} from 'react';
import AppHeader from './AppHeader.js';
import AppContent from './AppContent.js';
import {BrowserRouter as Router, Route} from "react-router-dom";
import './App.css';

class App extends Component {
  render() { return ( 
      <div className="container">
        <div className="mt-1">
          <AppHeader></AppHeader>
        </div>

          <Router>
              <Route exact path="/" component={AppContent}/>
              <Route path="/home" component={AppContent}/>
              <Route path="/cities" component={AppContent}/>
          </Router>

      </div>

  )}}

export default App;
