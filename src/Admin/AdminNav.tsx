import React from 'react'
import './AdminNav.css'
import { Button, Container, Form, FormControl, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function AdminNav() {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container fluid>
          <Navbar.Brand className='dash ' href="#">Admin Dashboard</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Form className=" admin d-flex " >
              <FormControl
                type="search"
                placeholder="Search"
                className="me-1"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>

          </Navbar.Collapse>
        </Container>
      </Navbar>


    </div>
  )
}

export default AdminNav