import { Navigate } from 'react-router-dom';
import { auth } from '../Firebase'; 

const ProtectedRoute = ({ children }) => {
  const isLoggedIn = !!auth.currentUser; 

  if (!isLoggedIn) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;
