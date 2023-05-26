import React, { useState, useContext } from 'react';
import { Form, FormGroup, Button } from 'reactstrap';
import { useNavigate } from 'react-router-dom';
import '../styles/login.css';

import { AuthContext } from '../context/AuthContext';
import { BASE_URL } from '../utils/config';
import Modal from '../components/UI/Modal';

const Register = (props) => {
  const [credentials, setCredentials] = useState({
    userName: undefined,
    email: undefined,
    password: undefined,
  });

  const { dispatch } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(`${BASE_URL}/auth/register`, {
        method: 'post',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify(credentials),
      });
      const result = await res.json();

      if (!res.ok) alert(result.message);

      dispatch({ type: 'REGISTER_SUCCESS' });
      navigate('/login');
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <>
      <div className='login__container d-flex justify-content-between'>
        <div className='login__form'>
          <h2>Register</h2>
          <Form onSubmit={handleClick}>
            <FormGroup>
              <input
                type='text'
                placeholder='Username'
                required
                id='username'
                onChange={handleChange}
              />
            </FormGroup>
            <FormGroup>
              <input
                type='email'
                placeholder='Email'
                required
                id='email'
                onChange={handleChange}
              />
            </FormGroup>
            <FormGroup>
              <input
                type='password'
                placeholder='password'
                required
                id='password'
                onChange={handleChange}
              />
            </FormGroup>
            <Button className='btn secondary__btn auth__btn' type='submit'>
              Create Account
            </Button>
          </Form>
          <div className='d-flex align-items-center justify-content-center'>
            <p>
              Already have an account?{' '}
              <Button
                className='secondary__btn modal__btn-reg'
                onClick={props.onShowLogin}
              >
                Login
              </Button>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
