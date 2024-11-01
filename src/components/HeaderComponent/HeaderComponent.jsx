import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavScrollExample() {
  return (
    <Navbar  expand="lg" className="b">
      <Container className='headeer' fluid>
        <Navbar.Brand href="#">Loginic</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Главная</Nav.Link>
            <Nav.Link href="#action2">О нас</Nav.Link>
            <NavDropdown title="Товары" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Ковры в магазине</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Ковры под заказ
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Ковры в наборе
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#" disabled>
              
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Найти"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Поиск</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;