import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import imgLogo from "../image/logo3.png"
import "./NavbarHeader.css"

function CollapsibleExample() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
    <Container>
      <Navbar.Brand as={Link} to="/" className='logo'><img  src={imgLogo} alt=".."/></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav"/>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto ">
          <Nav.Link as={Link} to="/matches">Matches</Nav.Link>
          <Nav.Link as={Link} to="/champions-league">Champions League</Nav.Link>
          <NavDropdown title="Leagues" id="basic-nav-dropdown">
            <NavDropdown.Item as={Link} to="/la-liga" >Spain La Liga</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/premier-league" > Premier League</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/serie-a">Serie A</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/bundesliga">Bundesliga</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/ligue1">Ligue 1</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/primeira-liga">Primeira Liga</NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Nav>
          <Nav.Link href="#contact">Contact</Nav.Link>
        
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  
  );
}

export default CollapsibleExample;