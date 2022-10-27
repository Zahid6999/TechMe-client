import React from 'react';
import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

const PrivateRoute = ({children}) => {
    const {user} = useContext(AuthContext())

    if(!user){
        return <Navigate to='/signin'></Navigate>
    }
    return children;
};

export default PrivateRoute;