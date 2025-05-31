import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Check authentication status
    const checkAuth = async () => {
        try {
            const token = localStorage.getItem('token');
            if (!token) {
                setUser(null);
                setLoading(false);
                return;
            }

            const response = await axios.get('https://chattime-3gul.onrender.com/api/auth/check', {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });

            if (response.data.user) {
                setUser(response.data.user);
            } else {
                setUser(null);
                localStorage.removeItem('token');
            }
        } catch (err) {
            console.error('Auth check failed:', err);
            setError(err.response?.data?.message || 'Authentication failed');
            setUser(null);
            localStorage.removeItem('token');
        } finally {
            setLoading(false);
        }
    };

    // Login function
    const login = async (credentials) => {
        try {
            const response = await axios.post('https://chattime-3gul.onrender.com/api/auth/login', credentials);
            const { token, user } = response.data;
            
            localStorage.setItem('token', token);
            setUser(user);
            setError(null);
            return { success: true };
        } catch (err) {
            setError(err.response?.data?.message || 'Login failed');
            return { success: false, error: err.response?.data?.message };
        }
    };

    // Logout function
    const logout = () => {
        localStorage.removeItem('token');
        setUser(null);
        setError(null);
    };

    // Check auth status on mount
    useEffect(() => {
        checkAuth();
    }, []);

    const value = {
        user,
        loading,
        error,
        login,
        logout,
        checkAuth
    };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
}; 