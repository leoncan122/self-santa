import { useState, useEffect } from "react";

type Data<T> = T | null;

type ErrorType = Error | null;

interface Params<T> {
    data: Data<T>;
    loading: boolean;
    error: ErrorType;
}

const useFetch = <T>(url: string): Params<T> => {
    const [data, setData] = useState<Data<T>>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<ErrorType>(null);

    useEffect(() => {
        const controller = new AbortController();
        const fetchData = async() => {
            
            setLoading(true);
            try {
                const res = await fetch(url);
                if (res.ok) {
                    throw Error('Error fetching data');
                }

                const json: T = await res.json();
                setData(json);
            } catch (error) {
                setError(error as Error);
            } finally {
                setLoading(false);
            }
        }
        fetchData();

        return () => controller.abort();
    }, [url]);
    return { data, loading, error };
}

export default useFetch;