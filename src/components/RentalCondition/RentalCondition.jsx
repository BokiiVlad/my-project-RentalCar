import style from "./RentalCondition.module.css";

const RentalCondition = ({ car }) => {
  return (
    <div className={style.box}>
      <h3 className={style.title}>Rental Conditions:</h3>
      <div className={style.itemsBox}>
        <div className={style.boxElem}>
          <svg width="16px" height="16px">
            <use href="sprite/sprite.svg#icon-check"></use>
          </svg>
          <p className={style.text}>{car.rentalConditions[0]}</p>
        </div>
        <div className={style.boxElem}>
          <svg width="16px" height="16px">
            <use href="public/sprite/sprite.svg#icon-check"></use>
          </svg>
          <p className={style.text}>{car.rentalConditions[1]}</p>
        </div>
        <div className={style.boxElem}>
          <svg width="16px" height="16px">
            <use href="public/sprite/sprite.svg#icon-check"></use>
          </svg>
          <p className={style.text}>{car.rentalConditions[2]}</p>
        </div>
      </div>
    </div>
  );
};

export default RentalCondition;
