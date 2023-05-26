import React from 'react';
import '../styles/home.css';
import { Container, Row, Col } from 'reactstrap';
import heroVideo from '../assets/images/hero-video.mp4';
import Subtitle from '../shared/Subtitle';

import SearchBar from '../shared/SearchBar';
import FeaturedTourList from '../components/Featured-tours/FeaturedTourList';
import Testimonials from '../components/Testimonial/Testimonials';
import Newsletter from '../shared/Newsletter';

const Home = () => {
  return (
    <>
      <section className='section__live'>
        <video autoPlay muted loop src={heroVideo} alt='' id='liveVideo' />
        <div className='section__live-content'>
          <div className='hero__subtitle d-flex align-items-center justify-content-center'>
            <Subtitle subtitle={'Travel Made Easy'} />
          </div>
          <h1>
            Book your <span className='highlight'> dream</span> vacation
          </h1>
        </div>
      </section>
      <section>
        <Container>
          <Row>
            <SearchBar />
          </Row>
        </Container>
      </section>
      <section>
        <Container>
          <Row>
            <Col lg='12' className='mb-5'>
              <Subtitle subtitle={'Explore'} />
            </Col>
            <FeaturedTourList />
          </Row>
        </Container>
      </section>
      <section>
        <Container>
          <Row>
            <Col lg='12'>
              <Subtitle subtitle={'Fans Love'} />
            </Col>
            <Col lg='12'>
              <Testimonials />
            </Col>
          </Row>
        </Container>
      </section>
      <section>
        <Container>
          <Row>
            <Subtitle subtitle={'Our newsletter'} />
          </Row>
        </Container>
      </section>
      <Newsletter />
    </>
  );
};

export default Home;
