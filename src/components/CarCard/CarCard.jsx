import style from "./CarCard.module.css";
import Button from "../Button/Button.jsx";

const CarCard = ({ car }) => {
  const carArr = car.address.split(",");
  const country = carArr[2];
  const city = carArr[1];
  const typeLowerCase = car.type.toLowerCase();

  return (
    <div className={style.cardBox}>
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
          <use href="../../../assets/sprite/sprite.svg#icon-vector"></use>
        </svg>
        <p className={style.navigation}>{country}</p>
        <svg className={style.svg} width="2" height="16">
          <use href="../../../assets/sprite/sprite.svg#icon-vector"></use>
        </svg>
        <p className={style.navigation}>{car.rentalCompany} </p>
        <svg className={style.svg} width="2" height="16">
          <use href="../../../assets/sprite/sprite.svg#icon-vector"></use>
        </svg>
      </div>
      <div className={style.strokeBox}>
        <p className={style.navigation}>{typeLowerCase}</p>
        <svg className={style.svg} width="2" height="16">
          <use href="../../../assets/sprite/sprite.svg#icon-vector"></use>
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
