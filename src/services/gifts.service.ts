import axios from "axios";

interface AddGift {
    name: string;
    description: string;
    image: string;
    price: number;
    link: string;
}

export const addGift = async (gift: AddGift) => {
    return axios.get('http://localhost:3001/gifts', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        data: JSON.stringify(gift)
    });
}