import React from 'react';
import auth from './../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useLocation, Navigate } from 'react-router-dom';
import Loading from './Loading/Loading';
import { signOut } from 'firebase/auth';
import useAdmin from './../../Hooks/useAdmin';

const RequireAdmin = ({ children }) => {
    const [user, loading, error] = useAuthState(auth);
    const location = useLocation();
    const [admin, adminLoading] = useAdmin(user);
    if (loading || adminLoading) {
        return <Loading></Loading>
    }
    if (!user || !admin) {
        signOut(auth);
        return <Navigate to="/login" state={{ from: location }} replace></Navigate>

    }
    return children;
};


export default RequireAdmin;