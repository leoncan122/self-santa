import axios from "axios";
import { FormValues } from "../components/Forms/AddLink/form.model";

interface AddGift {
    name: string;
    description: string;
    image: string;
    price: number;
    link: string;
}
export const getGiftList = async () => {
    return axios.get('http://localhost:3001/gifts'); 
}

export const addLink = async (link: FormValues) => {
    return axios.post('http://localhost:3001/links', link, {
        headers: {
            'Content-Type': 'application/json'
        }
    });
}

export const addGift = async (gift: AddGift) => {
    return axios.post('http://localhost:3001/gifts', gift, {
        headers: {
            'Content-Type': 'application/json'
        }
    });
}