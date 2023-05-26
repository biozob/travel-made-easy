import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { useState } from 'react';
import Login from '../../pages/Login';
import Register from '../../pages/Register';
import Modal from '../UI/Modal';

const Layout = () => {
  const [authIsShown, setAuthIsShown] = useState(false);
  const [contentType, setContentType] = useState(null);

  const showRegister = () => showAuthHandler('register');
  const showLogin = () => showAuthHandler('login');

  const showAuthHandler = (type) => {
    setAuthIsShown(true);

    if (type === 'login') {
      setContentType(
        <Login onShowRegister={showRegister} onClose={hideAuthHandler} />
      );
    }
    if (type === 'register') {
      setContentType(
        <Register onShowLogin={showLogin} onClose={hideAuthHandler} />
      );
    }
  };

  const hideAuthHandler = () => {
    setAuthIsShown(false);
    setContentType(null);
  };

  return (
    <>
      {authIsShown && <Modal onClose={hideAuthHandler}>{contentType}</Modal>}
      <Header onShowLogin={showLogin} onShowRegister={showRegister} />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
