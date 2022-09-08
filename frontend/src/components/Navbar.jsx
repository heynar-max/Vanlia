import React, { useState } from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { LinkContainer } from 'react-router-bootstrap';
import logo from '../style/van.png'
import {Icon } from '../style/Icons'

const NavBar = () => {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
    return (
        <Navbar 
        className='nav__container_color'
        bg="dark"
        variant="dark">
                <figure className='nav__image'>
                <LinkContainer to="/" onClick={closeMobileMenu}>
                    <Navbar.Brand><img src={logo} alt="logo"/></Navbar.Brand>
                </LinkContainer>
                </figure>
                <div className='nav__container-text'>
            <div className={click ? "nav-options active" : "nav-options"}>
            <Container className='nav__container'>
                <LinkContainer className="nav__text" to="/" onClick={closeMobileMenu}>
                    <Navbar.Brand>INICIO</Navbar.Brand>
                </LinkContainer>
                <LinkContainer className="nav__text" to="/about" onClick={closeMobileMenu}>
                    <Navbar.Brand>ABOUT</Navbar.Brand>
                </LinkContainer>
                <LinkContainer className="nav__text" to="/sobre" onClick={closeMobileMenu}>
                    <Navbar.Brand>TARIES</Navbar.Brand>
                </LinkContainer>
            </Container>
            </div>
            </div>
            <div className="mobile-menu" onClick={handleClick}>
                {click ? (
                    <Icon className="fas fa-times" />
                ) : (
                    <Icon className="fas fa-bars" />
                )}
            </div>
        </Navbar>
    )
}

export default NavBar