import axios from 'axios';
import IItem from '../models/IItem';

const baseUrl = process.env.REACT_APP_BASE_URL;

const getItems = async () => {
    const response = await axios.get<IItem[]>( `${baseUrl}/items` );
    return response.data;
};

export {
    getItems
};