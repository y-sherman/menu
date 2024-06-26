import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/row";
import Col from "react-bootstrap/col";
import { Accordion } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";

const picture1 = require('../images/Contact.png');

export default function Contact(){
    return(
        <>
        <Container>
            <Row>
                <Image src={picture1} fluid />
            </Row>
            <Row className = 'p-5'> 
                <Accordion>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>Call us</Accordion.Header>
                        <Accordion.Body> 410-486-MENU </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>Email Us</Accordion.Header>
                        <Accordion.Body> MenuMagic@gmail.com </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </Row>
    </Container>
        </>
        
    )
}