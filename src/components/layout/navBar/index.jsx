import React from 'react'
import { Nav, NavLink, Navbar, Container, NavDropdown} from 'react-bootstrap';
import { Link, Outlet } from'react-router-dom';
import CartWidget from '../../CartWidget';
import './styles.css';

const NavBarPrincipal = () => {
  return (
    <>
    <Navbar className="NavBg" collapseOnSelect expand="lg" variant="dark">
      <Container>
        <Navbar.Brand as={Link} to="/home ">Logo en Imagen</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <NavLink as={Link} to="/nosotros">Nosotros</NavLink>
            {/* <NavLink as={Link} to="/tienda">Tienda</NavLink> */}
            <NavDropdown title="Tienda" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/tienda/">Tienda Completa</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/categoria/bicicletas">Bicicletas</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/categoria/indumentaria">Indumentaria</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/categoria/accesorios">Accesorios</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/categoria/seguridad">Seguridad</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/categoria/e-move">E-Move</NavDropdown.Item>
            </NavDropdown>            
            <NavLink as={Link} to="/contacto">Contacto</NavLink>
          </Nav>
          <Nav>
            <NavLink as={Link} to="/cart">  <CartWidget/> </NavLink>
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
