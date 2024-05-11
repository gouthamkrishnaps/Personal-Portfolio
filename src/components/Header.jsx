import React from 'react'
import './style.css'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Offcanvas } from 'react-bootstrap';

function Header() {
  return (

        <Navbar collapseOnSelect expand="lg" className='navbar shadow' style={{backgroundColor:"black"}} sticky='top' variant="light">
          <Container>
            <h3 className=' fw-bold'></h3>
            <Navbar.Toggle aria-controls="basic-navbar-nav">
              {/* Replace your icon here */}
              <i class="fi fi-sr-layout-fluid offcanvas-icon" style={{color:"white"}}></i>
            </Navbar.Toggle>
            <Navbar.Offcanvas
              id='offcanvasNavbar-expand-lg'
              aria-labelledby='offcanvasNavbarLabel-expand-lg' data-bs-theme="dark"
              placement="end"  style={{backgroundColor:"black"}}
            >
              <Offcanvas.Header closeButton>

              </Offcanvas.Header>
              <Offcanvas.Body>
              <Nav className="m-auto gap-5 nav-items">
                <a href='#home'  className='nav-options'>Home</a>
                <a href='#about' className='nav-options'>About</a>
                <a href='#skills' className='nav-options'>Technologies</a>
                <a href='#services' className='nav-options'>Services</a>
                <a href='#projects' className='nav-options'>Projects</a>
                <a href='#features' className='nav-options'>Experience</a>
                
                
              </Nav>
              <Nav>
                <div><a href='#contact' className='btn btn-outline-light rounded-pill px-5'>Catch me</a></div>
              </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
            {/* <Navbar.Toggle aria-controls="responsive-navbar-nav" variant='light'/>
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="m-auto gap-5 nav-items">
                <a href='#home'  className='nav-options fs-6'>Home</a>
                <a href='#about' className='nav-options'>About</a>
                <a href='#projects' className='nav-options'>Projects</a>
                <a href='#skills' className='nav-options'>Technologies</a>
                <a href='#services' className='nav-options'>Services</a>
              </Nav>
              <Nav>
                <a href='#contact' className='btn btn-outline-light rounded-pill'>Catch me</a>
              </Nav>
            </Navbar.Collapse> */}
          </Container>
        </Navbar> 
        
        
  
  )
}

export default Header