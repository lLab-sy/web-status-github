import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function MainContent() {
  return (
    <Container>
      <Row>
        <Col sm={9}>sm=9</Col>
        <Col sm={3}>sm=3</Col>
      </Row>
      <Row>
        <Col sm={3}>sm=3</Col>
        <Col sm={9}>sm=9</Col>
      </Row>
    </Container>
  );
}

export default MainContent;