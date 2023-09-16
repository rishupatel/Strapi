import React from 'react'
import { Link } from 'react-router-dom';
import { Nav,NavItem } from 'reactstrap';

const NavbarComponent = () => {
  return (
    <div>
               <Nav>
                <NavItem>
                    <Link  to="/" className='nav-link'>
                      Home
                    </Link>
                </NavItem>
                <NavItem>
                    <Link to="/login" className='nav-link'>
                       Login
                    </Link>
                </NavItem>
                <NavItem>
                    <Link to="/contact" className='nav-link'>
                       Contact
                    </Link>
                </NavItem>
                <NavItem>
                    <Link to="/register" className='nav-link'>
                       Register
                    </Link>
                </NavItem>
               
            </Nav>
    </div>
  )
}

export default NavbarComponent
