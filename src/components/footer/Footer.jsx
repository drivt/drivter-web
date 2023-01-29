import React from 'react'
import { Container, Row, Col } from 'reactstrap';
import SVG from '../../assets/wave.svg';
import './footer.css'

const Footer = () => {
    return (
        <footer className=''>
        <Container>
                <Row>
                    <Col >
                        <div class="ocean">
                            <div class="wave"></div>
                            <div class="wave"></div>
                            <div class="wave"></div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer