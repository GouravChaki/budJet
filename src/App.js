import React from "react";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
function App() {
  return (
    <div className="">
      <BrowserRouter>
      <Navbar />
      <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
