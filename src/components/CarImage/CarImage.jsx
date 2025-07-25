import style from "./CarImage.module.css";

const CarImage = ({ car }) => {
  return (
    <>
      <img className={style.img} src={car.img} />
    </>
  );
};

export default CarImage;
