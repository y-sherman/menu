import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'

export default function SiteHeader() {
  return (
   <>
        <Nav 
        fixedTop
        style={{backgroundColor: "Black", fontSize: 25, fontFamily: "monospace", }}
        justify variant="tabs" defaultActiveKey="/home">
            <Nav.Item className="text-white-50 bg-dark">
                <Nav.Link href="/" style={{color:"white"}}>Home</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="About" style={{color:"white"}}>About</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="Contact" style={{color:"white"}}>Contact</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="Add" style={{color:"white"}}>Add</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="Delete" style={{color:"white"}}>Delete</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="Retrieve" style={{color:"white"}}>Retrieve</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="Update"style={{color:"white"}} >Update</Nav.Link>
            </Nav.Item>
        </Nav>
    </>
  );
}
