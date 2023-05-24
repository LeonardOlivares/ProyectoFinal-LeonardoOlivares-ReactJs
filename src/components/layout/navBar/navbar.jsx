import React from 'react'
import { Nav, Navbar, Container} from 'react-bootstrap';
import { Link, Outlet } from'react-router-dom';
import CartWidget from '../../CartWidget/cartWidget';

const NavBarPrincipal = () => {
  return (
    <>
    <Navbar className="NavBg" collapseOnSelect expand="lg" bg="dark">
      <Container>
        <Navbar.Brand as={Link} to="/ ">Logo E-commerce</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/nosotros">Nosotros</Nav.Link>
            <Nav.Link as={Link} to="/tienda">Tienda</Nav.Link>
            <Nav.Link as={Link} to="/contacto">Contacto</Nav.Link>            
          </Nav>
          <Nav>
            <Nav.Link as={Link} to="/cart">  <CartWidget/> </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  
    <section>
        <Outlet></Outlet>
    </section>
    </>
  )
}

export { NavBarPrincipal }
