/**
 * Global State Management Template
 * 
 * Task: Build global state using useReducer + Context
 * 
 * Requirements:
 * - Create context for app state
 * - Use useReducer for state management
 * - Create provider component
 * - Handle async actions
 * - Export custom hook
 */

import { createContext, useContext, useReducer } from 'react';

// TODO: Define initial state
const initialState = {
    // user, loading, error, etc.
};

// TODO: Create reducer function
function appReducer(state, action) {
    switch (action.type) {
        // TODO: Handle different action types
        default:
            return state;
    }
}

// TODO: Create context
const AppContext = createContext();

// TODO: Create provider component
export function AppProvider({ children }) {
    // TODO: Use useReducer
    // TODO: Return provider with value
}

// TODO: Create custom hook
export function useApp() {
    // TODO: Use useContext
    // TODO: Throw error if used outside provider
}

