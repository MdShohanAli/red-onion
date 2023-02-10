import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap'
import logo from '../../images/logo2.png'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import './TopNav.css'
import { Link } from 'react-router-dom';


const TopNav = () => {

    return (
        <Navbar className='navbar small-nav' expand="lg">
            <Container>
                <Link to='/home' ><img className='mt-1' style={{ height: '40px' }} src={logo} alt="" /></Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Link >
                            <FontAwesomeIcon className='font-icon mt-3' icon={faCartShopping} />
                        </Link>
                        <Link to='/login' className='nav-item mt-2' > Login </Link>
                        <Link to='/signup' > <button className='nav-btn mt-1 ' > Sign Up </button> </Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default TopNav;