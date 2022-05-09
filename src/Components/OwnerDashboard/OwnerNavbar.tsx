import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Owner } from "../../Interface";
import "./OwnerDashboard.css"

const OnwerNavbar = ({owner, heading} : {owner : Owner | undefined, heading : string}) => {
    return(
        <Navbar expand="lg" className="navbarOwner">
            <Container>
                <span style={{fontSize: "24px", marginLeft: "50px"}}>{heading}</span>
          <Nav className="navbar-right">
            {owner === undefined ?
              <Link to="/ownerLogin"><Button className="right-navbar-link p-2" style={{ backgroundColor: "white" }}>Login</Button></Link>
              :
              <Link to="/" style={{textDecoration: "none"}}>
              <div className="right-navbar-link">
                <span className="loggedIn"><i className="bi bi-person-circle" style={{fontSize: "34px", marginRight: "10px"}}></i> {owner.name}</span>
              </div>
              </Link>
            }
          </Nav>
            </Container>
        </Navbar>
    )
}

export default OnwerNavbar;