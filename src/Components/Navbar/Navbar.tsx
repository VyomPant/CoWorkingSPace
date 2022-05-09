import React from 'react'
import { Navbar, Container, Nav, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { User } from '../../Interface'
import './Navbar.css'
function Navbar1({ user }: { user: User | undefined }) {
  return (
    <>
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand>
            <Link to="/">
              <img src='/Images/LogoRes.png' className='logoImg' />
            </Link>
          </Navbar.Brand>
          <Nav className="navbar-right">
            <div className="right-navbar-link">
              <Link to="/spacelist" style={{ textDecoration: 'none' }}><li className='navlink'>Explore</li></Link>
            </div>
            <div className="right-navbar-link">
              <Link to="/about" style={{ textDecoration: 'none' }}><li className='navlink'>About</li></Link>
            </div>
            {user === undefined ?
              <Link to="/login"><Button className="right-navbar-link p-2" style={{ backgroundColor: "#005691" }}>Login</Button></Link>
              :
              <div className="right-navbar-link" style={{ color: "#005691" }}>
                <Nav.Link >{user.name}</Nav.Link>
              </div>
            }
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}

export default Navbar1