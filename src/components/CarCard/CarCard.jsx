import style from "./CarCard.module.css";
import Button from "../Button/Button.jsx";

const CarCard = ({ car }) => {
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
      <div>
        <p>{car.rentalCompany}</p>
      </div>
      <Button to={`/catalog/${car.id}`} className={style.button}>
        Read more
      </Button>
    </div>
  );
};

export default CarCard;
