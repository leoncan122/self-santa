import axios from "axios";
// import { FormValues } from "../components/Forms/AddLink/form.model";
import { UseApi } from "../models/useApi.model";
import { loadAbortController } from "../utils/loadAbortController.utilities";
// import { Gift } from "../models/gift.model";

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
export const getGiftList = (): UseApi<GiftResponse> => {
    const controller = loadAbortController();

    return {
        call: async () => await axios.get('http://localhost:8080/gifts', { signal: controller.signal }),
        controller        
    }
}

export const addLink = (params?: AddLinkParams): UseApi<GiftResponse> => {
    const controller = loadAbortController();
    
    return {
        call: async () => await axios.post('http://localhost:8080/links/check', params, { signal: controller.signal }),
        controller
    };
}

export const addGift = (params?: AddGiftParams | undefined): UseApi<GiftResponse> => {
    const controller = loadAbortController();
    return {
        call: async () => await axios.post('http://localhost:8080/gifts', params, { signal: controller.signal }),
        controller
    };
}