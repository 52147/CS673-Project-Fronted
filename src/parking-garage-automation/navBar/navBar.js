import { Container, Navbar, Nav, Button } from "react-bootstrap";
import styles from "./navBar.module.css";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";
import React, { useState, useEffect } from "react";

const NavBar = () => {
  const { loading, users, username, token } = useSelector(
    (state) => state.users
  );
  console.log(username);
  const navigate = useNavigate();

  const navHome = () => {
    navigate("/");
  };

  const navManagementSystem = () => {
    navigate("/modules");
  };

  const navLogIn = () => {
    navigate("/login");
  };

  useEffect(() => {
    console.log("Fetching history...");
    console.log(users);
  }, []);

  return (
    <>
      <Navbar bg="light">
        <Container>
          <Navbar.Brand onClick={navHome}>
            <div className={styles.textColor}>Victory Eight {users}</div>
          </Navbar.Brand>

          <Nav className="me-auto">
            <Nav.Link onClick={navHome}>Home</Nav.Link>
            <Nav.Link onClick={navManagementSystem}>Management System</Nav.Link>
            {/*<NavDropdown title="Management System" id="nav-dropdown">*/}
            {/*    <NavDropdown.Item eventKey="4.1">ParkingFee Management</NavDropdown.Item>*/}
            {/*    <NavDropdown.Item eventKey="4.2">Parking History</NavDropdown.Item>*/}
            {/*    <NavDropdown.Item eventKey="4.3">Authority Management</NavDropdown.Item>*/}

            {/*</NavDropdown>*/}
          </Nav>

          {username ? (
            <p className="m-0">{username}</p>
          ) : (
            <Button id="logInButton" onClick={navLogIn}>
              Login
            </Button>
          )}
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
