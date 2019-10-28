import React, {Component} from 'react';
import './Navbar.css';
import { slide as Menu } from 'react-burger-menu';
import Dropdown from 'react-bootstrap/Dropdown';
import Image from 'react-bootstrap/Image';
import User from './user.png';
import { Link, BrowserRouter as Router } from 'react-router-dom';



class AppNavBar extends Component {
    render() { return ( <div className="mt-3">
        <Menu className="bg-light" right>
          <Router>
          {/* <Link to="/" id="home" className="menu-item text-light">Home</Link> */}
          {/* <Link to="/" id="cities" className="menu-item">Cities</Link> */}
          </Router>
        </Menu>
        <Dropdown>
          <Dropdown.Toggle id="dropdown-basic">
          <Image src={User} className= 'nav-user' alt='user' roundedCircle />

          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Login</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Create Account</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    )
}
}

export default AppNavBar;