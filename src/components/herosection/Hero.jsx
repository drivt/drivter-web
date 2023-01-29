import React from 'react'
import { Container, Row, Col } from 'reactstrap';
import Vector from '../../assets/Hand.jpg';
import './hero.css'

const Hero = () => {
    return (
        <section >
            <Container>
                <Row>
                    <Col lg='6' md='6'>
                        <div className="hero__content pt-44">
                        <h2 className='Hero__title'>Paying bills just got<br /> eaiser and quicker.</h2>
                        <p className='mb-5 hero__text'>Let's help you pay them swiftly.</p>
                        <button className='onboard-btn'>Get started</button>
                        </div>

                            
                    
                    </Col>

                    <Col lg='6' md='6' className='img'>
                        <img src={Vector} className='w-100  hero__image ' alt="" />
                    </Col>

                
                </Row>
            </Container>

        </section>
    )
}

export default Hero