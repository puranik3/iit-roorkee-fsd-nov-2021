import { useState, useEffect, useRef, FormEvent } from "react";
import {
    Spinner,
    Alert,
    Container,
    Table,
    Button,
    Modal,
    Form,
} from "react-bootstrap";
import { getItems, addItem } from "../services/items";
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

    const payeeNameRef = useRef<HTMLSelectElement>( null );
    const productRef = useRef<HTMLInputElement>( null );
    const priceRef = useRef<HTMLInputElement>( null );

    const addExpense = async ( event : FormEvent<HTMLFormElement> ) => {
        event.preventDefault();

        const expense = {
            payeeName: payeeNameRef?.current?.value as string,
            product: productRef?.current?.value as string,
            price: parseFloat( priceRef?.current?.value as string ) as number,
            setDate: (new Date()).toISOString().substring( 0, 10 ) as string
        } as Omit<IItem, 'id'>;

        const updatedItem = await addItem( expense );
        
        setItems(
            [
                ...items,
                updatedItem
            ]
        );

        handleClose();
    };

    return (
        <Container className="my-4">
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add an expense</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={addExpense}>
                        <Form.Group className="mb-3" controlId="payeeName">
                            <Form.Label>Who paid?</Form.Label>
                            <Form.Select aria-label="Payee name" ref={payeeNameRef}>
                                <option>-- Select payee --</option>
                                <option value="Rahul">Rahul</option>
                                <option value="Ramesh">Ramesh</option>
                            </Form.Select>
                        </Form.Group>

                        <Form.Group
                            className="mb-3"
                            controlId="product"
                        >
                            <Form.Label>For what?</Form.Label>
                            <Form.Control
                                type="text"
                                ref={productRef}
                            />
                        </Form.Group>

                        <Form.Group
                            className="mb-3"
                            controlId="price"
                        >
                            <Form.Label>How much?</Form.Label>
                            <Form.Control
                                type="number"
                                min="0"
                                ref={priceRef}
                            />
                        </Form.Group>

                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" type="submit">
                            Add expense
                        </Button>
                    </Form>
                </Modal.Body>
            </Modal>
            <h1>
                Expense Tracker
                <Button
                    variant="primary"
                    className="float-end"
                    onClick={handleShow}
                >
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
