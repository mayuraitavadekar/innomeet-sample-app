import React from "react";
import { Nav, Navbar, Image, Form, FormControl, Button } from "react-bootstrap";
import "../assets/css/menu.css";

const Menu = () => {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Navbar.Brand href="/">
          <Image
            width="200px"
            src={require("../assets/images/logo.png")}
            rounded
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Form inline>
            <FormControl
              type="text"
              placeholder="Search"
              className="mr-sm-2 search-bar"
            />
          </Form>

          <Nav className="ml-auto">
            <Nav.Link href="/" className="border-right sign-in">
              SIGN IN
            </Nav.Link>
            <Nav.Link eventKey={2} href="/">
              <Button variant="primary" className="register-btn">
                Register
              </Button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Menu;
