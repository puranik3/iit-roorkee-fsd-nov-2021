import { useState, useEffect } from "react";
import { Spinner, Alert, Container, Table, Button, Modal } from "react-bootstrap";
import { getItems } from "../services/items";
import IItem from "../models/IItem";

const ExpenseTracker = () => {
    const [items, setItems] = useState<IItem[]>([] as IItem[]);
    const [error, setError] = useState<Error | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    // 1. initiate backend call after first render
    useEffect(() => {
        // f
        const fetchItems = async () => {
            try {
                const items = await getItems();
                setItems(items); // 4. we are able to use the items
            } catch (error) {
                setError(error as Error);
            } finally {
                setLoading(false);
            }
        };

        fetchItems();
    }, []);

    const totalByPayee = (payeeName: string) => {
        // EXERCISE: You can convert this logic to use reduce()
        let total = 0;

        for (let i = 0; i < items.length; i++) {
            if (items[i].payeeName === payeeName) {
                total += items[i].price;
            }
        }

        return total;
    };

    const [show, setShow] = useState<boolean>(false);
    
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <Container className="my-4">
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Woohoo, you're reading this text in a modal!
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
            <h1>
                Expense Tracker
                <Button variant="primary" className="float-end" onClick={handleShow}>
                    Add expense
                </Button>
            </h1>
            <hr />
            {loading && (
                <div className="d-flex justify-content-center">
                    <Spinner animation="border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </Spinner>
                </div>
            )}
            {!loading && error && (
                <Alert variant="danger">{error.message}</Alert>
            )}
            {!loading && !error && (
                <Table striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Payee</th>
                            <th>Description</th>
                            <th>Date</th>
                            <th className="text-end">Amount</th>
                        </tr>
                    </thead>
                    <tbody>
                        {items.map((item, idx) => (
                            <tr key={item.id}>
                                <td>{idx + 1}</td>
                                <td>{item.payeeName}</td>
                                <td>{item.product}</td>
                                <td>{item.setDate}</td>
                                <td className="font-monospace text-end">
                                    {item.price}
                                </td>
                            </tr>
                        ))}
                        <tr>
                            <td colSpan={4} className="text-end">
                                Rahul paid
                            </td>
                            <td className="font-monospace text-end">
                                {totalByPayee("Rahul")}
                            </td>
                        </tr>
                        <tr>
                            <td colSpan={4} className="text-end">
                                Ramesh paid
                            </td>
                            <td className="font-monospace text-end">
                                {totalByPayee("Ramesh")}
                            </td>
                        </tr>
                    </tbody>
                </Table>
            )}
        </Container>
    );
};

export default ExpenseTracker;
