/**
 * Global State Management - Complete Solution
 */

import { createContext, useContext, useReducer, useCallback } from 'react';

const initialState = {
    user: null,
    loading: false,
    error: null,
    theme: 'light'
};

function appReducer(state, action) {
    switch (action.type) {
        case 'SET_USER':
            return { ...state, user: action.payload };
        case 'SET_LOADING':
            return { ...state, loading: action.payload };
        case 'SET_ERROR':
            return { ...state, error: action.payload };
        case 'SET_THEME':
            return { ...state, theme: action.payload };
        case 'LOGOUT':
            return { ...initialState, theme: state.theme };
        default:
            return state;
    }
}

const AppContext = createContext();

export function AppProvider({ children }) {
    const [state, dispatch] = useReducer(appReducer, initialState);

    // Async action example
    const login = useCallback(async (credentials) => {
        dispatch({ type: 'SET_LOADING', payload: true });
        dispatch({ type: 'SET_ERROR', payload: null });
        
        try {
            // Simulate API call
            const response = await fetch('/api/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(credentials)
            });
            
            if (!response.ok) throw new Error('Login failed');
            
            const user = await response.json();
            dispatch({ type: 'SET_USER', payload: user });
        } catch (error) {
            dispatch({ type: 'SET_ERROR', payload: error.message });
        } finally {
            dispatch({ type: 'SET_LOADING', payload: false });
        }
    }, []);

    const logout = useCallback(() => {
        dispatch({ type: 'LOGOUT' });
    }, []);

    const setTheme = useCallback((theme) => {
        dispatch({ type: 'SET_THEME', payload: theme });
    }, []);

    const value = {
        ...state,
        login,
        logout,
        setTheme
    };

    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    );
}

export function useApp() {
    const context = useContext(AppContext);
    if (!context) {
        throw new Error('useApp must be used within AppProvider');
    }
    return context;
}

/**
 * Usage Example:
 * 
 * function App() {
 *   return (
 *     <AppProvider>
 *       <Header />
 *       <Main />
 *     </AppProvider>
 *   );
 * }
 * 
 * function Header() {
 *   const { user, logout, theme, setTheme } = useApp();
 *   return (
 *     <header className={theme}>
 *       {user ? (
 *         <button onClick={logout}>Logout</button>
 *       ) : (
 *         <LoginForm />
 *       )}
 *     </header>
 *   );
 * }
 */

