// import { useState } from "react";
import { Route, Router, Routes } from "react-router-dom";
import HomePage from "../../pages/HomePage/HomePage.jsx";
import CatalogPage from "../../pages/CatalogPage/CatalogPage.jsx";
import CarDetailsPage from "../../pages/CarDetailsPage/CarDetailsPage.jsx";
import NotFound from "../../pages/NotFound/NotFound.jsx";
import Header from "../Header/Header.jsx";
import style from "./App.module.css";

function App() {
  return (
    <div className={style.container}>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/catalog" element={<CatalogPage />} />
        <Route path="/catalog/:id" element={<CarDetailsPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
