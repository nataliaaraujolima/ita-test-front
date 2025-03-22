import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router';

export const AccessAuthenticated = ({ element }) => {
  const { token } = useSelector((state) => state.userData);
  if (!token) {
    return <Navigate to="/auth" />;
  }

  return element;
};
