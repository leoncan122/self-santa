import axios from "axios";
// import { FormValues } from "../components/Forms/AddLink/form.model";
import { UseApi } from "../models/useApi.model";
import { loadAbortController } from "../utils/loadAbortController.utilities";
import { Gift } from "../models/gift.model";

export interface AddGiftParams {
    title: string;
    description: string;
    price: number;
    link: string;
}
export interface AddLinkParams {
    link?: string;
   
}

export interface GiftResponse {
    title: string;
    description: string;
    // image: string;
    price: number;
    link: string;
}
export const  getGiftList = async (): Promise<UseApi<Gift[]>> => {
    const controller = loadAbortController();

    return {
        call: () => axios.get<Gift[]>('http://localhost:3001/gifts'),
        controller        
    }
}

export const addLink = (params?: AddLinkParams): UseApi<GiftResponse> => {
    const controller = loadAbortController();
    
    return {
        call: () => axios.post<AddGiftParams>('http://localhost:3001/links/check', params, { signal: controller.signal }),
        controller
    };
}

export const addGift = (params?: AddGiftParams): UseApi<AddGiftParams> => {
    const controller = loadAbortController();
    // const promise = 
    return {
        call: () => axios.post('http://localhost:3001/gifts', params, { signal: controller.signal }),
        controller
    };
}