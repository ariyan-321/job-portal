import React, { useContext } from 'react';
import { authContext } from '../Provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

export default function PrivateRoute({children}) {

  const { user, loading } = useContext(authContext);
  const location = useLocation(); // Make sure to call useLocation() correctly

  // If user is logged in, render the children (protected content)
  if (user) {
    return children;
  }

  // If loading, show a loading message
  if (loading) {
    return  <div className="flex justify-center items-center h-64">
    <span className="loading loading-spinner text-primary w-12 h-12"></span>
</div>
  }

  // If no user and not loading, navigate to login with the current location as the 'from' path
  return (
    <Navigate
      to="/login"
      state={{ from: location }} // Pass the location to the login page
    />
  );
}
