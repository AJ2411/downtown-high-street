
import Link from 'next/link';
import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
//import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

function Page() {
  return (
    
    <Navbar bg="light" data-bs-theme="light">
        <Container>
         <Navbar.Brand href="/">Home</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">About Us</Nav.Link>
            <Nav.Link href="/contact-us">Contact Us</Nav.Link>
            <Nav.Link href="/enquiry-us">Enquiry </Nav.Link>
            <Nav.Link  href="/productlist"> Product List</Nav.Link> 
          </Nav>
          <a href="/add-cart"><i style={{marginleft: 25 + '0.2em', fontSize: '32px' }} class="bi bi-cart3 -14x"></i></a>{'  '} 

        </Container>
      </Navbar>
      
   
  );
}

export default Page