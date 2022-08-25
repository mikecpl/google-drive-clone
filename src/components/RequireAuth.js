import React from 'react';
import { Navigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

export default function RequireAuth({ children, required = true }) {
  const { user } = useAuth();

  if (!user && required) {
    return <Navigate to="/login" />;
  }

  if (user && !required) {
    return <Navigate to="/" />;
  }

  return children;
}
