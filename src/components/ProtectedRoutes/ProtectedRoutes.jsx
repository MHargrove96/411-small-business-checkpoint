import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userActions } from "../../redux/user-slice";


const ProtectedRoutes = () => {
  const { online } = useSelector((state) => {
    return state.online;
  });
    

  return online ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoutes;
