import React, { useContext } from 'react';
import { AuthContext } from './AuthProvider';
import { Navigate } from 'react-router';

const PrivateRoute = ({ children }) => {
    let { user } = useContext(AuthContext)
    if (user) {
        return children;
        
    }
    return <Navigate to='/auth/login'></Navigate>;
};

export default PrivateRoute;