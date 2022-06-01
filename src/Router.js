import React, { Component } from "react";
import { Routes, Route, useNavigate, Outlet } from "react-router-dom";
import { cookie } from "cookie";

import Home from "./components/HomeComponent/Home";
import LoginForm from "./components/LoginFormComponent/LoginForm";
import LocationDetails from "./components/LocationDetailsComponent/LocationDetails";
import AddBusiness from "./components/AddBusinessComponent/AddBusiness";

const checkAuth = () => true;

const ProtectedRoute = () => {
  let Navigate = useNavigate();

  return (
    <Route
      render={(props) =>
        checkAuth() === true ? <Outlet /> : <Navigate to="/login" />
      }
    />
  );
};

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/business/:id" element={<LocationDetails />} />
      <Route path="/login" element={<LoginForm />} />
      <Route path="/add-business" element={<ProtectedRoute />}>
        <Route path="/add-business" element={<AddBusiness />} />
      </Route>
    </Routes>
  );
}

export default Router;
