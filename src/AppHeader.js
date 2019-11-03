import React, {Component} from 'react';
import logo from './Imagenes/logo.png';
import User from './Imagenes/user.png';
import './App.css';
import './Navbar.css';
import { slide as Menu } from 'react-burger-menu';
import {Row, Col, Image, ListGroup, Dropdown} from 'react-bootstrap';
import {BrowserRouter as Router, Link} from "react-router-dom";


class AppHeader extends Component {
  render() { return ( 
    <div className="header">
        <Row className="d-sm-inline mt-3">
          {/* Dropdown */}
            <Col>
              <Dropdown>
                <Dropdown.Toggle id="dropdown-basic">
                  <Image src={User} className= 'nav-user' alt='user' roundedCircle />
                </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item href="/login">Login</Dropdown.Item>
                    <Dropdown.Item href="/create-account">Create Account</Dropdown.Item>
                  </Dropdown.Menu>
              </Dropdown>
            </Col>
          {/* SlideBar */}
            <Col>
              <Menu className="bg-light" right>
                <Router>
                    <ListGroup variant="flush">
                      <ListGroup.Item className="bg-light">
                        <Link to="/home" className="menu-item">Home</Link>
                      </ListGroup.Item>
                      <ListGroup.Item className="bg-light">
                        <Link to="/cities" className="menu-item">Cities</Link>
                      </ListGroup.Item>
                    </ListGroup>
                </Router>
              </Menu>
            </Col>
        </Row>
        {/* Logo */}
        <div className="Logo-wrapper">
          <Image src={logo} className="App-logo" alt="logo"/> 
        </div>

    </div>
  )}
}

export default AppHeader;
