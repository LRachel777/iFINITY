import React from 'react';
import { Navigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';

const ProtectedRoutes = ({ children }) => {
  const { user, role } = UserAuth();

  console.log("Check user in Private: ", user);
  console.log("user role: ", role);
  if (!user) {
    return <Navigate to='/' />;
  }
  return children;
};

export const AdminElement = ({ children }) => {
  const { user, role } = UserAuth();

  console.log("Check user in Private: ", user);
  console.log("user role: ", role);
  if (!user) {
    return <Navigate to="/" />;
  }
  else{
    if(role === "admin")
      return children;
    else
      return <>You do not have access to this page</>
  }
};   

export const UserElement = ({ children }) => {
  const { user, role } = UserAuth();

  
  if (!user) {
    return <>You need to Sign In</>;
  }
  else{
    if(role === "admin" || role ==="user")
      return children;
    else
      return <>You do not have access to this page</>
  }
};

export default ProtectedRoutes;