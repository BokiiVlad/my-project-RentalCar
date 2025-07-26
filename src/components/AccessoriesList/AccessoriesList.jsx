import style from "./AccessoriesList.module.css";

const AccessoriesList = ({ car }) => {
  return (
    <div className={style.box}>
      <h3 className={style.title}>Accessories and functionalities:</h3>
      <div className={style.itemsBox}>
        <div className={style.boxElem}>
          <svg width="16px" height="16px">
            <use href="/sprite/sprite.svg#icon-check"></use>
          </svg>
          <p className={style.text}>{car.accessories[0]}</p>
        </div>
        <div className={style.boxElem}>
          <svg width="16px" height="16px">
            <use href="/sprite/sprite.svg#icon-check"></use>
          </svg>
          <p className={style.text}>{car.accessories[1]}</p>
        </div>
        <div className={style.boxElem}>
          <svg width="16px" height="16px">
            <use href="/sprite/sprite.svg#icon-check"></use>
          </svg>
          <p className={style.text}>{car.accessories[2]}</p>
        </div>
        <div className={style.boxElem}>
          <svg width="16px" height="16px">
            <use href="/sprite/sprite.svg#icon-check"></use>
          </svg>
          <p className={style.text}>{car.functionalities[0]}</p>
        </div>
        <div className={style.boxElem}>
          <svg width="16px" height="16px">
            <use href="/sprite/sprite.svg#icon-check"></use>
          </svg>
          <p className={style.text}>{car.functionalities[1]}</p>
        </div>
        <div className={style.boxElem}>
          <svg width="16px" height="16px">
            <use href="/sprite/sprite.svg#icon-check"></use>
          </svg>
          <p className={style.text}>{car.functionalities[2]}</p>
        </div>
      </div>
    </div>
  );
};

export default AccessoriesList;
