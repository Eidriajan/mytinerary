import React, {Component} from 'react';
import './Navbar.css';
import { slide as Menu } from 'react-burger-menu';
import Dropdown from 'react-bootstrap/Dropdown';
import Image from 'react-bootstrap/Image';
import User from './user.png';
// import { Link, BrowserRouter as Router } from 'react-router-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link} from "react-router-dom";



class AppNavBar extends Component {
    render() { return ( 
      <div className="mt-3">
        {/* <Menu className="bg-light" right>
          <Router>
          <Link to="/" id="home" className="menu-item text-light">Home</Link>
          <Link to="/cities" id="cities" className="menu-item">Cities</Link>
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
      </div> */}

      <Router>
        <Menu className="bg-light" right>
          <nav>
            <ul>
              <li>
                <Link to="/" id="home" className="menu-item">Home</Link>
              </li>
              <li>
                <Link to="/cities" id="cities" className="menu-item">Cities</Link>
              </li>
            </ul>  
          </nav>
        </Menu>
        
        
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/">
            <Home/>
          </Route>
          <Route path="/Cities">
            <Cities />
          </Route>
        </Switch>
    </Router>
</div>
  );
}
}
function Home() {
  return <Dropdown>
  <Dropdown.Toggle id="dropdown-basic">
  <Image src={User} className= 'nav-user' alt='user' roundedCircle />

  </Dropdown.Toggle>
  <Dropdown.Menu>
    <Dropdown.Item href="#/action-1">Login</Dropdown.Item>
    <Dropdown.Item href="#/action-2">Create Account</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>;
}

function Cities() {
  return <h2>Cities</h2>;
}

export default AppNavBar;