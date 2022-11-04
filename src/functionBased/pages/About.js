import React from "react";
import { Routes, Link, Route } from "react-router-dom";
import SinglePage from "./SinglePage";

const About = (props) => {
  return (
    <div className="about__content">
      <ul className="about__list">
        <li>
          <Link to="about-app">About App</Link>
        </li>
        <li>
          <Link to="about-author">About Author</Link>
        </li>
      </ul>
      <Routes>
        <Route path=":slug" element={<SinglePage />}></Route>
      </Routes>
    </div>
  );
};
export default About;
