import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Subtitle from '../shared/Subtitle';
import MansonryImagesGallery from '../components/Image-gallery/MasonryImagesGallery';
import Newsletter from '../shared/Newsletter';

const Gallery = () => {
  return (
    <>
      <section>
        <Container>
          <Row>
            <Col lg='12' className='mb-5'>
              <Subtitle subtitle={'Gallery'} />
            </Col>
            <Col lg='12'>
              <MansonryImagesGallery />
            </Col>
          </Row>
        </Container>
      </section>
      <Newsletter />
    </>
  );
};

export default Gallery;
