
import React from 'react';
import { useContext } from 'react';
import { Image } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaUser } from 'react-icons/fa';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

import './Header.css'

const Header = () => {

  const {user, logOut} = useContext(AuthContext);


//  Log Out Handler-----
  const handleLogOut = () => {
    logOut()
    .then(result => {})
    .catch(error => console.log('Errorrrrrr', error))
  }
    return (
    <div>
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#" className='fs-2 fw-bold'> <Link to='/' className='text-decoration-none text-success'>Tech Me <span className='text-danger'>Web</span> </Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-4 my-lg-0 ms-lg-4"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <NavLink to='/' className='text-decoration-none fs-4 me-4'>Home</NavLink>
            <NavLink to='/courses' className='text-decoration-none fs-4 me-4 ms-lg-4'>Course</NavLink>
            <NavLink to='' className='text-decoration-none fs-4 me-4 ms-lg-4'>FAQ</NavLink>
            <NavLink to='/blog' className='text-decoration-none fs-4 me-4 ms-lg-4'>Blog</NavLink>
           
          </Nav>
          <Form className="d-flex">
         

            {
              user?.uid ? 
              <>
             <p className='mt-2 ms-2'>{user?.displayName}</p>
             <Link to=''><Button onClick={handleLogOut} variant="outline-danger" className='ms-sm-0 ms-lg-2'>Log Out</Button></Link>

              </>
              : 
              <>
            <Link to='/signin'><Button variant="outline-success">Sign-In</Button></Link>
           <Link to='/register'><Button variant="outline-info" className='ms-2'>Register</Button></Link>
              </>

            }

          

           {user?.photoURL ?
          
           <Image style={{height: '38px'}} roundedCircle src={user?.photoURL}></Image>
           : 
           
          <FaUser className='ms-4 mt-2' style={{fontSize: '25px'}}></FaUser>
           
          }
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
        
    );
};

export default Header;