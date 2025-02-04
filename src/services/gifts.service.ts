import axios from "axios";
// import { FormValues } from "../components/Forms/AddLink/form.model";
import { UseApi } from "../models/useApi.model";
import { loadAbortController } from "../utils/loadAbortController.utilities";
import { Gift } from "../models/gift.model";

export interface AddGiftParams {
    title: string;
    description: string;
    price: string;
    url: string;
}
export interface AddLinkParams {
    link?: string;
   
}

export interface GiftResponse {
    title: string;
    description: string;
    price: string;
    link: string;
}
export const  getGiftList = async (): UseApi<Gift[]> => {
    const controller = loadAbortController();

    return {
        call: async () => axios.get<Gift[]>('http://localhost:8000/gifts'),
        controller        
    }
}

export const addLink = (params?: AddLinkParams): UseApi<GiftResponse> => {
    const controller = loadAbortController();
    
    return {
        call: async () => await axios.post('http://localhost:8000/links/check', params, { signal: controller.signal }),
        controller
    };
}

export const addGift = (params?: AddGiftParams | undefined): UseApi<GiftResponse> => {
    const controller = loadAbortController();
    return {
        call: async () => await axios.post('http://localhost:8000/gifts', params, { signal: controller.signal }),
        controller
    };
}