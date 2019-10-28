import React, {Component} from 'react';
import AppHeader from './AppHeader.js';
import AppNavBar from './AppNavBar.js';
import AppContent from './AppContent.js';

import './App.css';

class App extends Component {
  render() { return ( 
      <div className="container">
        <div  className="d-sm-inline">
          <AppNavBar></AppNavBar>
        </div>
        <div>
          <AppHeader></AppHeader>
        </div>
        <div className="container">
          <AppContent></AppContent>
        </div>
      </div>

  );
}
}

export default App;
