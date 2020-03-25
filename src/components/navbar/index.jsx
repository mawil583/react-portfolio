import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
// import Resume from '../../assets/resume_full-stack.pdf'

const NavBar = (props) => {
    return (
        // in order for collapseOnSelect to work, all <Nav.Link>'s need to have an href attribute
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand href="#home">Michael Williams</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav  className="mr-auto">

                </Nav>
                <Nav  className="ml-auto justify-content-end">
                   
                    <Nav.Link href='#' onClick={props.makeActive} className="ml-auto navLink" as={Link} to="/">Home</Nav.Link>
                    <Nav.Link href='#' onClick={props.makeActive} className="ml-auto navLink" as={Link} to="/Portfolio">Portfolio</Nav.Link>
                    <Nav.Link onClick={props.makeActive} className="ml-auto navLink" target="_blank" href="https://drive.google.com/open?id=1whG6WH0AgOyOM79xBv_nvpCgrFtFx-ic">Resume</Nav.Link>
                    <Nav.Link href='#' onClick={props.makeActive} className="ml-auto navLink" as={Link} to="/contact">Contact</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};
export default NavBar;