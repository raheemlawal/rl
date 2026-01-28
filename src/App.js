import './App.css';
import { useState } from 'react';
import a from './photos/miami-jm.JPG';
import b from './photos/desert-pink.jpeg';
import c from './photos/miami-rarity.JPG';
import d from './photos/vrc-jump.jpg';
import e from './photos/on-boardwalk.jpg'
import f from './photos/lonelyheartsthrow.JPG'
import i from './photos/hokafromback.JPG'
import k from './photos/hokarunnoface.JPG'
import l from './photos/hokaside.JPG'
import m from './photos/Cburkesmith-VeniceBeach-11-2025-16.jpg'
import n from './photos/Cburkesmith-VeniceBeach-11-2025-31.jpg'
import o from './photos/Cburkesmith-VeniceBeach-11-2025-62.jpg'
import p from './photos/Cburkesmith-VeniceBeach-11-2025-67.jpg'
import q from './photos/Cburkesmith-VeniceBeach-11-2025-75.jpg'
import r from './photos/KRE_8182.jpg'
import s from './photos/KRE_8203.jpg'
import t from './photos/KRE_8332.jpg'

import {Container, Row, Image, Col, Modal } from 'react-bootstrap';


function App() {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (imageSrc) => {
    setSelectedImage(imageSrc);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  return (
    <Container className='App'>
      <Row id='top-row'>
        <h1 className = 'my-name'>RAHEEM LAWAL</h1>
        <h6 className = 'my-name'>LOS ANGELES</h6>
        <h6 className = 'my-name'>INQUIRIES: HEY@ITSRAHEEM.COM</h6>
        <h6 className = 'my-name'>FEATURES: ON/CLASSPASS/HOKA</h6>
      </Row>
      <Row className='pics'>
        <Col className="column-one">
          <Image src = {s} className = "img-responsive column-one-img" alt = "Featured" onClick={() => handleImageClick(b)} style={{cursor: 'pointer'}}/>
          <Image src = {l} className = "img-responsive column-one-img" alt = "Featured" onClick={() => handleImageClick(l)} style={{cursor: 'pointer'}}/>
        </Col>
        <Col className="column-two">
          <Row className="column-two-grid">
            <Col className="grid-item">
              <Image src = {o} className = "img-responsive grid-img" alt = "Portfolio" onClick={() => handleImageClick(i)} style={{cursor: 'pointer'}}/>
            </Col>
            <Col className="grid-item">
              <Image src = {m} className = "img-responsive grid-img" alt = "Portfolio" onClick={() => handleImageClick(m)} style={{cursor: 'pointer'}}/>
            </Col>
          </Row>
          <Row className="column-two-grid">
            <Col className="grid-item">
              <Image src = {b} className = "img-responsive grid-img" alt = "Portfolio" onClick={() => handleImageClick(e)} style={{cursor: 'pointer'}}/>
            </Col>
            <Col className="grid-item">
              <Image src = {a} className = "img-responsive grid-img" alt = "Portfolio" onClick={() => handleImageClick(a)} style={{cursor: 'pointer'}}/>
            </Col>
          </Row>
        </Col>
        <Col className="column-three">
          <Row className="column-three-grid">
            <Col className="small-grid-item">
              <Image src = {d} className = "img-responsive small-grid-img" alt = "Portfolio" onClick={() => handleImageClick(d)} style={{cursor: 'pointer'}}/>
            </Col>
            <Col className="small-grid-item">
              <Image src = {c} className = "img-responsive small-grid-img" alt = "Portfolio" onClick={() => handleImageClick(c)} style={{cursor: 'pointer'}}/>
            </Col>
          </Row>
          <Row className="column-three-grid">
            <Col className="small-grid-item">
              <Image src = {f} className = "img-responsive small-grid-img" alt = "Portfolio" onClick={() => handleImageClick(f)} style={{cursor: 'pointer'}}/>
            </Col>
            <Col className="small-grid-item">
              <Image src = {k} className = "img-responsive small-grid-img" alt = "Portfolio" onClick={() => handleImageClick(k)} style={{cursor: 'pointer'}}/>
            </Col>
          </Row>
          <Row className="column-three-grid">
            <Col className="small-grid-item">
              <Image src = {n} className = "img-responsive small-grid-img" alt = "Portfolio" onClick={() => handleImageClick(n)} style={{cursor: 'pointer'}}/>
            </Col>
            <Col className="small-grid-item">
              <Image src = {i} className = "img-responsive small-grid-img" alt = "Portfolio" onClick={() => handleImageClick(o)} style={{cursor: 'pointer'}}/>
            </Col>
            <Col className="small-grid-item">
              <Image src = {p} className = "img-responsive small-grid-img" alt = "Portfolio" onClick={() => handleImageClick(p)} style={{cursor: 'pointer'}}/>
            </Col>
          </Row>
          <Row className="column-three-grid">
            <Col className="small-grid-item">
              <Image src = {q} className = "img-responsive small-grid-img" alt = "Portfolio" onClick={() => handleImageClick(q)} style={{cursor: 'pointer'}}/>
            </Col>
            <Col className="small-grid-item">
              <Image src = {r} className = "img-responsive small-grid-img" alt = "Portfolio" onClick={() => handleImageClick(r)} style={{cursor: 'pointer'}}/>
            </Col>
            <Col className="small-grid-item">
              <Image src = {e} className = "img-responsive small-grid-img" alt = "Portfolio" onClick={() => handleImageClick(s)} style={{cursor: 'pointer'}}/>
            </Col>
          </Row>
          <Row className="column-three-grid">
            <Col className="small-grid-item">
              <Image src = {t} className = "img-responsive small-grid-img" alt = "Portfolio" onClick={() => handleImageClick(t)} style={{cursor: 'pointer'}}/>
            </Col>
          </Row>
        </Col>
      </Row>

      <Modal show={selectedImage !== null} onHide={handleCloseModal} centered size="lg">
        <Modal.Body style={{padding: 0, backgroundColor: 'black'}}>
          {selectedImage && (
            <Image src={selectedImage} fluid style={{width: '100%', height: 'auto'}} />
          )}
        </Modal.Body>
      </Modal>
    </Container>
  );
}

export default App;
