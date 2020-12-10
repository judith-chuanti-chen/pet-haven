import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavLink from 'react-bootstrap/NavLink';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

const NavBar = () => {
    //Todo: 
    // change href to correct routes
    return(
        <>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="/home">Pet Haven</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link><NavLink to="./" />Home</Nav.Link>
                    <NavLink to="#my-account">MyAccount</NavLink> 
                </Nav>
                <Nav>
                <Nav.Link><NavLink to="/sign-up">Sign Up</NavLink></Nav.Link>
                    <NavLink to="/log-in">Log In</NavLink>
                </Nav>
            </Navbar>
        </>
    );
};

export default NavBar;

