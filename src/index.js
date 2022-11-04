import React from "react";
import ReactDOM from "react-dom/client";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import "./functionBased/App.css";

//component files
import TodoContainer from "./functionBased/components/ToDoContainer.component";
import About from "./functionBased/pages/About";
import NotMatch from "./functionBased/pages/NotMatch";
import Navbar from "./functionBased/components/Navbar.component";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<TodoContainer />} />
        <Route path="/about/*" element={<About />} />
        <Route path="*" element={<NotMatch />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
