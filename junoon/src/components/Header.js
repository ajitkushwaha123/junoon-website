import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function Header() {
  return (
    <Navbar className="header" expand="lg">
      <Container>
        <Navbar.Brand href="#home">
          <img
            style={{ width: "200px" }}
            src="images/junoon-white.png"
            alt=""
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto nav-links">
            <Nav.Link className="nav-link" href="#home">Home</Nav.Link>
            <Nav.Link className="nav-link" href="#home">instagram</Nav.Link>
            <Nav.Link className="nav-link" href="#home">Collections</Nav.Link>
            <Nav.Link className="nav-link" href="#home">Wallpapers</Nav.Link>
            <Nav.Link className="nav-link" href="#home">Timeline</Nav.Link>
            <Nav.Link className="nav-link" href="#home">About</Nav.Link>
            <Nav.Link className="nav-link" href="#home">Contact</Nav.Link>
            <Nav.Link className="nav-icon" href="#home">
              <i class="uil uil-instagram"></i>
            </Nav.Link>
            <Nav.Link className="" href="#home">
              <i class="uil uil-facebook"></i>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
