import axios from 'axios';
import IItem from '../models/IItem';

const baseUrl = process.env.REACT_APP_BASE_URL;

// 2. this runs when the effect function (f) in ExpenseTracker runs
const getItems = async () => {
    const response = await axios.get<IItem[]>( `${baseUrl}/items` );
    return response.data; // 3. response goes back to caller
};

export {
    getItems
};