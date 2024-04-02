import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import AuthContext from '../../Context/authContext/AuthContext';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import './navbar.css'

function NavBar() {

  const { setAuthStatus } = useContext(AuthContext);
  const Navigate = useNavigate();

  // called when logout button is clicked
  function logOutClick() {
    setAuthStatus("False")
    Navigate("/login")
  }

  // called when myOrderClick
  function myOrderClick() {
    Navigate("/myorders")
  }

  return (
    // a navbar imported from bootstrap
    <Navbar expand="lg" className="bg-body-tertiary" id="bgbody">
      <Container>
        <Navbar.Brand href="/" className='amazen'>Amazen</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link onClick={myOrderClick} id='myOrder'>My Orders</Nav.Link>
            <Nav.Link onClick={logOutClick} id='logOut'>Log Out</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;