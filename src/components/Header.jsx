import React from 'react'
import './style.css'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (

        <Navbar collapseOnSelect expand="lg" className='navbar shadow' sticky='top'>
          <Container>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <h3 className=' fw-bold'>Personal Portfolio</h3>
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
            </Navbar.Collapse>
          </Container>
        </Navbar>

  )
}

export default Header