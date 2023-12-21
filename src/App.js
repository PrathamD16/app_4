import React, { useState } from "react";
import Dashboard from "./Components/Dashboard";
import { Route, Router, Routes, useNavigate } from "react-router-dom";
import LoginPage from "./Components/LoginPage";

const App = () => {
  return <div className="">
    <Routes>
      <Route path="/" element={<LoginPage />}/>
      <Route path="/dashboard" element={<Dashboard />}/>
    </Routes>
  </div>;
};

export default App;
