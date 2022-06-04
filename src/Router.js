import React, { Component } from "react";
import { Routes, Route, useNavigate, Outlet } from "react-router-dom";

import Home from "./components/HomeComponent/Home";
import LoginForm from "./components/LoginFormComponent/LoginForm";
import LocationDetails from "./components/LocationDetailsComponent/LocationDetails";
import AddBusiness from "./components/AddBusinessComponent/AddBusiness";
import ProtectedRoutes from "./components/ProtectedRoutes/ProtectedRoutes";

function Router() {
  return (
    <Routes>
      <Route path="/login" element={<LoginForm />} />
      <Route path="/" element={<Home />} />
      <Route path="/business/:id" element={<LocationDetails />} />
      <Route path="/" element={<ProtectedRoutes />}>
        <Route path="/add-business" element={<AddBusiness />} />
      </Route>
    </Routes>
  );
}

export default Router;
