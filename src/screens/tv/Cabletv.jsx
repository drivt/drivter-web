import React, { useRef } from 'react'
import { Container, Row, Col } from 'reactstrap';
import Logo from "../../assets/logo.png"
import Vector from '../../assets/vect.jpg';
import Footer from '../../components/footer/Footer';
import Icon1 from '../../assets/left-arrow.png';
import Dstv from '../../assets/dstv.png';
import { Link } from 'react-router-dom';
import Gotv from '../../assets/gotv.webp';
import Star from '../../assets/star.jpeg';
import Show from '../../assets/show.webp';
import {  FormGroup, Label, Input, FormText } from 'reactstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './cabletv.css'



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





const Cabletv = () => {

    const menuRef = useRef();
    const menuToggle = () => menuRef.current.classList.toggle('active_menu');

    return (
      <div className=' top-0 left-0 right-0 header shadow-md z-50'> 
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
                      <div className="airtime-body">
                      <Link to='/hello'><button><div className="airt-icon"><img src={Icon1} alt="" /></div></button></Link>
                      <h1 className='airtime-header text-3xl font-bold text-center'>Cable Tv</h1>
                      <h6 className='text-center'>Paying bills doesn't have to be a hassle. Let's help you pay them swiftly.</h6>
                      <h6 className='text-center'>Select your preferred cable network:</h6>
  
                      <div className="airtimes">
                          <button> <div className="networks"><img src={Dstv} alt="" /></div></button>
                          <button> <div className="networks"><img src={Gotv} alt="" /></div></button>
                          <button><div className="networks"><img src={Star} alt="" /></div></button>
                          <button><div className="networks"><img src={Show} alt="" /></div></button>
                      </div>
  
  
                      <Form noValidate className='p-5'>

                      <Form.Group>
                      <Form.Control type='tel' placeholder="Recipient's phone number" className='mb-4 Ph' required/>
                      <Form.Control.Feedback type='invalid'>
                          Provide valid Number
                      </Form.Control.Feedback>
                      </Form.Group>

                      <FormGroup>
                      <Input type="select" name="select" id="exampleSelect" className='mb-4 Ph'>
                        <option>Select cable Tv plan: </option>
                        <option>Dstv</option>
                        <option>Gotv</option>
                        <option>StarTimes</option>
                        <option>Showmax</option>
                      </Input>
                    </FormGroup>
  
                    <Form.Group>
                      <Form.Control type='tel' placeholder="IUC number" className='mb-4 Ph' required/>
                      <Form.Control.Feedback type='invalid'>
                          Provide valid Number
                      </Form.Control.Feedback>
                      </Form.Group>
  
                      <Form.Group>
                      <Form.Control type='tel' placeholder='Amount' className='mb-4 Ph' required/>
                      <Form.Control.Feedback type='invalid'>
                          Enter valid Amount
                      </Form.Control.Feedback>
                      </Form.Group>
      
                    <div className="btn"> <Button variant='primary' type='submit' className='submit'>Proceed</Button></div>
                    
                  </Form>
  
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

export default Cabletv