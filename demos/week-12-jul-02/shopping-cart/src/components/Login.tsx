import { useRef, useState, FormEvent } from 'react';
import { Card, Button, Form } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';

import data from '../data';

const Login = () => {
    const usernameRef = useRef<HTMLInputElement>( null );
    const passwordRef = useRef<HTMLInputElement>( null );
    
    const navigate = useNavigate();

    const [ error, setError ] = useState( '' );

    const doLogin = ( event : FormEvent<HTMLFormElement> ) => {
        event.preventDefault();

        const user = data.users.find(
            user => user.username === usernameRef.current?.value && user.password === passwordRef.current?.value
        );

        if( !user ) {
            setError( 'Credentials did not match' );
        } else {
            navigate( '/shopping' );
        }
    };

    return (
        <div
            className="d-flex flex-column justify-content-center align-items-center"
            style={{ height: "100vh" }}
        >
            <h2 className="mb-3">Login</h2>
            <Card style={{ width: "20rem" }} className="p-4">
                {
                    error && (
                        <small className="text-danger">{error}</small>
                    )
                }
                <Form onSubmit={doLogin}>
                    <Form.Group
                        className="mb-3"
                        controlId="formBasicEmail"
                    >
                        <Form.Label>Username</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Username"
                            ref={usernameRef}
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
                            ref={passwordRef}
                        />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Login
                    </Button>
                </Form>
            </Card>
        </div>
    );
};

export default Login;
