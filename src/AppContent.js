import React, {Component} from 'react';
import arrowRight from './Imagenes/circled-right-2.png';
import barcelona from './Imagenes/barcelona.png';
import barcelona1 from './Imagenes/barcelona1.png';
import barcelona2 from './Imagenes/barcelona2.png';
import nyc from './Imagenes/nyc.png';
import nyc1 from './Imagenes/nyc1.png';
import nyc2 from './Imagenes/nyc2.png';
import amsterdam from './Imagenes/amsterdam.png';
import amsterdam1 from './Imagenes/amsterdam1.png';
import amsterdam2 from './Imagenes/amsterdam2.png';
import paris from './Imagenes/paris.png';
import paris1 from './Imagenes/paris1.png';
import paris2 from './Imagenes/paris2.png';
import Carousel from 'react-bootstrap/Carousel';
import {Row, Col, Image} from 'react-bootstrap';
import './App.css';

class AppContent extends Component {
  render() { return ( 

    <div className="container">
      
      <div className="subtitle, margin-browse text-center"> 
          <h4>Find your perfect trip, designed by insiders who know and love their cities.</h4>
      </div>         
      <div className="margin-browse text-center ">
          <Image src={arrowRight} className="browsing-icon" alt="browsing logo" fluid></Image>
      </div>

      {/* Barcelona */}

      <Row>
        <Col>
          <Carousel className="mt-5 mb-3 w-100">
            <Carousel.Item>
              <Image 
              className="d-block" 
              src={barcelona}
              alt="First slider" 
              fluid/>
            <Carousel.Caption>
              <h5>Barcelona</h5>
            </Carousel.Caption>
            </Carousel.Item>
          
            <Carousel.Item>
              <Image className="d-block" src={barcelona1} alt="Second slide" fluid/>
              <Carousel.Caption>
              <h5>Barcelona</h5>
              </Carousel.Caption>
            </Carousel.Item>
        
            <Carousel.Item>
              <Image className="d-block" src={barcelona2} alt="Third slide" fluid/>
              <Carousel.Caption>
              <h5>Barcelona</h5>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Col>
          {/* New York */}
        <Col>
          <Carousel className="mt-5 mb-3">
            <Carousel.Item>
              <Image className="d-block w-100" src={nyc} alt="First slide" fluid/>
              <Carousel.Caption>
                <h5>New York</h5>
              </Carousel.Caption>
            </Carousel.Item>
          
            <Carousel.Item>
              <Image className="d-block w-100" src={nyc1} alt="Third slide" fluid/>
              <Carousel.Caption>
              <h5>New York</h5>
              </Carousel.Caption>
            </Carousel.Item>
        
            <Carousel.Item>
              <Image className="d-block w-100" src={nyc2} alt="Third slide" fluid/>
              <Carousel.Caption>
              <h5>New York</h5>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>
        
        {/* 2nd Carousel */}

      <Row>
        {/* Amsterdam */}
        <Col>
          <Carousel className="mt-5 mb-3">
            <Carousel.Item>
              <Image className="d-block w-100" src={amsterdam} alt="First slide" fluid/>
              <Carousel.Caption>
                <h5>Amsterdam</h5>
              </Carousel.Caption>
            </Carousel.Item>
          
            <Carousel.Item>
              <Image className="d-block w-100" src={amsterdam1} alt="Third slide" fluid/>
              <Carousel.Caption>
                <h5>Amsterdam</h5>
              </Carousel.Caption>
            </Carousel.Item>
        
            <Carousel.Item>
              <Image className="d-block w-100" src={amsterdam2} alt="Third slide" fluid/>
              <Carousel.Caption>
                <h5>Amsterdam</h5>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Col>
        <Col>

          <Carousel className="mt-5 mb-3">
            <Carousel.Item>
              <Image className="d-block w-100" src={paris} alt="First slide" fluid/>
              <Carousel.Caption>
                <h5>Paris</h5>
              </Carousel.Caption>
            </Carousel.Item>
          
            <Carousel.Item>
              <Image className="d-block w-100" src={paris1} alt="Third slide" fluid/>
              <Carousel.Caption>
                <h5>Paris</h5>
              </Carousel.Caption>
            </Carousel.Item>
        
            <Carousel.Item>
              <Image className="d-block w-100" src={paris2} alt="Third slide" fluid/>
              <Carousel.Caption>
                <h5>Paris</h5>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Col>
        </Row>
      </div>
    

  );
}
}

export default AppContent;