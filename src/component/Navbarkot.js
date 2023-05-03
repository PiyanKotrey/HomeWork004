import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
export default function Navbarkot() {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/about">AboutUs</Nav.Link>
            <Nav.Link href="/movies">Movies</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}
