import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FrequencyGraph from '../../components/frequency-graph';
import RightSiderContent from '../../components/right-sider-content';

function MainContent() {
  return (
    <Container style={{ display: "block", height: "100vh", paddingTop: "100px" }}>
      <Row style={{ margin: "10px" }}>
        <Col sm={9}><FrequencyGraph /></Col>
        <Col sm={3} md="auto" style={{ display: 'flex', justifyContent: 'space-between', height: '100%', flexDirection: 'column' }}>
          <RightSiderContent title='All Project' value='5 projects' />
          <RightSiderContent title='Most Language' value='Java' />
          <RightSiderContent title='Organizations' value='1' />
          <RightSiderContent title='following / followers' value='0/1' />
        </Col>
      </Row>
    </Container>
  );
}

export default MainContent;