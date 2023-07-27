import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    <Navbar className="bg-body-tertiary fixed-top" style={{width : "100%"}}>
      <Container style={{display: 'flex', justifyContent: "center", width: "100%"}}>
        <Navbar.Brand href="#home">Web Status Github</Navbar.Brand>
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Signed in as: <a href="#login">Username</a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header