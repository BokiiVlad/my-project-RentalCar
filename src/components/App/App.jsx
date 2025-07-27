import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "../Header/Header.jsx";
import style from "./App.module.css";
import Loader from "../Loader/Loader.jsx";

const HomePage = lazy(() => import("../../pages/HomePage/HomePage.jsx"));
const CatalogPage = lazy(() =>
  import("../../pages/CatalogPage/CatalogPage.jsx")
);
const CarDetailsPage = lazy(() =>
  import("../../pages/CarDetailsPage/CarDetailsPage.jsx")
);
const NotFound = lazy(() => import("../../pages/NotFound/NotFound.jsx"));

function App() {
  return (
    <div className={style.container}>
      <Header />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/catalog" element={<CatalogPage />} />
          <Route path="/catalog/:id" element={<CarDetailsPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
