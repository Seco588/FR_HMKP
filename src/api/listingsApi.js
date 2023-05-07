//crea una funzione fetchListings che userà Axios per inviare una richiesta GET al tuo backend per recuperare tutti gli annunci.
import axios from 'axios';

export const fetchListings = async () => {
    try {
        const response = await axios.get('http://localhost:8080/listings');
        return response.data;
    } catch (error) {
        console.error('Error fetching listings:', error);
        throw error;
    }
};
