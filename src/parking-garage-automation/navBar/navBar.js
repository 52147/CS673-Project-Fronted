import { Container, Navbar, Nav, Button } from "react-bootstrap";
import styles from './navBar.module.css'

const NavBar = () => {
    return (
        <>
            <Navbar bg="light">
                <Container>
                    <Navbar.Brand href="#home">
                        <div className={styles.textColor}>Victory Eight</div>
                    </Navbar.Brand>

                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#features">Management System</Nav.Link>
                    </Nav>
                    <Button id="logInButton" >Log In</Button>

                </Container>
            </Navbar>
        </>
    )
}

export default NavBar;
