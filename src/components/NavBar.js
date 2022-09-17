import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from './CartWidget';


function Navbar1() {
    return (
        <Navbar bg="light" variant="light" expand="lg">
            <Container>
                <Navbar.Brand href="#home">Beauty Shop</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <NavDropdown title="Products" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Skin care</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                Lipsticks
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Facial Makeup</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">
                                More products
                            </NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="#link">Frequent Questions</Nav.Link>
                    </Nav>
                        <Nav.Item >
                        <CartWidget />
                        </Nav.Item>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Navbar1;