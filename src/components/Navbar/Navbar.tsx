import "./Navbar.css";
import { Navbar, Nav, Container } from "react-bootstrap/";

function NavBar() {
    return (
        <Navbar collapseOnSelect expand="md" className="navbar">
            <Container>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">

                <Nav className="me-auto flex-grow-1 justify-content-between">
                    <Nav.Link href="#home">
                        ABOUT US
                    </Nav.Link>
                    <Nav.Link href="#features">PROJECTS</Nav.Link>
                    <Nav.Link href="#pricing">OUR TEAM</Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
export default NavBar;
