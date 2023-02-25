import React from "react";
import { Navigate, Routes, Route } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout";
import Home from "./components/Home";
import RegisterData from "./components/RegisterData";

// route in route : child route
// index : default child route
function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="Register" element={<RegisterData />} />
      </Route>
    </Routes>
  );
}

export default App;
