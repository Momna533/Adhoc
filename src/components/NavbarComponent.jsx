// src/Navbar.js
import { useState } from "react";
import { Navbar, Nav, Button, Collapse, Dropdown } from "react-bootstrap";
import logo from "../assets/logo.png";
import { FiMenu } from "react-icons/fi";

const NavbarComponent = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Navbar expand="lg" className="navbar">
        <Navbar.Brand
          href="#home"
          className="d-flex align-center justify-center"
        >
          <img src={logo} alt="logo" />
        </Navbar.Brand>
        <Button
          aria-controls="basic-navbar-nav"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
          className="d-lg-none"
        >
          <FiMenu />
        </Button>
        <Navbar.Collapse
          id="basic-navbar-nav"
          className="d-none d-lg-flex large__screen__nav"
        >
          <Nav className="me-auto">
            <Nav.Link className="nav__link" href="#home">
              Home
            </Nav.Link>
            <Nav.Link className="nav__link" href="#link">
              Link
            </Nav.Link>
            <Dropdown>
              <Dropdown.Toggle>dropdown</Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item href="#/action-4">Separated link</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Nav.Link
              aria-disabled
              disabled
              className="nav__link disabled"
              href="#contact"
            >
              Disable
            </Nav.Link>
          </Nav>
          <form>
            <input type="text" className="form-control" placeholder="Search" />
            <Button type="submit" className="btn btn-primary">
              Submit
            </Button>
          </form>
        </Navbar.Collapse>
      </Navbar>
      <Collapse in={open} className="d-lg-none">
        <div id="basic-navbar-nav">
          <Nav
            className="me-auto"
            style={{ display: "flex", flexDirection: "column" }}
          >
            <Nav.Link className="nav__link" href="#home">
              Home
            </Nav.Link>
            <Nav.Link className="nav__link" href="#link">
              Link
            </Nav.Link>
            <Dropdown>
              <Dropdown.Toggle>dropdown</Dropdown.Toggle>
              <Dropdown.Menu className="dropdown__menu">
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                <Dropdown />
                <Dropdown.Item href="#/action-4">Separated link</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Nav.Link
              aria-disabled
              disabled
              className="nav__link disabled"
              href="#contact"
            >
              Disable
            </Nav.Link>
            <Nav.Link className="nav__link" href="#contact">
              Search
            </Nav.Link>
          </Nav>
          <form className="form__small__screen">
            <input type="text" className="form-control" placeholder="Search" />
            <Button type="submit" className="btn btn-primary">
              Submit
            </Button>
          </form>
        </div>
      </Collapse>
    </>
  );
};

export default NavbarComponent;
