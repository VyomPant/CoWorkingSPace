import React from 'react'
import { Navbar, Container, Nav, Button } from 'react-bootstrap'
function Navbar1() {
  return (
    <>
      <Navbar bg="light" variant="light">
        <Container>
          <Nav className="d-flex justify-content-start">
            <h1 >CWS</h1>
          </Nav>
          {/* <Navbar.Brand href="#home">Navbar</Navbar.Brand> */}
          <Nav className="justify-content-end ">
            <Nav.Link href="#home">Explore</Nav.Link>
            <Nav.Link href="#features">About</Nav.Link>
            <Button href="#" variant="primary">Login</Button>
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}

export default Navbar1