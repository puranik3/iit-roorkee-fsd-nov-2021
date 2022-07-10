import { useState, useEffect } from "react";
import { Spinner, Alert, Container } from 'react-bootstrap';
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

    return (
        <Container className="my-4">
            <h1>Expense Tracker</h1>
            <hr />
            {
                loading && (
                <div className="d-flex justify-content-center">
                    <Spinner animation="border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </Spinner>
                </div>
                )
            }
            {
                !loading && error && (
                    <Alert variant="danger">{error.message}</Alert>
                )
            }
            {
                !loading && !error && (
                    items.map(
                        item => (
                            <div key={item.id}>{item.payeeName} - {item.product}</div>
                        )
                    )
                )
            }
        </Container>
    );
};

export default ExpenseTracker;
