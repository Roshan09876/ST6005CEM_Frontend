import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

const UserRoutes = () => {

  const user = JSON.parse(localStorage.getItem("userData"))
  const navigate = useNavigate()
  
  if (user === null) {
    navigate('/login');
    return null;
  }



  return <Outlet />;
}

export default UserRoutes;
