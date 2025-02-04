import { useState, useEffect, useCallback } from "react";
import { UseApi } from "../models/useApi.model";

type Data<T> = T | null;

type ErrorType = Error | null;

interface useApiResults<T, P> {
    data: Data<T>;
    loading: boolean;
    error: ErrorType;
    fetch: (params?: P) => void;
}


type Options<P> = {
    params?: P;
    autoFetch?: boolean;
} & (P extends null ?  { params?: P} : { params: P });

export const useApi= <T, P>(call: (params?: P) => UseApi<T>, options?: Options<P> ): useApiResults<T, P> => {
    const [data, setData] = useState<Data<T>>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<ErrorType>(null);

    console.log("Data", data);
    const fetch = useCallback(async (params?: P) => {
        const controller = new AbortController();

        setLoading(true);
        setError(null);
        try {
         await call(params).call().then((res)  => {
            setData({
                ...res.data,
            });
         });


        } catch (error) {
            setError(error as Error);
        } finally {
            setLoading(false);
        }
        return () => controller.abort();

    }, [call]);

    useEffect(() => {
        if (options?.autoFetch) {
            fetch(options.params);
        }
    }, [options?.autoFetch, fetch, options?.params]);

    return { data, loading, error, fetch };
}
