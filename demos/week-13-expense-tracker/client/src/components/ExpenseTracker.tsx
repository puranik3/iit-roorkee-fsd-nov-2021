import { useState, useEffect } from 'react';
import { getItems } from '../services/items';

const ExpenseTracker = () => {
    const [ items, setItems ] = useState( [] );
    const [ error, setError ] = useState( null );
    const [ loading, setLoading ] = useState( true );

    useEffect(() => {
        const fetchItems = async () => {
            const items = await getItems();
            console.log( items );
        };

        fetchItems();
    }, []);

    return (
        <div>ExpenseTracker works!</div>
    );
};

export default ExpenseTracker;