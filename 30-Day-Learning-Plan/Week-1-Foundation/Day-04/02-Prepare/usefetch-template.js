/**
 * useFetch Custom Hook Template
 * 
 * Task: Create a custom hook for data fetching
 * 
 * Requirements:
 * - Handle loading state
 * - Handle error state
 * - Handle data state
 * - Accept URL as parameter
 * - Use useEffect for fetching
 * - Cleanup on unmount
 */

import { useState, useEffect } from 'react';

function useFetch(url) {
    // TODO: Add state for data, loading, error

    useEffect(() => {
        // TODO: Implement fetch logic
        // TODO: Handle loading state
        // TODO: Handle errors
        // TODO: Cleanup on unmount (cancel fetch)
    }, [url]); // Re-fetch when URL changes

    // TODO: Return { data, loading, error }
}

export default useFetch;

