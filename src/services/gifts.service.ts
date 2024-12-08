import axios from "axios";
import { FormValues } from "../components/Forms/AddLink/form.model";
import { UseApi } from "../models/useApi.model";
import { loadAbortController } from "../utils/loadAbortController.utilities";
import { Gift } from "../models/gift.model";

interface AddGift {
    title: string;
    description: string;
    price: number;
    link: string;
}
interface GiftResponse {
    title: string;
    description: string;
    // image: string;
    price: number;
    link: string;
}
export const getGiftList =  (): UseApi<Gift[]> => {
    const controller = loadAbortController();

    return {
        call: axios.get<Gift[]>('http://localhost:3001/gifts'),
        controller        
    }
}

export const addLink = (link: string): UseApi<GiftResponse> => {
    const controller = loadAbortController();
    return {
        call: axios.post<AddGift>('http://localhost:3001/links/check', {link}, { signal: controller.signal }),
        controller
    };
}

export const addGift = async (gift: AddGift) => {
    const controller = loadAbortController();

    return {
        call: axios.post<AddGift>('http://localhost:3001/gifts', gift, { signal: controller.signal }),
        controller
    };
}