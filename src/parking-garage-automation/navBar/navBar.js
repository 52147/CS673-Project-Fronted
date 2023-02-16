import { Container, Navbar, Nav, Button } from "react-bootstrap";
import styles from './navBar.module.css'
import { NavLink } from "react-router-dom";

const NavBar = () => {
    return (
        <>

            <Navbar bg="light">
                <Container>
                    <Navbar.Brand href="/">
                        <div className={styles.textColor}>Victory Eight</div>
                    </Navbar.Brand>

                    <Nav className="me-auto">
                        <Nav.Link href="/" >Home</Nav.Link>
                        <Nav.Link href="/information" >Information</Nav.Link>
                        <Nav.Link href="/payment" >Payment</Nav.Link>
                        {/* <Nav.Link href="/">Management System</Nav.Link> */}
                    </Nav>

                    <Button id="logInButton" >Log In</Button>

                </Container>
            </Navbar>
        </>
    )
}

export default NavBar;
