import React, {Component} from 'react';
import homeIcon from './homeIcon.png';
import './App.css';

class Footer extends Component {
  render() { return ( <div>
      <footer className="footer">
        <img src={homeIcon}  className="footer-icon" alt="homeIcon"/>
      </footer>
  </div>
  );
}
}

export default Footer;