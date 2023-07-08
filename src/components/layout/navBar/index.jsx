import React from 'react'
import { Nav, NavLink, Navbar, Container, Image } from 'react-bootstrap';
import { Link, Outlet } from 'react-router-dom';
import './styles.css';
import logo from './assets/logo-velopro.png'
import { CartWidget } from '../../CartWidget';
const NavBarPrincipal = () => {
  return (
    <>
      <Navbar className="NavBg" collapseOnSelect expand="lg" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to="/"><Image src={logo} className='logoNav' /></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <NavLink as={Link} to="categoria/bicicletas">Bicicletas</NavLink>
              <NavLink as={Link} to="categoria/indumentaria">Indumentaria</NavLink>
              <NavLink as={Link} to="categoria/accesorios">Accesorios</NavLink>
              <NavLink as={Link} to="categoria/seguridad">Seguridad</NavLink>
              <NavLink as={Link} to="categoria/e-move">E-Move</NavLink>
            </Nav>
            <Nav>
              <NavLink as={Link} to="/cart">  <CartWidget /> </NavLink>
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
