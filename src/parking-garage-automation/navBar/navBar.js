import {Container, Navbar, Nav, Button} from "react-bootstrap";
import styles from './navBar.module.css'
import {useNavigate} from "react-router";

const NavBar = () =>{
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



                    <Button id="logInButton" onClick={navLogIn} >Log In</Button>

                </Container>
            </Navbar>

        </>
    )
}


export default NavBar;
