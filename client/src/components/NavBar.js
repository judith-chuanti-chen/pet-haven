import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';

const NavBar = () => {
    //Todo: 
    // change href to correct routes
    return(
        <>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#home">Pet Haven</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="./">Home</Nav.Link>
                    <Nav.Link href="#my-account">MyAccount</Nav.Link> 
                </Nav>
                <Nav>
                    <Nav.Link href="sign-up">Sign Up</Nav.Link>
                    <Nav.Link href="log-in">Log In</Nav.Link>
                </Nav>
            </Navbar>
        </>
    );
};

export default NavBar;

