import React, {Component} from 'react';
import './App.css';
import barcelona from './barcelona.png';
import barcelona1 from './barcelona1.png';
import barcelona2 from './barcelona2.png';
import nyc from './nyc.png';
import nyc1 from './nyc1.png';
import nyc2 from './nyc2.png';
import amsterdam from './amsterdam.png';
import amsterdam1 from './amsterdam1.png';
import amsterdam2 from './amsterdam2.png';
import paris from './paris.png';
import paris1 from './paris1.png';
import paris2 from './paris2.png';
import Carousel from 'react-bootstrap/Carousel';
import {Row, Col, Image} from 'react-bootstrap';




class AppContent extends Component {
  render() { return ( 
  
    <div className="container">
      {/* Barcelona */}
      <Row>
        <Col>
          <Carousel className="mt-5 mb-3 w-100" fade="true">
            <Carousel.Item>
              <Image className="d-block" src={barcelona} alt="First slide" fluid/>
              <Carousel.Caption>
                <h5>New York City</h5>
              </Carousel.Caption>
            </Carousel.Item>
          
            <Carousel.Item>
              <Image className="d-block" src={barcelona1} alt="Second slide" fluid/>
              <Carousel.Caption>
              <h5>New York City</h5>
              </Carousel.Caption>
            </Carousel.Item>
        
            <Carousel.Item>
              <Image className="d-block" src={barcelona2} alt="Third slide" fluid/>
              <Carousel.Caption>
              <h5>New York City</h5>
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
                <h5>Amsterdam</h5>
              </Carousel.Caption>
            </Carousel.Item>
          
            <Carousel.Item>
              <Image className="d-block w-100" src={nyc1} alt="Third slide" fluid/>
              <Carousel.Caption>
              <h5>Amsterdam</h5>
              </Carousel.Caption>
            </Carousel.Item>
        
            <Carousel.Item>
              <Image className="d-block w-100" src={nyc2} alt="Third slide" fluid/>
              <Carousel.Caption>
              <h5>Amsterdam</h5>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>
        
        {/* 1st Carousel */}

      <Row>
        {/* Amsterdam */}
        <Col>
          <Carousel className="mt-5 mb-3">
            <Carousel.Item>
              <Image className="d-block w-100" src={amsterdam} alt="First slide" fluid/>
              <Carousel.Caption>
                <h3>Dublin, Ireland</h3>
              </Carousel.Caption>
            </Carousel.Item>
          
            <Carousel.Item>
              <Image className="d-block w-100" src={amsterdam1} alt="Third slide" fluid/>
              <Carousel.Caption>
                <h3>Tokio, Japan</h3>
              </Carousel.Caption>
            </Carousel.Item>
        
            <Carousel.Item>
              <Image className="d-block w-100" src={amsterdam2} alt="Third slide" fluid/>
              <Carousel.Caption>
                <h3>Rotterdam, The Netherlands</h3>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Col>
        <Col>

          <Carousel className="mt-5 mb-3">
            <Carousel.Item>
              <Image className="d-block w-100" src={paris} alt="First slide" fluid/>
              <Carousel.Caption>
                <h3>Dublin, Ireland</h3>
              </Carousel.Caption>
            </Carousel.Item>
          
            <Carousel.Item>
              <Image className="d-block w-100" src={paris1} alt="Third slide" fluid/>
              <Carousel.Caption>
                <h3>Tokio, Japan</h3>
              </Carousel.Caption>
            </Carousel.Item>
        
            <Carousel.Item>
              <Image className="d-block w-100" src={paris2} alt="Third slide" fluid/>
              <Carousel.Caption>
                <h3>Rotterdam, The Netherlands</h3>
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