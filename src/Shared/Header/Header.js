
import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, NavLink } from 'react-router-dom';

import './Header.css'

const Header = () => {
    return (
    <div>
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#" className='fs-2 fw-bold'>Tech Me <span className='text-danger'>Web</span></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-4 my-lg-0 ms-lg-4"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <NavLink to='/' className='text-decoration-none fs-4 me-4'>Home</NavLink>
            <NavLink to='' className='text-decoration-none fs-4 me-4 ms-lg-4'>Course</NavLink>
            <NavLink to='' className='text-decoration-none fs-4 me-4 ms-lg-4'>FAQ</NavLink>
            <NavLink to='' className='text-decoration-none fs-4 me-4 ms-lg-4'>Blog</NavLink>
           
          </Nav>
          <Form className="d-flex">
           <Link to='/signin'><Button variant="outline-success">Sign-In</Button></Link>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
        
    );
};

export default Header;