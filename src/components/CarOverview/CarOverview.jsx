import style from "./CarOverview.module.css";

const CarOverview = ({ car }) => {
  return (
    <div className={style.box}>
      <p className={style.text}>
        {car.brand} <span className={style.span}>{car.model}</span>, {car.year}
      </p>
      <div>
        <svg width="16px" height="16px">
          <use href="../../../assets/sprite/sprite.svg#icon-navigation"></use>
        </svg>
        <p></p>
      </div>
    </div>
  );
};

export default CarOverview;
