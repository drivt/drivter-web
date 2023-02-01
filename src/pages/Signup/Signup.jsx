import React,{useState} from 'react'
import { Container, Row, Col } from 'reactstrap';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import Spinner from 'react-bootstrap/Spinner';
import Vector from '../../assets/Hand.jpg';
import './signup.css'

const Signup = () => {
  return (
    <section >
            <Container>
                <Row>
                    <Col>
                        <div className="d-flex justify-between main">
                    <div className="img">
                        <img src={Vector} className='w-100  hero__image ' alt="" />
                    </div>
                    <div className="sign-body">
                    <div className='sign-main mt-24'>
                    <h1 className='sign-header text-3xl font-bold text-center'>Welcome Onboard !<br />Let's get you started!</h1>
                    <div className='mt-2 flex items-center justify-center'>
                    <Form noValidate className='p-5'>
            
                        <Form.Group controlId='formBasicEmail'>
                        <Form.Control type='text' placeholder='Phone number' className='mb-4 Ph' required/>
                        <Form.Control.Feedback type='invalid'>
                            Please provide a valid Phone number.
                        </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group controlId='formBasicEmail'>
                        <Form.Control type='email' placeholder='Email Address' className='mb-4 Ph' required/>
                        <Form.Control.Feedback type='invalid'>
                            Please provide a valid email.
                        </Form.Control.Feedback>
                        </Form.Group>
            
                        <Form.Group controlId='formBasicPassword'>
                        <Form.Control type='password' placeholder='Password' className='mb-4 Ph' required/>
                        <Form.Control.Feedback type='invalid'>
                            Please provide a valid password.
                    </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group controlId='formBasicPassword'>
                        <Form.Control type='password' placeholder='Confirm Password' className='Ph' required/>
                        <Form.Control.Feedback type='invalid'>
                            Please provide a valid password.
                    </Form.Control.Feedback>
                        </Form.Group>

                        <h4 className='forgot'><a href="#"><span>Agree to terms and condition</span></a> <input type="checkbox"/></h4>
        
                    <div className="btn"> <Button variant='primary' type='submit' className='submit'>Sign Up</Button></div>
            
                        <p className='mt-3 text-center ques'> Already have an account?
                        <Link className=' ml-1 font-bold hover:underline transition duration-200 ease-in-out sign'
                            to='/login'>Log In</Link>
                        </p>
                    </Form>
                    </div>
                </div>
                    </div>
                </div>
                    </Col>
                </Row>
            </Container>

        </section>
  )
}

export default Signup