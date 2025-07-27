import React from "react";
import style from "./NotCar.module.css";

const NotCar = () => {
  return (
    <div className={style.notCarContainer}>
      <h2>Car Not Found</h2>
      <p>
        Sorry, the car you are looking for does not exist or has been removed.
      </p>
    </div>
  );
};

export default NotCar;
