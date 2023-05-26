import React from 'react';
import './CommonSection.css';
import { Container, Row, Col } from 'reactstrap';

const CommonSection = ({ title }) => {
  return (
    <section className='common__section'>
      <Container>
        <Row>
          <Col lg='12'>
            <h2 className='section__subtitle'>{title}</h2>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default CommonSection;
