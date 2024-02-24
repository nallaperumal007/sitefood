import './App.css';
import { Link, Routes, Route } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home/Home';

function App() {
  return (
    <div>
      <Navbar expand="lg" className='fixed-top bg-success shadow'>
        <Container>
          <Navbar.Brand className='mr-5'>
            <Link to="/" className='navbar-brand font-bold fw-semibold text-uppercase text-light'>
              Food
            </Link>
          </Navbar.Brand>
        </Container>
      </Navbar>

      <Routes>
        <Route path='/' element={<Home />} />
        {/* Add more routes as needed */}
      </Routes>
    </div>
  );
}

export default App;
