import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

const App: React.FC = () => {
  return (
    <Container>
      <Row className="mt-4">
        <Col>
          <h1>Hello, React-Bootstrap!</h1>
          <p>This is a sample text using React-Bootstrap.</p>
          <Button variant="primary">Click Me</Button>
        </Col>
      </Row>
    </Container>
  );
};

export default App;
