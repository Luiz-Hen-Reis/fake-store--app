import axios from "axios";

const baseUrl = 'https://fakestoreapi.com/products';

export default {
    getProducts: async () => {
        const res = await axios.get(baseUrl);
        return res.data;
    }
}