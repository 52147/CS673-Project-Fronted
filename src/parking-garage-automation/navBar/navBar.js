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

    const navSignUp = () => {
        navigate('/register');
    }

    const navUser = () => {
        navigate('usermodule');
    }

    const navLogOut = () => {
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

                    <Nav className="me-auto">
                        <Nav.Link onClick={navHome}>Home</Nav.Link>
                        {(users.role === 1 || users.role === 2) && <>
                            <Nav.Link onClick={navManagementSystem}>Management System</Nav.Link>
                            {/*<NavDropdown title="Management System" id="nav-dropdown">*/}
                            {/*    <NavDropdown.Item eventKey="4.1">ParkingFee Management</NavDropdown.Item>*/}
                            {/*    <NavDropdown.Item eventKey="4.2">Parking History</NavDropdown.Item>*/}
                            {/*    <NavDropdown.Item eventKey="4.3">Authority Management</NavDropdown.Item>*/}

                            {/*</NavDropdown>*/}
                        </>
                        }
                        {
                            users.role === 3 && <><Nav.Link onClick={navUser}>User Center</Nav.Link>
                            </>
                        }


                    </Nav>


                    {
                        users.role !== 1 && users.role !== 2 && users.role !== 3 &&
                        <>
                            <Nav.Link className={'mr-5'} onClick={navSignUp}>Sign Up</Nav.Link>
                            <Button id="SignInButton" onClick={navLogIn}>Sign In</Button>
                        </>

                    }
                    {
                        (users.role === 1 || users.role === 2 || users.role === 3) && <>
                            <div className={`mr-3`}>Hi, {users.username}!</div>
                            <Button id="logOutButton" onClick={navLogOut}>Sign out</Button>
                        </>
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
