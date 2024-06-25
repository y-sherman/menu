import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Column from "react-bootstrap/Column"

export function CreateList() {
    return (
        <Container>
            <Row>
                <Col>
                    <h1>This is my Create List Page</h1>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Form.Label>Password</Form.Label>
                    <Form.Label className = 'ms-2'>User Name</Form.Label>
                </Col>
            </Row>
        </Container>
    )
};