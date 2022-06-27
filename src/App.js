import './App.css';
import a from './photos/miami-jm.JPG';
import b from './photos/desert-pink.jpeg';
import c from './photos/miami-rarity.JPG';
import d from './photos/vrc-jump.jpg';
import e from './photos/on-boardwalk.jpg'
import f from './photos/miami-gracious.JPG'
import g from './photos/boat.JPG'
import h from './photos/miami-kitboys.JPG'

import {Container, Row, Image, Col } from 'react-bootstrap';


function App() {
  return (
    <Container className='App'>
      <Row id='top-row'>
        <h1 className = 'my-name'>RAHEEM LAWAL</h1>
        <h6 className = 'my-name'>MODEL</h6>
        <h6 className = 'my-name'>LOS ANGELES/MIAMI</h6>
        <h6 className = 'my-name'>INQUIRIES: LAWALRAHEEM@GMAIL.COM</h6>
      </Row>
      <Col className='pics'>
        <Row id="pics-row-one">
            <Col id = "a1">
              <Image src = {a} className = "img-responsive" alt = "Cinque Terre" width={300} height={375}/>
            </Col>
            <Col id = "b1">
              <Image src = {b} className = "img-responsive" alt = "Cinque Terre" width={300} height={375}/>
            </Col>
            <Col id = "c1">
              <Image src = {d} className = "img-responsive" alt = "Cinque Terre" width={375} height={375}/>
            </Col>
            <Col id = "d1">
              <Image src = {h} className = "img-responsive" alt = "Cinque Terre" width={300} height={375}/>
            </Col>
        </Row>
        <Row id="pics-row-one">
            <Col id = "e1">
              <Image src = {c} className = "img-responsive" alt = "Cinque Terre" width={300} height={375}/>
            </Col>
            <Col id = "f1">
              <Image src = {e} className = "img-responsive" alt = "Cinque Terre" width={375} height={375}/>
            </Col>
            <Col id = "g1">
              <Image src = {g} className = "img-responsive" alt = "Cinque Terre" width={300} height={375}/>
            </Col>
            <Col id = "h1">
              <Image src = {f} className = "img-responsive" alt = "Cinque Terre" width={300} height={375}/>
            </Col>
        </Row>
      </Col>
    </Container>
  );
}

export default App;
