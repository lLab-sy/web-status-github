import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FrequencyGraph from '../../components/frequency-graph';

function MainContent() {
  return (
    <Container style={{display: "block", height: "100vh"}}>
      <Row style={{margin: "10px"}}>
        <Col sm={9}><FrequencyGraph/></Col>
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