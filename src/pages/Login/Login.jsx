import React,{useState} from 'react'
import { Container, Row, Col } from 'reactstrap';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import Spinner from 'react-bootstrap/Spinner';
import Vector from '../../assets/Hand.jpg';
import './login.css'

const Login = () => {
    return (
        <section >
            <Container>
                <Row>
                    <Col>
                        <div className="d-flex justify-between main">
                    <div className="img">
                        <img src={Vector} className='w-100  hero__image ' alt="" />
                    </div>
                    <div className="login-body">
                    <div className='login-main mt-24'>
                    <h1 className='login-header text-3xl font-bold text-center'>Welcome Back ! Glad <br />to see you Again!</h1>
                    <div className='mt-11 flex items-center justify-center'>
                    <Form noValidate className='p-5'>
            
                        <Form.Group controlId='formBasicEmail'>
                        <Form.Control type='text' placeholder='Phone number or Email' className='mb-4 Ph' required/>
                        <Form.Control.Feedback type='invalid'>
                            Please provide a valid email or phone number.
                        </Form.Control.Feedback>
                        </Form.Group>
            
                        <Form.Group controlId='formBasicPassword'>
                        <Form.Control type='password' placeholder='Password' className='Ph' required/>
                        <Form.Control.Feedback type='invalid'>
                            Please provide a valid password.
                    </Form.Control.Feedback>
                        </Form.Group>

                        <h4 className='forgot'><a href="#"><span>Forgot password?</span></a></h4>
        
                    <div className="btn"> <Button variant='primary' type='submit' className='submit'>Log In</Button></div>
            
                        <p className='mt-3 text-center ques'> Don&apos;t have an account?
                        <Link className=' ml-1 font-bold hover:underline transition duration-200 ease-in-out sign'
                            to='/signup'>Sign Up</Link>
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

export default Login