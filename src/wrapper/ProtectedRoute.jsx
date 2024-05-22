import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

function ProtectedRoute() {
  const { user } = useSelector((state) => state.authUser);

  if (user === null && localStorage.getItem('discussifyAccessToken') === null) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
}

export default ProtectedRoute;
