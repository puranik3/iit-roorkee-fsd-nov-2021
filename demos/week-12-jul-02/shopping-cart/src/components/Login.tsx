import { Card, Button, Form } from "react-bootstrap";

const Login = () => {
    return (
        <div
            className="d-flex flex-column justify-content-center align-items-center"
            style={{ height: "100vh" }}
        >
            <h2 className="mb-3">Login</h2>
            <Card style={{ width: "18rem" }} className="p-3">
                <Card.Body>
                    <Card.Text>
                        <Form>
                            <Form.Group
                                className="mb-3"
                                controlId="formBasicEmail"
                            >
                                <Form.Label>Username</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Username"
                                />
                            </Form.Group>

                            <Form.Group
                                className="mb-3"
                                controlId="formBasicPassword"
                            >
                                <Form.Label>Password</Form.Label>
                                <Form.Control
                                    type="password"
                                    placeholder="Password"
                                />
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Login
                            </Button>
                        </Form>
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Login;
