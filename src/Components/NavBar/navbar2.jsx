import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

import './navbar.css'

// this navbar is for login and signup pages
function NavBar2() {


  return (
    <Navbar expand="lg" className="bg-body-tertiary" id="bgbody">
      <Container>
        <Navbar.Brand href="/" className='amazen'>Amazen</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar2;