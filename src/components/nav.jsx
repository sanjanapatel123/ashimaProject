import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Container, Form, FormControl, Button } from 'react-bootstrap';
import { Search, ShoppingCart } from 'lucide-react';

const ResponsiveNavbar = () => {
  return (
    <Navbar bg="white" expand="lg" className="shadow-sm py-3">
      <Container>
        <Navbar.Brand href="#" className="fs-2 fw-bold">AI SKILLS</Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />

        <Navbar.Collapse id="responsive-navbar-nav">
          <Form className="d-flex mx-auto my-2" style={{ maxWidth: "400px" }}>
           
            <FormControl
              type="search"
              placeholder= "        Search for anything"
              className="rounded-pill"
            />
            <Button variant="outline-none" className="position-absolute border-0 gap-4">
            <Search size={20} />
            </Button>
          </Form>

          <Nav className="mx-auto gap-4 align-items-center">
            <Nav.Link href="#courses" className="text-dark">Courses</Nav.Link>
            <Nav.Link href="#business" className="text-dark">Business</Nav.Link>
            <Nav.Link href="#digital-product" className="text-dark">Digital Product</Nav.Link>
            <Nav.Link href="#newsletter" className="text-dark">Newsletter</Nav.Link>
          </Nav>

          <Nav className="align-items-center gap-3">
            <Nav.Link href="#cart" className="text-dark">
              <ShoppingCart size={24} />
            </Nav.Link>
            <Button variant="outline-primary" className="rounded-pill px-3">Login</Button>
            <Button variant="primary" className="rounded-pill px-3">Sign Up</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default ResponsiveNavbar;