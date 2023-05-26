import React from 'react';
import './Newsletter.css';

import { Container, Row } from 'reactstrap';

const Newsletter = () => {
  return (
    <section>
      <Container>
        <Row>
          <div className='newsletter newsletter__content'>
            <h2>Sign up to recieve best vacation offers!</h2>
            <div className='newsletter__input'>
              <input type='email' placeholder='Enter your emeil' />
              <button className='btn newsletter__btn'>Subscribe</button>
            </div>
          </div>
        </Row>
      </Container>
    </section>
  );
};

export default Newsletter;
