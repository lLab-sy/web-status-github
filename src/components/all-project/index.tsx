import { useState } from 'react';
import { Col, Form, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Collapse from 'react-bootstrap/Collapse';

function AllProject() {
    const [open, setOpen] = useState(false);

    return (
        <>
            <Row style={{width: '100%'}}>
                <Col md="10">
                    <Form.Control placeholder="Project name" />
                </Col>
                <Col md="auto">
                    <Button
                        onClick={() => setOpen(!open)}
                        aria-controls="all-project-collapse-text"
                        aria-expanded={open}
                    >
                        search
                    </Button>
                </Col>
            </Row>
            <div style={{ minHeight: '150px' }}>
                <Collapse in={open} dimension="width">
                    <div id="all-project-collapse-text">
                        <Card body style={{ width: '100%' }}>
                            Anim pariatur cliche reprehenderit, enim eiusmod high life
                            accusamus terry richardson ad squid. Nihil anim keffiyeh
                            helvetica, craft beer labore wes anderson cred nesciunt sapiente
                            ea proident.
                        </Card>
                    </div>
                </Collapse>
            </div>
        </>
    );
}

export default AllProject;