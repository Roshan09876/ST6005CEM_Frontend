import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

const AdminRoute = () => {

  const user = JSON.parse(localStorage.getItem("userData"))
  const navigate = useNavigate()

  if (user === null || !user.isAdmin) {
    navigate('/login');
    return null;
  }

  return <Outlet />;
}

export default AdminRoute;
