import axios from 'axios';
import IItem from '../models/IItem';

const baseUrl = process.env.REACT_APP_BASE_URL;

// 2. this runs when the effect function (f) in ExpenseTracker runs
const getItems = async () => {
    const response = await axios.get<IItem[]>( `${baseUrl}/items` );
    return response.data; // 3. response goes back to caller
};

// async function will return a promise - the promise resolves with the value that is there in the return statement
const addItem = async ( item : Omit<IItem, 'id'> ) => {
    const response = await axios.post<IItem>( `${baseUrl}/items`, item, {
        headers: {
            'Content-Type': 'application/json'
        }
    });
    return response.data;
};

export {
    getItems,
    addItem
};