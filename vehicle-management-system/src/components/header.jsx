import React, { Component } from 'react';
import { Button,Navbar,Nav,FormControl,Form } from 'react-bootstrap';
import logo from './../images/carsales-logo.png';

class navBar extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <Navbar bg="dark" variant="dark" expand="lg">
                    <div className="container">
                        <Navbar.Brand href="/">
                           <img src={logo} className="header-logo" alt="logo" />
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="mr-auto">
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="/list">All Listing</Nav.Link>
                            <Nav.Link href="/add">Add a Car</Nav.Link>
                            </Nav>
                            <Form inline>
                            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                            <Button variant="outline-success">Search</Button>
                            </Form>
                        </Navbar.Collapse>
                    </div>
                </Navbar>
            </div>
         );
    }
}
 
export default navBar;