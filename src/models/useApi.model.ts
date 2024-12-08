import { AxiosResponse } from "axios";

export interface UseApi<T> {
    call: Promise<AxiosResponse<T>>;
    controller: AbortController;
}