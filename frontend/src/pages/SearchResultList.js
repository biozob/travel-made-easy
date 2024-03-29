import React, { useState } from 'react';
import CommonSection from '../shared/CommonSection';
import { Container, Row, Col } from 'reactstrap';
import { useLocation } from 'react-router-dom';
import TourCard from './../shared/TourCard';
import Newsletter from '../shared/Newsletter';

const SearchResultList = () => {
  const location = useLocation();
  const [data] = useState(location.state);

  return (
    <>
      <CommonSection title={'Bookings Search Results'} />
      <section>
        <Container>
          <Row>
            {!data || data.length === 0 ? (
              <h4 className='text-center'>No bookings found</h4>
            ) : (
              data?.map((tour) => (
                <Col lg='3' className='mb-4' key={tour.id}>
                  <TourCard tour={tour} />{' '}
                </Col>
              ))
            )}
          </Row>
        </Container>
      </section>
      <Newsletter />
    </>
  );
};

export default SearchResultList;
