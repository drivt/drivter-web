import React, { useRef } from 'react'
import { Container, Row, Col } from 'reactstrap';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import Vector from '../../assets/failed.jpg';
import Vec from '../../assets/cancel.png';
import Footer from '../../components/footer/Footer';



const navLinks  = [
    {
        display: 'Home',
        url: '/hello',
    },
    {
        display: 'Transcations',
        url: '#',
    },
    {
        display: 'Account',
        url: '#',
    },
    {
        display: 'Contact Us',
        url: '#',
    },
  ]



const Failed = () => {
  const menuRef = useRef();
  const menuToggle = () => menuRef.current.classList.toggle('active_menu');

  return (
    <div className=' top-0 left-0 right-0 header shadow-md z-50'> 
            <Container>
            <div className="navigation d-flex align-items-center justify-content-between">
                <div className="logo">
                    <h2 className="d-flex align-items-center gap-1">
                        <h3><span>d</span>rivter.</h3>
                    </h2>
                </div>

                <div className="nav d-flex align-items-center gap-5">
                    <div className="nav__menu" ref={menuRef} onClick={menuToggle}>
                        <ul className="nav__list">
                            {navLinks.map((item, index) => (
                                <li key={index} className="nav__item">
                                    <a href={item.url}>{item.display}</a>
                                </li>
                            ))}

                                <div className="user d-flex align-items-center">
                                    <div className="user-details">
                                        <h6>Welcome Back!</h6>
                                        <h5>George Amanda</h5>
                                    </div>
                                    <div className="user-img">
                                        <h5>IMG</h5>
                                    </div>
                                </div>

                        </ul>
                    </div>
                </div>

                <div className="mobile__menu">
                    <span>
                        <i className="ri-menu-line" onClick={menuToggle}></i>
                    </span>
                </div>
            </div>

            <Row>
                    <Col lg='6' md='6' className='img'>
                        <img src={Vector} className='w-100  hero__image ' alt="" />
                    </Col>


                    <Col lg='6' md='6' className='airt'>
                    <div className="airtime-body success">
                    <img src={Vec} alt="" />
                    <h1 className='airtime-header text-3xl font-bold text-center'>Transcation Error!</h1>
                    <h6 className='text-center'>Your transcation was not <br />processed Successfully.</h6>
                    <Link to='/hello'><div className="btn"> <Button variant='primary' type='submit' className='submit'>Back to feed</Button></div></Link>
                    </div>
                    </Col>

                <div>
                    <Footer />
                </div>
                </Row>
        </Container>
        </div>
  )
}

export default Failed