import { Link } from "react-router-dom";
import style from "./Logo.module.css";

const Logo = () => {
  return (
    <Link className={style.link} to="/">
      <svg className={style.logo} width="104" height="16">
        <use href="../../../assets/sprite/sprite.svg#icon-rental-car-shadow" />
      </svg>
    </Link>
  );
};

export default Logo;
