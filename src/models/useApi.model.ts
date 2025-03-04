import { AxiosResponse } from "axios";
import { AddGiftParams } from "../services/gifts.service";

export interface UseApi<T> {
    call: (params?: AddGiftParams) => Promise<AxiosResponse<T>>;
    controller: AbortController;
}