import React, {Component} from 'react';
import arrowRight from './circled-right-2.png';
import logo from './logo.png';
import './App.css';


class AppHeader extends Component {
  render() { return ( <div className="header">
      <header className="header">
        <img src={logo} className="App-logo" alt="logo"/>
        <div className="subtitle, margin-browse"> 
          <h4>Find your perfect trip, designed by insiders who know and love their cities.</h4>
        </div>         
        <div className="margin-browse">
          <img src={arrowRight} className="browsing-icon" alt="browsing logo"></img>
        </div>
      </header>
  </div>
  );
}
}

export default AppHeader;
