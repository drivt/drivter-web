import React, { useRef } from 'react'
import { Container } from 'reactstrap'
import Logo from "../../assets/logo.png"
import './header.css';


const navLinks  = [
    {
        display: 'Home',
        url: '/',
    },
    {
        display: 'FAQs',
        url: '#',
    },
]

const navLogin  = [
    {
        display: 'Login',
        url: 'login',
    },
]

const navSignup  = [
    {
        display: 'Sign Up',
        url: 'signup',
    },
]


const Header = () => {

    const menuRef = useRef();
    const menuToggle = () => menuRef.current.classList.toggle('active_menu');


    return (
        <div className='fixed top-0 left-0 right-0 header shadow-md z-50'> 
            <Container>
            <div className="navigation d-flex align-items-center justify-content-between">
                <div className="logo">
                        <img src={Logo} alt="" />
                </div>

                <div className="nav d-flex align-items-center gap-5">
                    <div className="nav__menu" ref={menuRef} onClick={menuToggle}>
                        <ul className="nav__list">
                            {navLinks.map((item, index) => (
                                <li key={index} className="nav__item">
                                    <a href={item.url}>{item.display}</a>
                                </li>
                            ))}

                            {navLogin.map((item, index) => (
                                <li key={index} className="nav__item login">
                                    <a href={item.url}>{item.display}</a>
                                </li>
                            ))}

                            {navSignup.map((item, index) => (
                                <li key={index} className="nav__item signup">
                                    <a href={item.url}>{item.display}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="mobile__menu">
                    <span>
                        <i className="ri-menu-line" onClick={menuToggle}></i>
                    </span>
                </div>
            </div>
        </Container>
        </div>
    )
}

export default Header