import { useDispatch } from "react-redux";
import style from "./ButMore.module.css";
import { incrementPage } from "../../redux/cars/carsSlice.js";

const ButMore = () => {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(incrementPage());
  };

  return (
    <>
      <button type="button" onClick={handleClick} className={style.but}>
        Load more
      </button>
    </>
  );
};

export default ButMore;
