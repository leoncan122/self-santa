import { useState, useEffect, useCallback } from "react";

type Data<T> = T | null;

type ErrorType = Error | null;

interface useApiResults<T, P> {
    data: Data<T>;
    loading: boolean;
    error: ErrorType;
    fetch: (params?: P) => void;
}


interface Options<P> {
    params?: P;
    autoFetch?: boolean;
}

export const useApi= <T, P>(call: (params?: P) => void, options?: Options<P> ): useApiResults<T, P> => {
    const [data, setData] = useState<Data<T>>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<ErrorType>(null);


    const fetch = useCallback(async (params?: P) => {
        const controller = new AbortController();

        setLoading(true);
        setError(null);
        try {
            const res = call(params);
            setData(res.data);
        } catch (error) {
            setError(error as Error);
        } finally {
            setLoading(false);
        }
        return () => controller.abort();

    }, []);

    useEffect(() => {
        if (options?.autoFetch) {
            fetch(options.params);
        }
    }, [options?.autoFetch, fetch, options?.params]);

    return { data, loading, error, fetch };
}
