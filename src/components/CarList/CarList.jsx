import { useSelector } from "react-redux";
import { selectCar } from "../../redux/cars/selectors.js";
import CarCard from "../CarCard/CarCard.jsx";
import style from "./CarList.module.css";
const CarList = () => {
  const car = useSelector(selectCar);

  return (
    <ul className={style.listBox}>
      {car.map((el) => (
        <li className={style.listElement} key={el.id}>
          <CarCard car={el} />
        </li>
      ))}
    </ul>
  );
};
export default CarList;
