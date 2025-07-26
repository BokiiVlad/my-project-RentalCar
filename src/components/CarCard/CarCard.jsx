import style from "./CarCard.module.css";
import Button from "../Button/Button.jsx";
import { useDispatch, useSelector } from "react-redux";
import { selectFavorite } from "../../redux/favorites/selectors.js";
import {
  addFavorite,
  removeFavorite,
} from "../../redux/favorites/favoritesSlice.js";

const CarCard = ({ car }) => {
  const carArr = car.address.split(",");
  const country = carArr[2];
  const city = carArr[1];
  const typeLowerCase = car.type.toLowerCase();
  const favoritesArr = useSelector(selectFavorite);
  const isFavorite = favoritesArr.includes(car.id);
  const dispatch = useDispatch();

  const handleClick = () => {
    if (isFavorite) {
      dispatch(removeFavorite(car.id));
    } else {
      dispatch(addFavorite(car.id));
    }
  };

  return (
    <div className={style.cardBox}>
      {!isFavorite ? (
        <button onClick={handleClick} className={style.heartBut}>
          <svg className={style.svgHeartDefault} width="16" height="16">
            <use href="/sprite/sprite.svg#icon-heart-default"> </use>
          </svg>
        </button>
      ) : (
        <button onClick={handleClick} className={style.heartBut}>
          <svg className={style.svgHeartActive} width="16" height="16">
            <use href="/sprite/sprite.svg#icon-heart-active"> </use>
          </svg>
        </button>
      )}
      <img className={style.imgBox} src={car.img} />
      <div className={style.textBox}>
        <p className={style.text}>
          {car.brand} <span className={style.span}>{car.model}</span>,{" "}
          {car.year}
        </p>
        <p className={style.text}>${car.rentalPrice}</p>
      </div>
      <div className={style.strokeBox}>
        <p className={style.navigation}>{city}</p>
        <svg className={style.svg} width="2" height="16">
          <use href="/sprite/sprite.svg#icon-vector"></use>
        </svg>
        <p className={style.navigation}>{country}</p>
        <svg className={style.svg} width="2" height="16">
          <use href="/sprite/sprite.svg#icon-vector"></use>
        </svg>
        <p className={style.navigation}>{car.rentalCompany} </p>
        <svg className={style.svg} width="2" height="16">
          <use href="/sprite/sprite.svg#icon-vector"></use>
        </svg>
      </div>
      <div className={style.strokeBox}>
        <p className={style.navigation}>{typeLowerCase}</p>
        <svg className={style.svg} width="2" height="16">
          <use href="/sprite/sprite.svg#icon-vector"></use>
        </svg>
        <p className={style.navigation}>{car.mileage} km</p>
      </div>
      <Button to={`/catalog/${car.id}`} className={style.button}>
        Read more
      </Button>
    </div>
  );
};

export default CarCard;
