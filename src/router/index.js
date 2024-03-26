import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "../pages/login";
import Dashboard from "../pages/dashboard";
import SignUp from "../pages/signup";
import ProtectedRoute from "./protectedRoute";

const RouteList = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/login" element={<Login/>} />
           <Route
            path="/dashboard"
            element={<ProtectedRoute element={<Dashboard/>} />}
          />
          <Route
            path="/signup"
            element={<ProtectedRoute element={<SignUp/>} />}
          />
          <Route path="/*" element={<Navigate to="/login" />} />
        </Routes>
      </Router>
    </div>
  );
};

export default RouteList;
