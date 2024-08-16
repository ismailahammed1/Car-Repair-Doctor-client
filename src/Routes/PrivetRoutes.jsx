import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';

const PrivateRoutes = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
 

    if (loading) {
        return <span className="loading loading-dots loading-lg"></span>;
    }

    if (user?.email) {
        return children;
    }

    return <Navigate to="/login" replace state={{ from: location }} />;
};

export default PrivateRoutes;
