
import {Container, Navbar, Nav, Button, Modal} from "react-bootstrap";
import styles from './navBar.module.css'
import {useNavigate} from "react-router";
import {useSelector} from "react-redux";
import React, {useState} from "react";

const NavBar = () =>{
    const { users } = useSelector((state) => state.submitUser);

    const navigate = useNavigate()

    const navHome = ()=>{
        navigate('/');
    }

    const navManagementSystem = ()=>{
        navigate('/modules');
    }

    const navLogIn = ()=>{
        navigate('/login');
    }

    const navLogOut = ()=>{
        localStorage.removeItem('userObject');
        logOutHandlerShow();
        setTimeout(() => window.location.replace(`/`), 3000)

    }

    const [show, setShow] = useState(false);
    const logOutHandlerClose = () => {
        setShow(false)
        window.location.replace(`/`)
    };
    const logOutHandlerShow = () => {
        setShow(true);
        setTimeout(() => logOutHandlerClose(), 3000)
    }


    return(<>
            <Navbar bg="light">
                <Container>
                    <Navbar.Brand onClick={navHome}>
                        <div className={styles.textColor}>Victory Eight</div>
                    </Navbar.Brand>

                        <Nav className="me-auto" >
                            <Nav.Link onClick={navHome}>Home</Nav.Link>
                             <Nav.Link onClick={navManagementSystem}>Management System</Nav.Link>
                            {/*<NavDropdown title="Management System" id="nav-dropdown">*/}
                            {/*    <NavDropdown.Item eventKey="4.1">ParkingFee Management</NavDropdown.Item>*/}
                            {/*    <NavDropdown.Item eventKey="4.2">Parking History</NavDropdown.Item>*/}
                            {/*    <NavDropdown.Item eventKey="4.3">Authority Management</NavDropdown.Item>*/}

                            {/*</NavDropdown>*/}
                        </Nav>


                    {
                        users !=="fulfilled" &&
                        <Button id="logInButton" onClick={navLogIn} >Log In</Button>
                    }
                    {
                        users ==="fulfilled" &&
                        <Button id="logInButton" onClick={navLogOut} >Log out</Button>
                    }

                    <Modal
                        show={show}
                        onHide={logOutHandlerShow}
                        backdrop="static"
                        keyboard={false}
                    >
                        <Modal.Header closeButton>
                            <Modal.Title>Log Out</Modal.Title>
                        </Modal.Header>
                        <Modal.Body> Log Out Successfully!</Modal.Body>
                        <Modal.Footer>
                            <Button variant="primary" onClick={logOutHandlerClose}>
                                Close
                            </Button>
                        </Modal.Footer>
                    </Modal>


                </Container>
            </Navbar>



        </>
    )
}


export default NavBar;
