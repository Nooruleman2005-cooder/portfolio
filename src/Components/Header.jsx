import React from 'react'
import { Container , Navbar , Nav } from 'react-bootstrap'

const Header = () => {
  return (
       <Navbar expand="lg" fixed="top" style={{background: 'red' }}>
      <Container>
        <Navbar.Brand href="#home" className="text-white fw-bold" style={{fontFamily:"Cambria, Cochin, Georgia, Times, 'Times New Roman', serif "}}>Personal-Portfolio</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" >
          <Nav className="mx-auto text-center " style={{fontFamily:"Cambria, Cochin, Georgia, Times, 'Times New Roman', serif "}}>
            <Nav.Link className='text-white' href="#home">Home</Nav.Link>
            <Nav.Link className='text-white'href="#about">About Me</Nav.Link>
            <Nav.Link className='text-white'href="#projects">Projects</Nav.Link>
            <Nav.Link className='text-white'href="#experience">Experiance</Nav.Link>
            <Nav.Link className='text-white'href="#contact">Contact Me</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header
