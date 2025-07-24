import { useEffect } from "react";
import CarList from "../../components/CarList/CarList.jsx";
import { selectCar } from "../../redux/cars/selectors.js";
import { useDispatch, useSelector } from "react-redux";
import { fetchCar } from "../../redux/cars/operations.js";
import Filters from "../../components/Filters/Filters.jsx";

const CatalogPage = () => {
  //   const dispatch = useDispatch();
  //   const cars = useSelector(selectCar);
  //   useEffect(() => {
  //     dispatch(fetchCar());
  //   }, [dispatch]);
  //   return <>{cars.length > 0 ? <CarList /> : <p>Car not found.</p>}</>;
  return (
    <>
      <Filters />
    </>
  );
};

export default CatalogPage;
