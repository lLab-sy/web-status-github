import { useState } from 'react';
import { Col, Form, Row, Stack } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Collapse from 'react-bootstrap/Collapse';

function AllProject() {
    const [open, setOpen] = useState(false);

    return (
        <>
            <Stack direction="horizontal" gap={3} style={{marginBottom: "10px"}}>
                <Form.Control className="me-auto" placeholder="Enter project name" />
                <Button variant="outline-primary"
                    onClick={() => setOpen(!open)}
                    aria-controls="all-project-collapse-text"
                    aria-expanded={open}>
                    Search
                </Button>
            </Stack>
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