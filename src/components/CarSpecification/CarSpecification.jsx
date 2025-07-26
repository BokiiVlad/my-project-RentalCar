import style from "./CarSpecification.module.css";

const CarSpecification = ({ car }) => {
  return (
    <div className={style.box}>
      <h3 className={style.title}>Car Specifications:</h3>
      <div className={style.itemsBox}>
        <div className={style.boxElem}>
          <svg className={style.svg} width="16px" height="16px">
            <use href="/sprite/sprite.svg#icon-calendar"></use>
          </svg>
          <p className={style.text}>Year: {car.year}</p>
        </div>
        <div className={style.boxElem}>
          <svg className={style.svg} width="16px" height="16px">
            <use href="/sprite/sprite.svg#icon-car"></use>
          </svg>
          <p className={style.text}>Type: {car.type}</p>
        </div>
        <div className={style.boxElem}>
          <svg className={style.svg} width="16px" height="16px">
            <use href="/sprite/sprite.svg#icon-fuel-pump"></use>
          </svg>
          <p className={style.text}>Fuel Consumption: {car.fuelConsumption}</p>
        </div>
        <div className={style.boxElem}>
          <svg className={style.svg} width="16px" height="16px">
            <use href="/sprite/sprite.svg#icon-gear"></use>
          </svg>
          <p className={style.text}>Engine Size: {car.engineSize}</p>
        </div>
      </div>
    </div>
  );
};

export default CarSpecification;
