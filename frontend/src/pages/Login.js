import React, { useState, useContext } from 'react';
import { Form, FormGroup, Button } from 'reactstrap';
import '../styles/login.css';

import { AuthContext } from '../context/AuthContext';
import { BASE_URL } from '../utils/config';

const Login = (props) => {
  const [credentials, setCredentials] = useState({
    email: undefined,
    password: undefined,
  });

  const { dispatch } = useContext(AuthContext);

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    dispatch({ type: 'LOGIN_START' });
    try {
      const res = await fetch(`${BASE_URL}/auth/login`, {
        method: 'post',
        headers: {
          'content-type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify(credentials),
      });

      const result = await res.json();
      if (!res.ok) alert(result.message);

      console.log(result.data);

      dispatch({ type: 'LOGIN_SUCCESS', payload: result.data });
      props.onClose();
    } catch (err) {
      dispatch({ type: 'LOGIN_FAILURE', payload: err.message });
    }
  };

  return (
    <>
      <div className='login__container d-flex justify-content-between'>
        <div className='login__form'>
          <h2>Login</h2>
          <Form onSubmit={handleClick}>
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
                placeholder='Password'
                required
                id='password'
                onChange={handleChange}
              />
            </FormGroup>
            <Button className='btn secondary__btn auth__btn' type='submit'>
              Login
            </Button>
          </Form>
          <div className='d-flex align-items-center justify-content-center'>
            <p>
              Dont have an account?
              <Button
                className='secondary__btn modal__btn-reg'
                onClick={props.onShowRegister}
              >
                Create
              </Button>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
