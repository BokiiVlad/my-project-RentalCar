import CarImage from "../../components/CarImage/CarImage.jsx";
import { useSelector } from "react-redux";
import style from "./CarDetailsPage.module.css";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import CarOverview from "../../components/CarOverview/CarOverview.jsx";
import RentalCondition from "../../components/RentalCondition/RentalCondition.jsx";
import CarSpecification from "../../components/CarSpecification/CarSpecification.jsx";
import AccessoriesList from "../../components/AccessoriesList/AccessoriesList.jsx";
import BookingForm from "../../components/BookingForm/BookingForm.jsx";
import ContainerForDetails from "../../components/ContainerForDatails/ContainerForDatails.jsx";
import NotFound from "../../pages/NotFound/NotFound.jsx";
import Loader from "../../components/Loader/Loader.jsx"; // компонент лоадера

import { selectCar } from "../../redux/cars/selectors.js";
import { fetchCarById } from "../../redux/cars/operations.js"; // створити цей thunk

const CarDetailsPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const allCars = useSelector(selectCar);

  const [car, setCar] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadCar = async () => {
      const existingCar = allCars.find((car) => car.id === id);
      if (existingCar) {
        setCar(existingCar);
        setLoading(false);
      } else {
        try {
          const res = await dispatch(fetchCarById(id));
          setCar(res.payload || null);
        } catch {
          setCar(null);
        } finally {
          setLoading(false);
        }
      }
    };

    loadCar();
  }, [id, allCars, dispatch]);

  if (loading) return <Loader />;
  if (!car) return <NotFound />;

  return (
    <ContainerForDetails>
      <div className={style.box}>
        <div className={style.formImgBox}>
          <CarImage car={car} />
          <BookingForm />
        </div>
        <div className={style.allTextBox}>
          <CarOverview car={car} />
          <div className={style.detailTextBox}>
            <RentalCondition car={car} />
            <CarSpecification car={car} />
            <AccessoriesList car={car} />
          </div>
        </div>
      </div>
    </ContainerForDetails>
  );
};

export default CarDetailsPage;
