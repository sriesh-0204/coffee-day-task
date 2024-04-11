import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "../pages/login";
import Dashboard from "../pages/dashboard";
import SignUp from "../pages/signup";
import ProtectedRoute from "./protectedRoute";
import Cart from "../pages/cart";
import FilterPage from "../pages/filterPages";
import PDFViewer from "../pages/report";

const RouteList = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route
            path="/dashboard"
            element={<ProtectedRoute element={<Dashboard />} />}
          />
          <Route
            path="/signup"
            element={<ProtectedRoute element={<SignUp />} />}
          />
          <Route
            path="/cart"
            element={<ProtectedRoute element={<Cart />} />}
          />
           <Route
            path="/filter"
            element={<ProtectedRoute element={<FilterPage />} />}
          />
           <Route
            path="/report"
            element={<ProtectedRoute element={<PDFViewer />} />}
          />
          <Route path="/*" element={<Navigate to="/login" />} />
        </Routes>
      </Router>
    </div>
  );
};

export default RouteList;
