import { Navbar, Nav, Container } from "react-bootstrap"
import { Link } from "react-router-dom"

const MyNavbar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
      <Container>
        <Navbar.Brand as={Link} to="/">
          💼 Job Finder
        </Navbar.Brand>
        <Nav className="ms-auto">
          <Nav.Link as={Link} to="/">
            Home
          </Nav.Link>
          <Nav.Link as={Link} to="/favourites">
            ⭐ Preferiti
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  )
}

export default MyNavbar
