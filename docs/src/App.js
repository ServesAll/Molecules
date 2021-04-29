import React from 'react';
import './App.css';
import {ThemeWrapper} from '@servesall/atoms';
import { Container, Row, Col } from 'react-grid-system';
import {
  BrowserRouter as Router,
} from "react-router-dom";
import Nav from './Nav';
import Body from './Body';


function App() {
  return (
      <ThemeWrapper>
        <Router>
          <div className="App">
            <Container>
            <Row className="Row">
              <Col sm={3}>
                <Nav />
              </Col>
              <Col sm={9}>
                <Body />
              </Col>
            </Row>
            </Container>
          </div>
        </Router>
      </ThemeWrapper>
  );
}

export default App;
