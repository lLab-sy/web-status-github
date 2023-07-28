import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import FrequencyGraph from '../../components/frequency-graph';
import RightSiderContent from '../../components/right-sider-content';
import AllProject from '../../components/all-project';
import { Stack } from 'react-bootstrap';

function MainContent() {
  return (
    <Container style={{ display: "block", height: "100vh", paddingTop: "100px", width: "100vw" }}>
      <>
        <Stack direction="horizontal" gap={3} style={{ margin: "10px" }}>
          <FrequencyGraph />
          <Stack direction="vertical" gap={3} style={{ marginBottom: "10px", width: "250px" }}>
            <RightSiderContent title='All Project' value='5 projects' />
            <RightSiderContent title='Most Language' value='Java' />
            <RightSiderContent title='Organizations' value='1' />
            <RightSiderContent title='following / followers' value='0/1' />
          </Stack>
        </Stack>
      </>
      {/* <Row style={{ margin: "10px" }}>
        <Col sm={9}><FrequencyGraph /></Col>
        <Col sm="auto" style={{ display: 'flex', justifyContent: 'center', height: '100%', flexDirection: 'column', justifyItems: "center" }}>
          <RightSiderContent title='All Project' value='5 projects' />
          <RightSiderContent title='Most Language' value='Java' />
          <RightSiderContent title='Organizations' value='1' />
          <RightSiderContent title='following / followers' value='0/1' />
        </Col>
      </Row> */}
      <Row style={{ margin: "10px" }}>
        <AllProject />
      </Row>
    </Container>
  );
}

export default MainContent;