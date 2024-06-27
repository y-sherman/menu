import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Accordion from "react-bootstrap/Accordion";
import Image from "react-bootstrap/Image";

// Import your image
import picture1 from '../images/Contact.png';

export default function Contact() {
    const h3Style = {
        fontFamily: 'cursive',
        fontSize: '2rem',
        color: '#5eb8b8',
        textAlign: 'center',
        marginBottom: '1rem'
    };

    return (
        <Container className="mt-5">
            <Row className="mb-4">
                <Col>
                    <h1 className="text-center">Contact Us</h1>
                </Col>
            </Row>
            <Row className="mb-4">
                <Col>
                    <h3 style={h3Style}>
                        We are here to fulfill all of your needs at all times
                    </h3>
                </Col>
            </Row>
            <Row className="justify-content-center mb-4">
                <Col xs={12} sm={10} md={8} lg={6}>
                    <Image src={picture1} fluid className="rounded mx-auto d-block" style={{ maxWidth: '100%', height: 'auto' }} />
                </Col>
            </Row>
            <Row className="mb-4">
                <Col>
                    <Accordion>
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>Call Us</Accordion.Header>
                            <Accordion.Body>410-486-MENU</Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>Email Us</Accordion.Header>
                            <Accordion.Body>MenuMagic@gmail.com</Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </Col>
            </Row>
        </Container>
    );
}
