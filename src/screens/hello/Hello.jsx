import React, { useRef } from 'react'
import { Container, Row, Col } from 'reactstrap';
import Vector from '../../assets/vect.jpg';
import Icon1 from '../../assets/smartphone.png';
import Icon2 from '../../assets/flash.png';
import Icon3 from '../../assets/tv.png';
import Icon4 from '../../assets/betting.png';
import Footer from '../../components/footer/Footer';
import './hello.css'



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

const Hello = () => {


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


                    <Col lg='6' md='6' className=''>
                        <div className="boxses">

                            <button>
                                <div className="box">
                                    <div className="icon">
                                        <img src={Icon1} alt="" />
                                    </div>
                                <div className="box-text">Airtime</div>
                                </div>
                            </button>

                            <button>
                                <div className="box">
                                    <div className="icon"><img src={Icon2} alt="" /></div>
                                <div className="box-text">Electricity</div>
                                </div>
                            </button>

                            <button>
                                <div className="box">
                                    <div className="icon"><img src={Icon3} alt="" /></div>
                                <div className="box-text">Cable Tv</div>
                                </div>
                            </button>

                            <button>
                                <div className="box">
                                    <div className="icon"><img src={Icon4} alt="" /></div>
                                <div className="box-text">Betting</div>
                                </div>
                            </button>
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

export default Hello