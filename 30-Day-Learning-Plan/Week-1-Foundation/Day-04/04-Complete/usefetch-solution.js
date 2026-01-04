/**
 * useFetch Custom Hook - Complete Solution
 */

import { useState, useEffect, useRef } from 'react';

function useFetch(url) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const abortControllerRef = useRef(null);

    useEffect(() => {
        // Abort previous request if URL changes
        if (abortControllerRef.current) {
            abortControllerRef.current.abort();
        }

        // Create new AbortController for this request
        abortControllerRef.current = new AbortController();
        const signal = abortControllerRef.current.signal;

        // Reset states
        setLoading(true);
        setError(null);
        setData(null);

        fetch(url, { signal })
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                if (!signal.aborted) {
                    setData(data);
                    setLoading(false);
                }
            })
            .catch(err => {
                if (!signal.aborted && err.name !== 'AbortError') {
                    setError(err.message);
                    setLoading(false);
                }
            });

        // Cleanup function
        return () => {
            if (abortControllerRef.current) {
                abortControllerRef.current.abort();
            }
        };
    }, [url]);

    return { data, loading, error };
}

export default useFetch;

/**
 * Usage Example:
 * 
 * function UserProfile({ userId }) {
 *   const { data, loading, error } = useFetch(`/api/users/${userId}`);
 * 
 *   if (loading) return <div>Loading...</div>;
 *   if (error) return <div>Error: {error}</div>;
 *   if (!data) return null;
 * 
 *   return (
 *     <div>
 *       <h1>{data.name}</h1>
 *       <p>{data.email}</p>
 *     </div>
 *   );
 * }
 */

/**
 * Enhanced Version with Options
 */
function useFetchAdvanced(url, options = {}) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const abortControllerRef = useRef(null);

    useEffect(() => {
        if (abortControllerRef.current) {
            abortControllerRef.current.abort();
        }

        abortControllerRef.current = new AbortController();
        const signal = abortControllerRef.current.signal;

        setLoading(true);
        setError(null);

        const fetchOptions = {
            ...options,
            signal,
            headers: {
                'Content-Type': 'application/json',
                ...options.headers,
            },
        };

        fetch(url, fetchOptions)
            .then(async response => {
                if (!response.ok) {
                    const errorData = await response.json().catch(() => ({}));
                    throw new Error(errorData.message || `HTTP ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                if (!signal.aborted) {
                    setData(data);
                    setLoading(false);
                }
            })
            .catch(err => {
                if (!signal.aborted && err.name !== 'AbortError') {
                    setError(err.message);
                    setLoading(false);
                }
            });

        return () => {
            if (abortControllerRef.current) {
                abortControllerRef.current.abort();
            }
        };
    }, [url, JSON.stringify(options)]);

    const refetch = () => {
        // Trigger re-fetch by updating a dependency
        // This is a simplified version
    };

    return { data, loading, error, refetch };
}

export { useFetchAdvanced };

