import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

const NavBar = () => {
    return ( 
        <>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#">
                Piplantri
                </Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                </Nav>
                <Nav className="ml-auto">
                    <Nav.Link href="#features">Log In</Nav.Link>
                    <Nav.Link href="#pricing">Sign Up</Nav.Link>
                </Nav>
            </Navbar>
        </>
     );
}
 
export default NavBar;