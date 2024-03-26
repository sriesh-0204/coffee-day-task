import React from 'react'
import { Navigate } from "react-router-dom";
import { getAuth } from "firebase/auth";

const ProtectedRoute = ({ element }) => {
    console.log(getAuth(),'currentuser');
    return getAuth().currentUser ? element : <Navigate to="/login" replace />;
};

export default ProtectedRoute
