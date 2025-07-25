import CarImage from "../../components/CarImage/CarImage.jsx";
import { useSelector } from "react-redux";
import style from "./CarDetailsPage.module.css";
import { selectCar } from "../../redux/cars/selectors.js";
import { useParams } from "react-router-dom";
import CarOverview from "../../components/CarOverview/CarOverview.jsx";
import RentalCondition from "../../components/RentalCondition/RentalCondition.jsx";
import CarSpecification from "../../components/CarSpecification/CarSpecification.jsx";
import AccessoriesList from "../../components/AccessoriesList/AccessoriesList.jsx";
import BookingForm from "../../components/BookingForm/BookingForm.jsx";
import ContainerForDatails from "../../components/ContainerForDatails/ContainerForDatails.jsx";

const CarDetailsPage = () => {
  const { id } = useParams();
  const allCar = useSelector(selectCar);
  const car = allCar.find((car) => car.id === id);
  return (
    <ContainerForDatails>
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
    </ContainerForDatails>
  );
};

export default CarDetailsPage;
