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

export const useApi= <T, P>(call: () => UseApi<P>, options?: Options<P> ): useApiResults<T, P> => {
    const [data] = useState<Data<T>>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<ErrorType>(null);


    const fetch = useCallback(async (params?: P) => {
        const controller = new AbortController();

        setLoading(true);
        setError(null);
        try {
            const res = await call.call(params);
            console.log(res);
            // setData(res);

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
