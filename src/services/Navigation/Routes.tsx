import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CountryProfile from "../CountryProfile/CountryProfile";
import Dashboard from "../Dashboard/Dashboard";

const NavRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route index element={<Dashboard />} />
        <Route path="country-profile" element={<CountryProfile />} />
      </Routes>
    </Router>
  );
};

export default NavRoutes;
