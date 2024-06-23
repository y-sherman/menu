import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'

export default function SiteHeader() {
  return (
   <>
        <Navbar bg="dark" variant='dark' expand="lg" >
            <Container>
                    <Navbar.Brand href="/">Menu Home Page</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="/About">About</Nav.Link>
                            <Nav.Link href="/Contact">Contact</Nav.Link>
                            <Nav.Link href="/Add">Add</Nav.Link>
                            <Nav.Link href="/Delete">Delete</Nav.Link>
                            <Nav.Link href="/Retrieve">Retrieve</Nav.Link>
                            <Nav.Link href="/Update">Update</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
            </Container>
        </Navbar>
    </>
  );
}
