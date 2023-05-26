import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from 'react-router-dom';

import './App.css';
import Home from './pages/Home';
import Tours from './pages/Tours';
import TourDetails from './pages/TourDetails';
import Login from './pages/Login';
import Register from './pages/Register';
import SearchResultList from './pages/SearchResultList';
import Layout from './components/Layout/Layout';
import ThankYou from './pages/ThankYou';
import Gallery from './pages/Gallery';
import About from './pages/About';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { path: '/', element: <Navigate to='home' /> },
      { path: 'home', element: <Home /> },
      { path: 'tours', element: <Tours /> },
      { path: 'tours/:id', element: <TourDetails /> },
      { path: 'login', element: <Login /> },
      { path: 'register', element: <Register /> },
      { path: 'thank-you', element: <ThankYou /> },
      { path: 'tours/search', element: <SearchResultList /> },
      { path: 'gallery', element: <Gallery /> },
      { path: 'about', element: <About /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
