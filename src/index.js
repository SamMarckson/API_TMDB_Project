import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import Home from "./components/Home";
import Movie from "./components/Movie";
import Search from "./components/Search";
import Navbar from "./templates/Navbar";

import { BrowserRouter, Routes, Route } from "react-router-dom";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="" element={<Home/>} />
        <Route path="/movie/:id" element={<Movie/>} />
        <Route path="/search" element={<Search/>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
