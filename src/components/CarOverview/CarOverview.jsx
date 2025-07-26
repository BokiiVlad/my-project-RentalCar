import style from "./CarOverview.module.css";

const CarOverview = ({ car }) => {
  const parts = car.address.split(",").map((part) => part.trim());
  const country = parts[2];
  const city = parts[1];
  const idSlice = car.id.slice(0, 4);

  return (
    <div className={style.box}>
      <div className={style.brandBox}>
        <h2 className={style.brand}>
          {car.brand} <span className={style.span}>{car.model}</span>,{" "}
          {car.year}
        </h2>
        <p className={style.id}>id: {idSlice}</p>
      </div>
      <div className={style.countryBox}>
        <svg className={style.svg} width="16px" height="16px">
          <use href="/sprite/sprite.svg#icon-navigation"></use>
        </svg>
        <p className={style.textLocation}>
          {city}, {country}
        </p>
        <p className={style.textMilage}>Mileage: {car.mileage} km</p>
      </div>
      <p className={style.price}>{car.rentalPrice}$</p>
      <p className={style.description}>{car.description}</p>
    </div>
  );
};

export default CarOverview;
